import express from "express";
const app = express();
import dotenv from "dotenv"; // loads environment variables from a .env file into process.env
dotenv.config();
import connectDB from "./db/connect.js";

app.get("/", (req, res) => {
  res.send("Welcome!");
});

const port = process.env.PORT || 8000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
