import mongoose from "mongoose";
const dbUrl = process.env.DATABASE_URL ?? "Connection failed";
export const db = mongoose.createConnection(dbUrl);
