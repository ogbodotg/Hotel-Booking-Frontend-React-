import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { SearchContextProvider } from "./contextAPI/SearchContext";
import { AuthContextProvider } from "./contextAPI/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <SearchContextProvider>
        <App />
      </SearchContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
