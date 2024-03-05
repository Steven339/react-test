import { Box, Button, Modal, TextField } from "@mui/material";
import { useState } from "react";
import {addProducts} from "../services/Porducts.service";

export const AddProducts = () => {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const handleSave = () => {
		const product = {
			name: "test",
			price: 10,
			priceWithDiscount: 10,
			discountType: "percentage",
			stock: 10
		}
		addProducts(product);
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
					<TextField id="outlined-basic" label="Nombre" variant="outlined" />
					<TextField id="outlined-basic" label="Precio" variant="outlined" />
					<TextField id="outlined-basic" label="Precio con descuento" variant="outlined" />
					<TextField id="outlined-basic" label="Tipo de descuento" variant="outlined" />
					<TextField id="outlined-basic" label="Cantidad" variant="outlined" />
					<Button variant="text" onClick={handleClose}>Cancelar</Button>
					<Button variant="contained" onClick={handleSave}>Guardar</Button>
				</Box>
			</Modal>
		</div>
	)
}