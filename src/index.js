import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./commponenets/App";
import { QuizProvider } from "./commponenets/contexts/QuizContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QuizProvider>
      <App />
    </QuizProvider>
  </React.StrictMode>
);
