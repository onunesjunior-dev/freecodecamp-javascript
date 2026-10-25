const inventory = [];

function findProductIndex(productName) {
  const normalized = productName.toLowerCase();
  return inventory.findIndex(item => item.name.toLowerCase() === normalized);
}

function addProduct(product) {
  const normalizedName = product.name.toLowerCase();
  const index = findProductIndex(normalizedName);

  if (index !== -1) {
    inventory[index].quantity += product.quantity;
    console.log(`${normalizedName} quantity updated`);
  } else {
    inventory.push({ name: normalizedName, quantity: product.quantity });
    console.log(`${normalizedName} added to inventory`);
  }
}

function removeProduct(productName, quantity) {
  const normalizedName = productName.toLowerCase();
  const index = findProductIndex(normalizedName);

  if (index === -1) {
    console.log(`${normalizedName} not found`);
    return;
  }

  const product = inventory[index];
  if (quantity > product.quantity) {
    console.log(`Not enough ${normalizedName} available, remaining pieces: ${product.quantity}`);
    return;
  }

  product.quantity -= quantity;
  console.log(`Remaining ${normalizedName} pieces: ${product.quantity}`);

  if (product.quantity === 0) {
    inventory.splice(index, 1);
  }
}
