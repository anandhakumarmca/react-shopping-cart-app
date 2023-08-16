// Import necessary libraries
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx"; // Import the root component of your app
import "./index.css"; // Import your main CSS file

// Use ReactDOM.createRoot to render your app into the root element
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App /> {/* Render your root component */}
  </React.StrictMode>
);
