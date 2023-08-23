import "dotenv/config";
import db from "../src/libs/firebase/rtdb_connection.js";
import { ref, child, set } from "firebase/database";

console.log(process.env);
const refNode = ref(db, "clientes/-NbzO6rXFBuMSRi_1WeW");
const refAttr = child(refNode, "username");

try {
    await set(refAttr, "Maria Joaquina");
    console.log("Alterado!!!");
} catch (error) {
    console.log("Error:" + error);
    console.log("Finish!!!");
    process.exit(0);
}
