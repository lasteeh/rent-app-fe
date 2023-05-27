import React from "react";
import ReactDOM from "react-dom/client";
import CurrentUserProvider from "./context/CurrentUserProvider";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CurrentUserProvider>
      <App />
    </CurrentUserProvider>
  </React.StrictMode>
);
