import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Import the CSS file
import App from "./App";
// import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import store from "./Redux/store";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(
  <Provider store={store}>
    <App />
  </Provider>
);

// reportWebVitals(console.log);
