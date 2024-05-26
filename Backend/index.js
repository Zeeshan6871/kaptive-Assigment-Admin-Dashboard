const express = require("express");
const cors = require("cors");
const { connection } = require("./config/db");
const { userRouter } = require("./routes/user.route");
require("dotenv").config();

const app = express();

app.use(express.json(), cors());

app.use("/users", userRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(process.env.PORT || 3000, async () => {
  try {
    await connection;
    console.log(`Connected to DB`);
    console.log(`Server is running on port ${process.env.PORT}`);
  } catch (err) {
    console.log(err);
  }
});
