const express = require("express");
const app = express();
const bodyParser = require("body-parser");
require("dotenv").config();
const cors = require("cors");

const db = require("./db");
const userRouter = require("./router/userRouter");
const homeRouter = require("./router/homeRouter");
const itemRouter = require("./router/itemRouter");
const authRouter = require("./router/authRouter");

const server = () => {
  app.listen(5001, (data, error) => {
    if (error) {
      console.log("error when server try to runing state: ", error);
    }
    console.log("server running on http://localhost:5001");
  });
};

server();
db();
app.use(cors());
app.use(bodyParser.json());
app.use("/", homeRouter);
app.use("/user", userRouter);
app.use("/", itemRouter);
app.use("/auth", authRouter);
