import mongoose from "mongoose";

export async function connect() {
  if (mongoose.connection.readyState >= 1) {
    console.log("⚡ Using existing MongoDB connection");
    return;
  }

  const mongoUri: string = process.env.MONGO_URI || "";
  if (!mongoUri) {
    throw new Error("❌ MongoDB URI is missing in environment variables!");
  }

  try {
    await mongoose.connect(mongoUri);

    mongoose.connection.on("connected", () => {
      console.log("✅ MongoDB Connected Successfully!");
    });

    mongoose.connection.on("error", (err) => {
      console.error("❌ MongoDB Connection Error: " + err);
      process.exit(1);
    });
  } catch (error) {
    console.error("❌ Something went wrong: " + error);
    process.exit(1);
  }
}
