import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import WeatherSearch from "./WeatherSearch.js";

import App from "./App";
import CurrentDate from "./CurrentDate";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
    <WeatherSearch />
    <CurrentDate />
  </StrictMode>
);
