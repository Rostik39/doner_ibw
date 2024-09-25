import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.jsx";
import "./scss/style.scss"

const root = document.querySelector("#root")
	? document.querySelector("#root")
	: document.querySelector(".wrapper");

ReactDOM.createRoot(root).render(
	<App />
);
