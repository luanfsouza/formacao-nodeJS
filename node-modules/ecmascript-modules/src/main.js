import * as database from "./utils/database.js";

import {getDataFromApi} from "./utils/api.js"
import key from "./utils/api.js"

console.log("ola esc");
database.connectToDatabase("Postgres");
database.desconnectDatabase()
console.log(key)
getDataFromApi()