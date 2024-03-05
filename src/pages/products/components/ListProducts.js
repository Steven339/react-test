import React from 'react';
import DataTable from 'react-data-table-component';

const columns = [
	{
		name: 'ID',
		selector: row => row.id,
	},
	{
		name: 'Nombre',
		selector: row => row.name,
	},
	{
		name: 'Precio',
		selector: row => row.price,
	},
	{
		name: 'Precio con descuento',
		selector: row => row.priceWithDiscount,
	},
	{
		name: 'Tipo de descuento',
		selector: row => row.discountType,
	},
	{
		name: 'Stock',
		selector: row => row.stock,
	}
];

export const ListProducts = ({ data }) => {
	return (
		<DataTable
			columns={columns}
			data={data}
		/>
	)
};