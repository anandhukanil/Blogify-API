import mongoose from "mongoose";


const dbInitializer = () => {
  const connectionString = process.env.MONGO_CONNECTION_STRING || "";

  // DB Setup
  mongoose.connect(connectionString);
  const database = mongoose.connection;
  
  database.on("error", (error) => {
    console.error(error);
  });
  
  database.once("connected", () => {
    console.log("Database Connected");
  });
};

export default dbInitializer;