import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const client = new MongoClient(process.env.MONGO_URL);
const dbName = process.env.DB_NAME;

let db;

let userColection;
let noteColection;

export async function connectDB() {
  try {
    await client.connect();
    console.log("Connected to MongoDB Atlas");

    db = client.db(dbName);

    userColection = db.collection("users");
    noteColection = db.collection("notes");
  } catch (error) {
    console.error("DB connection failed:", error);
    process.exit(1);
  }
}

export function getUsersCollection() {
  if (!userColection) throw new Error("DB not initialized");
  return userColection;
}

export function getNoteColection() {
  if (!noteColection) throw new Error("DB not initialized");
  return noteColection;
}
