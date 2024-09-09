const databaseType = {
  userType: "admin",
  typeData: "datalocal",
};

async function connectToDatabase(dataName) {
  console.log("conectado ao banco: " + dataName);
}
async function desconnectDatabase() {
  console.log("desconectando database...");
}
export { connectToDatabase, desconnectDatabase, databaseType};
