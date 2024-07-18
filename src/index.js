import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
/* GLOBAL CSS */
import "./index.css";
import { Theme } from '@radix-ui/themes';
import { Provider } from "react-redux";
import store from "./redux/store";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Theme>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </Theme>
    </Provider>
  </React.StrictMode>
);

