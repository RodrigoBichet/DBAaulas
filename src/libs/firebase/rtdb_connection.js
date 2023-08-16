import "dotenv/config";
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCSioQo_YrRu63E11FTpxnqll5chnecF-E",
    authDomain: "projeto-bda01.firebaseapp.com",
    databaseURL: "https://projeto-bda01-default-rtdb.firebaseio.com",
    projectId: "projeto-bda01",
    storageBucket: "projeto-bda01.appspot.com",
    messagingSenderId: "814878300890",
    appId: "1:814878300890:web:01192563722310865a63e3",
};

console.log(firebaseConfig);

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export default database;
