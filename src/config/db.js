const mongoose = require("mongoose");
const logger = require("../utils/logger");

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    mongoose.connection.on("connected", () => {
      logger.info("✅ MongoDB connected...");
    });

    mongoose.connection.on("error", (err) => {
      logger.error("❌ MongoDB error:", err);
    });

    mongoose.connection.on("disconnected", () => {
      logger.warn("⚠️ MongoDB disconnected!");
    });
  } catch (err) {
    logger.error("❌ MongoDB connection error:", err);
    process.exit(1);
  }
}

module.exports = connectDB;
