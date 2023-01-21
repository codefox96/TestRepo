import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import Muzc from "./components/Muzc.js";
import QuoteContainer from "./components/QuoteContainer";

import "./styles.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Muzc />
  </React.StrictMode>,
  rootElement
);
