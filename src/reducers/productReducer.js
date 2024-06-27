export const productReducer = (state, action) => {
	switch (action.type) {
		case "SET_PRODUCTS":
			return {
				...state,
				products: action.payload,
			};

		case "ADD_PRODUCT":
			return {
				...state,
				products: [...state.products, action.payload],
			};

		case "UPDATE_PRODUCT":
			return {
				...state,
				products: state.products.map((item) => (item.id === action.payload.id ? action.payload : item)),
			};

		case "DELETE_PRODUCT":
			return {
				...state,
				products: state.products.filter((item) => item.id !== action.payload),
			};
		default:
			return;
	}
};
