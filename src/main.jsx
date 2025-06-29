// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { StockProvider } from "./context/StockContext";
import { ClerkProvider } from "@clerk/clerk-react";
import { WatchlistProvider } from "./context/WatchlistContext";


const clerkKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={clerkKey}>
      <BrowserRouter>
        <WatchlistProvider>
          <StockProvider>
            <App />
          </StockProvider>
        </WatchlistProvider>
      </BrowserRouter>
    </ClerkProvider>
  </React.StrictMode>
);
