import { Box, Button, Modal, TextField } from "@mui/material";
import { useState } from "react";
import { addProducts } from "../services/Porducts.service";

export const AddProducts = ({ onClose }) => {
	const [open, setOpen] = useState(false);
	const [name, setName] = useState("");
	const [price, setPrice] = useState("");
	const [priceWithDiscount, setPriceWithDiscount] = useState("");
	const [discountType, setDiscountType] = useState("");
	const [stock, setStock] = useState("");
	
	const handleOpen = () => setOpen(true);
	const handleClose = () => {
		setOpen(false);
		onClose();
	};
	
	const handleSave = () => {
		const product = {
			name: name,
			price: parseInt(price),
			priceWithDiscount: parseInt(priceWithDiscount),
			discountType: discountType,
			stock: parseInt(stock)
		}
		console.log(product);
		addProducts(product);
		handleClose();
	}
	return (
		<div>
			<Button variant="text" onClick={handleOpen}>Agregar producto</Button>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box className={"modal"}>
					<h2>Crear producto</h2>
					<TextField id="outlined-basic" label="Nombre" variant="outlined" value={name}
					           onChange={(e) => setName(e.target.value)} />
					<TextField id="outlined-basic" label="Precio" variant="outlined" value={price}
					           onChange={(e) => setPrice(e.target.value)} />
					<TextField id="outlined-basic" label="Precio con descuento" variant="outlined" value={priceWithDiscount}
					           onChange={(e) => setPriceWithDiscount(e.target.value)} />
					<TextField id="outlined-basic" label="Tipo de descuento" variant="outlined" value={discountType}
					           onChange={(e) => setDiscountType(e.target.value)} />
					<TextField id="outlined-basic" label="Cantidad" variant="outlined" value={stock}
					           onChange={(e) => setStock(e.target.value)} />
					<Button variant="text" onClick={handleClose}>Cancelar</Button>
					<Button variant="contained" onClick={handleSave}>Guardar</Button>
				</Box>
			</Modal>
		</div>
	)
}