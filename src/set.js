import "dotenv/config";
import db from "../src/libs/firebase/rtdb_connection.js";
import { ref, set } from "firebase/database";

const newUserID = "-NbzO8VQyw50r8C7aNMX";
const refNode = ref(db, `clientes/${newUserID}`);
const newUserData = {
    username: "João Cléber",
    idade: "32",
};
set(refNode, newUserData)
    .then(() => console.log("Inserido!!! e ou Atualizado!!!"))
    .catch(() => console.log("Erro ao inserir!!"))
    .finally(() => process.exit());
