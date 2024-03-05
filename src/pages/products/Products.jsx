import { getProducts } from "./services/Porducts.service";
import { ListProducts } from "./components/ListProducts";
import { AddProducts } from "./components/AddProducts";
import React, { useEffect, useState } from 'react';

export const Products = () => {
	const [products, setProducts] = useState([]);
	
	useEffect(() => {
		getProducts();
	}, [products]); // Empty dependency array
	
	return (
		<>
			<div className={"products-container"}>
				<h1>List Products</h1>
				<ListProducts></ListProducts>
				<AddProducts></AddProducts>
			</div>
		</>
	)
};