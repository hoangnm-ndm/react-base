import { createContext, useEffect, useReducer } from "react";
import { productReducer } from "../reducers/productReducer";
import { instance } from "../apis";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
	const [state, dispatch] = useReducer(productReducer, { products: [] });
	useEffect(() => {
		const fetchAPI = async () => {
			const { data } = await instance.get(`/products`);
			console.log(data);
			dispatch({ type: "SET_PRODUCTS", payload: data });
		};

		fetchAPI();
	}, []);
	return <ProductContext.Provider value={{ state, dispatch }}>{children}</ProductContext.Provider>;
};

export default ProductProvider;
