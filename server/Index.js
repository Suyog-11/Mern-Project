import express from "express";
import connectDB from "./config/database.js";
import router from "./routes/transaction.js";
import cors from "cors";
const app = express();
const port = 3000;

import dotenv from "dotenv";
dotenv.config();
app.use(cors());
app.use(express.json());
app.use(router);
connectDB();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
