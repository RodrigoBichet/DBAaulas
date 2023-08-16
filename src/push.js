require("dotenv").config();
import db from "../src/libs/firebase/rtdb_connection.js";
import { push, ref } from "firebase/database";

const newUser = {
    username: "Maria",
    idade: "15",
};

const newUser2 = {
    username: "João",
    idade: "25",
};

const newUser3 = {
    username: "Ana",
    idade: "23",
};

try {
    await push(ref(db, "clientes/"), newUser3);
    console.log("Inserido!");
} catch (error) {
    console.log("Erro: " + error);
} finally {
    console.log("Finalizando ...");
    process.exit(0);
}
