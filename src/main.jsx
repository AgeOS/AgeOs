import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { ClerkProvider } from "@clerk/clerk-react";

let PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_FRONTEND_API_KEY;

if (!PUBLISHABLE_KEY) {
  PUBLISHABLE_KEY = "pk_test_Y3VycmVudC1iZWV0bGUtNTIuY2xlcmsuYWNjb3VudHMuZGV2JA"
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ClerkProvider>
  </StrictMode>
);
