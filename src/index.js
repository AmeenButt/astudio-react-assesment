import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import State from "state/state";
import { BrowserRouter } from "react-router-dom";
import { ProductState } from "state/productState";
import { UsersState } from "state/usersState";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <State>
        <UsersState>
          <ProductState>
            <App />
          </ProductState>
        </UsersState>
      </State>
    </BrowserRouter>
  </React.StrictMode>
);
