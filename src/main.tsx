import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";

const root = createRoot(document.getElementById("root11")!);

root.render(
  <Auth0Provider
    domain="dev-dutclp380i5ibhtl.us.auth0.com"
    clientId="2xq9YNrA28gTr2Mx7he6ND9RwCfMWL6y"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <App />
  </Auth0Provider>
);
