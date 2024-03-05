export const ProductsAdapter = (products) => {
  return products.map((product) => {
    return {
      id: product.id,
      name: product.name,
      price: product.price,
      priceWithDiscount: product.priceWithDiscount,
      discountType: product.discountType,
      stock: product.stock
    };
  });
}