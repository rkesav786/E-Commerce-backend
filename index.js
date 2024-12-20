const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const data = require("./Controller/dataControllers");

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("mongo connected"))
  .catch((error) => console.error("mongo db could not connected", error));

const port = process.env.PORT;
app.post("/api/formdata", data);
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
