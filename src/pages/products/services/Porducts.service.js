import axios from "axios";
import {ProductsAdapter} from "../adapters/Products.adapter";

export const getProducts = async () => {
	const response = await axios.get("https://localhost:7136/products");
	console.log(response.data);
	return ProductsAdapter(response.data);
}

export const addProducts = (product) => {
	const response = axios.post("https://localhost:7136/products", {
		name: product.name,
		price: product.price,
		priceWithDiscount: product.priceWithDiscount,
		discountType: product.discountType,
		stock: product.stock
	});
	console.log(response);
}