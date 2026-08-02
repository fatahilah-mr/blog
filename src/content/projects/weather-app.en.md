---
title: "Weather App — Glassmorphism & Dynamic Background"
description: "An interactive weather forecast web app featuring an iOS Glassmorphism design, dynamic weather background transitions, and instant GPS location detection."
status: "completed"
techStack:
  - HTML5
  - CSS3
  - JavaScript (Vanilla)
  - OpenWeatherMap API
  - Vercel
startDate: "2026-06-13"
repoUrl: "https://github.com/fatahilah-mr/learn-to-make-a-website/tree/main/02-weather-app"
demoUrl: "https://weather-app-fatahilah.vercel.app"
heroImage: "/uploads/weather-app/weather-app-1.webp"
featured: true
references:
  - title: "OpenWeatherMap Current Weather Data API Documentation"
    url: "https://openweathermap.org/current"
  - title: "MDN Web Docs - Geolocation API"
    url: "https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API"
---


## 📌 1. Problem

Default mobile weather applications often contain intrusive advertisements and rigid interfaces. Three major issues exist in conventional weather tools:
- **Unimmersive Visual Feedback:** Changes in weather conditions (rain, clear skies, storm) fail to dynamically alter the overall interface ambiance in real time.
- **Error-Prone City Searching:** Users typing accidental leading/trailing spaces or inconsistent capitalizations frequently trigger API request failures.
- **Overhead of Heavy Frameworks:** Utilizing large JavaScript frameworks for lightweight applications bloats bundle sizes, delaying load times on mobile connections.

---

## 👤 2. Target User

1. **Commuters & Travelers:** Individuals needing quick temperature, humidity, and 3-hour forecast updates before traveling.
2. **Minimalist Design Enthusiasts:** Users preferring clean iOS Glassmorphism styling without advertising clutter or complex navigation bars.
3. **Frontend Web Developers:** Learners exploring Geolocation API integration, asynchronous JavaScript (`fetch`/`async-await`), and JSON payload parsing.

---

## 💡 3. Solution

Engineered a mobile-first responsive weather web app using **HTML5**, **CSS3**, and **Vanilla JavaScript** without external framework dependencies. Key highlights include:
- **iOS Glassmorphism Aesthetic:** Modern frosted-glass card containers with dynamic background ambiance matching active weather codes (e.g., lightning atmosphere during thunderstorms, bright blue gradients under clear skies).
- **Instant Geolocation Tracking:** Native browser Geolocation API integration fetching precise user coordinates in milliseconds.
- **Structured 5-Day Forecast:** Displays 3-hour interval predictions via a touch-friendly horizontal scroll container alongside a 5-day weather summary.

---

## ⭐ 4. Key Features

- **🔒 Auto-Trim & Input Sanitization:** Intelligent city name search handling whitespace cleaning and friendly HTTP 404 status error handling.
- **🤖 Automatic Dynamic Background:** Ambiance themes shift automatically based on OpenWeatherMap API condition codes (Thunderstorm, Drizzle, Rain, Snow, Clear, Clouds).
- **🛡️ 1-Click GPS Location Detector:** One-click location button requesting permissions and loading live coordinate weather data immediately.
- **🗺️ Horizontal Scroll Forecast:** Touch-friendly 3-hour forecast container optimized for mobile gesture scrolling.
- **📊 Comprehensive Atmospheric Indicators:** Real-time metrics covering current temperature, feels-like temperature, humidity levels, air pressure, and wind speed.

---

## 🧱 5. Challenges & Lessons Learned

- **Challenge 1: Async API Error Handling & GPS Permission Denials**
  - *Problem:* User GPS permission rejections or invalid city queries caused unhandled promise rejections and interface freezing.
  - *Solution:* Encapsulated all API invocations within robust `try-catch-finally` blocks, rendered informative error banner toasts, and provided a fallback default city (*Jakarta*).
- **Challenge 2: Glassmorphism Render Performance on Mobile**
  - *Problem:* Applying multiple CSS `backdrop-filter: blur()` properties on stacked card containers induced scroll frame drops on mid-range smartphones.
  - *Solution:* Utilized `will-change: transform` hints and isolated backdrop blur effects exclusively to primary content cards.

---

## 📈 6. Impact

- **Before:** Users relied on heavy mobile applications loaded with advertisements or slow third-party websites.
- **After:**
  - **Sub-Second Load Times:** The application renders in under 500ms with zero framework overhead.
  - **100% Responsive & Mobile-Optimized:** Delivers a smooth user experience across iOS, Android, and desktop browsers.

---

## 🛠️ Tech Choices

- **Vanilla JavaScript (ES6+):** Selected for minimal bundle sizes and instant browser execution without complex build pipelines.
- **OpenWeatherMap API:** A reliable global weather service offering generous free-tier call limits and accurate real-time metrics.
- **CSS3 Variables & Backdrop Filter:** Enables dynamic color token management and glassmorphism styling without external CSS frameworks.
- **Vite & Vercel Edge Network:** Modern asset bundler and global edge infrastructure ensuring sub-second global content delivery.

---

## 🖼️ Screenshots & Visual Demo

![Main Weather App Glassmorphism Interface](/uploads/weather-app/weather-app-1.webp)
*Figure 1: Main interface of Weather App featuring iOS glassmorphism styling, 3-hour forecast, and automatic location detection.*
