import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.jsx";
import { Provider } from 'react-redux'
import { store } from "./state/store.js";
import "./scss/style.scss"

const root = document.querySelector("#root")
    ? document.querySelector("#root")
    : document.querySelector(".wrapper");

ReactDOM.createRoot(root).render(
    <Provider store={store}>
        <App />
    </Provider>
);
