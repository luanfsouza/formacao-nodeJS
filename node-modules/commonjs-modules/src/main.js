const {
  getFullName,
  getProductLabel,
  productType,
} = require("./services/products");
const variaveis = require("./services/config");
const dataBase = require("./services/dataBase");

async function main() {
  console.log("ola main");

  //   p.getFullName("jogos", "vorazes");
  //   p.getProductLabel("torta de abobora");
  //   console.log(p.productType);

  console.log(variaveis.devArea);
  console.log(variaveis.num);

  dataBase.connectToDatabase("Postgres");
  dataBase.disconnectDatabase();
}

main();
