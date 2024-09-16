async function connectToDatabase(user, password) {
  if (user === "naruto" && password === "uzumaki") {
    console.log("conexão bem sucedida!");
  } else {
    console.log("falha na conexão.");
  }
}

export default connectToDatabase;
