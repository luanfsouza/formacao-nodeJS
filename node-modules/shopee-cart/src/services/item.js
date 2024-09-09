async function createItem(name, price, quantity) {
  return {
    name,
    price,
    quantity,
    subTotal: () => {
      return price * quantity;
    },
  };
}

export default createItem;
