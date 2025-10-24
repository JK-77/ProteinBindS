import mongoose, { Mongoose } from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL || "mongodb://localhost:27017/proteinBind";

interface MongooseConnection {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

let cached: MongooseConnection = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = {
    conn: null,
    promise: null,
  };
}

export const connectToDatabase = async () => {
  if (cached.conn) return cached.conn;

  try {
    cached.promise =
      cached.promise ||
      mongoose.connect(MONGODB_URL, {
        dbName: "proteinBind",
        bufferCommands: false,
      });

    cached.conn = await cached.promise;
    console.log("✅ Database connected successfully");
    return cached.conn;
  } catch (error) {
    console.warn("⚠️ Database connection failed, continuing without database:", error.message);
    // Return a mock connection to prevent app crashes
    return null;
  }
};
