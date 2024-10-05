import express from "express";
import dotenv from "dotenv";

const app = express();

app.use(express.json());

dotenv.config();

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("welcome to my first ever backend!!!!");
});

app.get("/login", (req, res) => {
  res.send("you are now logged in");
})

app.post("/signup", (req, res) => {
  res.send("your details are now with us for ever!!!");
})

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
