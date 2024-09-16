async function permittedCharacters() {
  let permited = [];

  if (process.env.UPPERCASE_LETTERS === "true") {
    permited.push(..."ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  }
  if (process.env.LOWERCASE_LETTERS === "true") {
    permited.push(..."abcdefghijklmnopqrstuvwxyz");
  }
  if (process.env.NUMBERS === "true") {
    permited.push(..."0123456789");
  }
  if (process.env.SPECIAL_CHARACTERS === "true") {
    permited.push(..."!@#$%&*()");
  }

  return permited;
}

async function handle() {
  let password = "";
  let characters = [];

  const passwordLength = process.env.PASSWORD_LENGTH;
  characters = await permittedCharacters();

  for (let i = 0; i < passwordLength; i++) {
    const index = Math.floor(Math.random() * characters.length);
    password += characters[index];
  }
  
  return password;
}
export default handle;
