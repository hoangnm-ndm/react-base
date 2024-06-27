import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Dashboard from "./admin/Dashboard";
import ProductForm from "./components/ProductForm";

function App() {
	return (
		<>
			<Routes>
				<Route index element={<Dashboard />} />
				<Route path="/product-add" element={<ProductForm />} />
				<Route path="/product-edit/:id" element={<ProductForm />} />
			</Routes>
		</>
	);
}

export default App;
