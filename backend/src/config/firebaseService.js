import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import * as fs from "fs";

const serviceAccount = JSON.parse(fs.readFileSync("./config/key.json"));

const app = initializeApp({
  credential: cert(serviceAccount),
});

const db = getFirestore(app);

export default db;
