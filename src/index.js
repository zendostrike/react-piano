import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";

// Ignore following line, just for metrics
import { initMixpanel } from "./mixpanel";

// Ignore following line, just for metrics
initMixpanel();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
