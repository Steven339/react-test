import { getProducts } from "./services/Porducts.service";
import { ListProducts } from "./components/ListProducts";
import { AddProducts } from "./components/AddProducts";
import React, { useEffect, useState } from 'react';
import "./Products.css";

export const Products = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		getProducts().then((products) => {
			setProducts(products);
		});
	}, []);

	return (
		<>
			<div className={"products-container"}>
				<h1>List Products</h1>
				<ListProducts data={products} />
				<AddProducts></AddProducts>
			</div>
		</>
	)
};