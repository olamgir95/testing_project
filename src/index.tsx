import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { ThemeProvider } from "@mui/material";
import theme from "app/MaterialTheme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
