import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import ProductProvider from "./contexts/ProductContext.jsx";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ProductProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</ProductProvider>
	</React.StrictMode>
);
