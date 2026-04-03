// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async"; // 👈 Add this
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      {" "}
      {/* 👈 Wrap the entire app */}
      <BrowserRouter basename="/INOFO-Africa-/">
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>,
);
