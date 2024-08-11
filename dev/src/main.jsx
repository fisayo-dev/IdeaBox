import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./styles/App.css";
import { ThemeProvider } from "@material-tailwind/react";
import { AuthProvider } from "./utils/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <App />
      </AuthProvider> 
    </ThemeProvider>
  </React.StrictMode>
);
