import express from "express";
import { config } from "dotenv";

config();

const app = express();

const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(port, () => console.log(`server running on por ${port}`));