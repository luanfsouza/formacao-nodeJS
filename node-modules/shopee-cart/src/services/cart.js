async function addItem(userCart, item) {
  userCart.push(item);
}

async function deleteItem(userCart, name) {
  for (let i = 0; i < userCart.length; i++) {
    if (userCart[i].name == name) {
      if (userCart[i].quantity > 1) {
        userCart[i].quantity--;

        break;
      } else {
        userCart.splice(i, 1);
        break; 
      }
    }
  }
}

async function displayCart(userCart) {
  console.log("Shopee cart list:");
  userCart.forEach((item, index) => {
    console.log(
      `${index + 1}. ${item.name} - R$ ${item.price} | ${
        item.quantity
      } | ${item.subTotal()}`
    );
  });
}

async function removeItem(userCart, name) {
  const index = userCart.findIndex((item) => item.name === name);
  if (index != -1) {
    userCart.splice(index, 1);
  }
  // userCart.splice(index, 1);
}

async function calculateTotal(userCart) {
  console.log(
    "total: " +
      userCart.reduce(
        (acumulator, itemAtual) => acumulator + itemAtual.subTotal(),
        0
      )
  );
}

export { addItem, calculateTotal, deleteItem, removeItem, displayCart };
