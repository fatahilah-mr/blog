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
        throw new Error("No access token received from GitHub: " + JSON.stringify(data));
    }
    
    // Sveltia / Netlify CMS expects a postMessage with the token to the opener window
    const script = `
      <script>
        const receiveMessage = (message) => {
          window.opener.postMessage(
            'authorization:${provider}:success:${JSON.stringify({ token, provider })}',
            message.origin
          );
          window.removeEventListener("message", receiveMessage, false);
        }
        window.addEventListener("message", receiveMessage, false);
        window.opener.postMessage("authorizing:${provider}", "*");
      </script>
    `;
    
    return new Response(script, {
      headers: { "Content-Type": "text/html;charset=UTF-8" }
    });
  } catch (error) {
    return new Response(error.message, { status: 500 });
  }
}
