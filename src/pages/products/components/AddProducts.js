import { Box, Button, Modal, TextField } from "@mui/material";
import { useState } from "react";

export const AddProducts = () => {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
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
					<Button variant="contained" onClick={handleClose}>Guardar</Button>
				</Box>
			</Modal>
		</div>
	)
}