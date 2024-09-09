const productType = {
    version: 1.0,
}

async function getFullName(codeId, productName) {
  console.log(codeId + "---" + productName);
}

async function getProductLabel(productName) {
  console.log("Product " + productName);
}

module.exports = {
  getFullName,
  getProductLabel,
  productType,
};
