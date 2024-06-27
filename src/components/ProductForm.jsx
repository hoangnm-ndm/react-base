import { zodResolver } from "@hookform/resolvers/zod";
import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { productSchema } from "../utils/validationSchema";
import { instance } from "../apis";
import { ProductContext } from "../contexts/ProductContext";

const ProductForm = () => {
	const { id } = useParams();

	const { dispatch } = useContext(ProductContext);
	const nav = useNavigate();

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		resolver: zodResolver(productSchema),
	});

	if (id) {
		useEffect(() => {
			(async () => {
				const { data } = await instance.get(`/products/${id}`);
				reset(data);
			})();
		}, [id]);
	}

	const onSubmit = async (data) => {
		if (id) {
			// logic edit
			const res = await instance.patch(`/products/${id}`, data);
			console.log(res);
			dispatch({ type: "UPDATE_PRODUCT", payload: res.data });
		} else {
			// logic add
			const res = await instance.post(`/products`, data);
			dispatch({ type: "ADD_PRODUCT", payload: res.data });
		}

		nav("/");
	};

	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<h1>{id ? "Sua san pham" : "Them san pham"}</h1>
				<div className="mb-3">
					<label htmlFor="title" className="form-label">
						Title
					</label>
					<input type="text" className="form-control" {...register("title", { required: true })} />
					{errors.title && <span className="text-danger">{errors.title.message}</span>}
				</div>

				<div className="mb-3">
					<label htmlFor="price" className="form-label">
						Price
					</label>
					<input
						type="number"
						className="form-control"
						{...register("price", { required: true, valueAsNumber: true })}
					/>
					{errors.price && <span className="text-danger">{errors.price.message}</span>}
				</div>

				<div className="mb-3">
					<label htmlFor="description" className="form-label">
						Description
					</label>
					<textarea rows={4} className="form-control" {...register("description")} />
				</div>

				<div className="mb-3">
					<button className="btn btn-primary w-100">{id ? "Sua san pham" : "Them san pham"}</button>
				</div>
			</form>
		</div>
	);
};

export default ProductForm;
