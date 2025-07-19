import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Load development-only scripts conditionally
if (import.meta.env.DEV) {
  // Load Replit dev banner only in development mode
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://replit.com/public/js/replit-dev-banner.js';
  document.head.appendChild(script);
}

createRoot(document.getElementById("root")!).render(<App />);
