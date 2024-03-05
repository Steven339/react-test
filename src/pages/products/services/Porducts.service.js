import axios from "axios";

export const getProducts = async () => {
	const response = await axios.get("https://localhost:7136/products");
	console.log(response);
}

export const addProducts = () => {
	const response = axios.post("https://localhost:7136/products");
	console.log(response);
}