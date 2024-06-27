import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import { instance } from "../apis";
import { Link } from "react-router-dom";

const Dashboard = () => {
	const { state, dispatch } = useContext(ProductContext);
	console.log(state);

	const handleRemove = async (id) => {
		if (confirm("Are you sure?")) {
			await instance.delete(`/products/${id}`);
			dispatch({ type: "DELETE_PRODUCT", payload: id });
		}
	};
	return (
		<div>
			<h1>Hello, Admin</h1>
			<Link to="/product-add" className="btn btn-primary">
				Them san pham moi
			</Link>
			<table className="table-bordered table-striped text-center">
				<thead>
					<tr>
						<th>ID</th>
						<th>Title</th>
						<th>Price</th>
						<th>Desciption</th>
						<th>Thumbnail</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{state.products.map((item) => (
						<tr key={item.id}>
							<td>{item.id}</td>
							<td>{item.title}</td>
							<td>{item.price}</td>
							<td>{item.description}</td>
							<td>
								<img src={item.thumbnail} alt={item.title} />
							</td>
							<td>
								<Link to={`/product-edit/${item.id}`} className="btn btn-warning">
									Edit
								</Link>{" "}
								<button className="btn btn-danger" onClick={() => handleRemove(item.id)}>
									Remove
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Dashboard;
