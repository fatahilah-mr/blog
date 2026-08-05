export async function onRequest(context) {
  const url = new URL(context.request.url);
  const code = url.searchParams.get("code");
  const client_id = context.env.GITHUB_CLIENT_ID;
  const client_secret = context.env.GITHUB_CLIENT_SECRET;
  
  try {
    const response = await fetch("https://github.com/login/oauth/access_token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({
        client_id,
        client_secret,
        code,
      }),
    });
    
    const data = await response.json();
    const token = data.access_token;
    const provider = "github";
    
    if (!token) {
      const isBadCode = data.error === "bad_verification_code";
      const errorHtml = `
        <!DOCTYPE html>
        <html lang="id">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Sesi Login Kedaluwarsa — fmr.blog Admin</title>
          <style>
            body { font-family: system-ui, -apple-system, sans-serif; display: flex; align-items: center; justify-content: center; min-height: 100vh; margin: 0; background: #0f172a; color: #f8fafc; text-align: center; padding: 1rem; }
            .card { background: #1e293b; padding: 2.5rem 2rem; border-radius: 16px; box-shadow: 0 10px 30px rgba(0,0,0,0.5); max-width: 420px; width: 100%; border: 1px solid #334155; }
            .icon { font-size: 3rem; margin-bottom: 1rem; }
            h2 { margin: 0 0 0.5rem 0; font-size: 1.25rem; color: #f8fafc; }
            p { font-size: 0.925rem; color: #94a3b8; line-height: 1.5; margin: 0 0 1.5rem 0; }
            .btn { display: inline-block; padding: 0.75rem 1.5rem; background: #38bdf8; color: #0f172a; font-weight: 600; text-decoration: none; border-radius: 8px; font-size: 0.9rem; transition: background 0.2s; }
            .btn:hover { background: #7dd3fc; }
          </style>
        </head>
        <body>
          <div class="card">
            <div class="icon">🔒</div>
            <h2>${isBadCode ? 'Sesi Login Kedaluwarsa' : 'Gagal Otentikasi'}</h2>
            <p>${isBadCode ? 'Kode otentikasi dari GitHub sudah terpakai atau kedaluwarsa. Silakan tutup tab ini dan klik login kembali dari halaman admin CMS.' : 'Gagal menerima akses token dari GitHub: ' + (data.error_description || data.error || 'Terjadi kesalahan')}</p>
            <a class="btn" href="/admin/">Kembali ke Admin CMS</a>
          </div>
        </body>
        </html>
      `;
      return new Response(errorHtml, { status: 400, headers: { "Content-Type": "text/html;charset=UTF-8" } });
    }
    
    // Official Sveltia CMS postMessage format
    const content = JSON.stringify({ provider, token });
    const html = `<!doctype html>
      <html lang="id">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Otentikasi Berhasil — fmr.blog Admin</title>
        <style>
          body { font-family: system-ui, -apple-system, sans-serif; display: flex; align-items: center; justify-content: center; min-height: 100vh; margin: 0; background: #0f172a; color: #f8fafc; text-align: center; padding: 1rem; }
          .card { background: #1e293b; padding: 2.5rem 2rem; border-radius: 16px; box-shadow: 0 10px 30px rgba(0,0,0,0.5); max-width: 420px; width: 100%; border: 1px solid #334155; }
          .icon { font-size: 2.5rem; margin-bottom: 0.75rem; }
          h2 { margin: 0 0 0.5rem 0; font-size: 1.25rem; color: #f8fafc; }
          p { font-size: 0.925rem; color: #94a3b8; line-height: 1.5; margin: 0; }
        </style>
      </head>
      <body>
        <div class="card">
          <div class="icon">🎉</div>
          <h2>Login Berhasil!</h2>
          <p>Sesi otentikasi telah dikirim ke CMS. Jendela ini akan tertutup otomatis...</p>
        </div>
        <script>
          (() => {
            const provider = "${provider}";
            const content = ${JSON.stringify(content)};

            window.addEventListener('message', ({ data, origin }) => {
              if (data === 'authorizing:' + provider) {
                window.opener?.postMessage(
                  'authorization:' + provider + ':success:' + content,
                  origin
                );
              }
            });

            // Send immediately to opener
            window.opener?.postMessage('authorizing:' + provider, '*');
            window.opener?.postMessage('authorization:' + provider + ':success:' + content, '*');

            setTimeout(() => {
              try { window.close(); } catch(e) {}
            }, 800);
          })();
        </script>
      </body>
      </html>`;
    
    return new Response(html, {
      headers: { "Content-Type": "text/html;charset=UTF-8" }
    });
  } catch (error) {
    return new Response(`
      <!DOCTYPE html>
      <html>
      <head><meta charset="utf-8"><title>Error</title></head>
      <body style="background:#0f172a;color:#ef4444;font-family:sans-serif;padding:2rem;">
        <h3>Terjadi Kesalahan Otentikasi</h3>
        <pre>${error.message}</pre>
        <a href="/admin/" style="color:#38bdf8;">Kembali ke Admin</a>
      </body>
      </html>
    `, { status: 500, headers: { "Content-Type": "text/html;charset=UTF-8" } });
  }
}

