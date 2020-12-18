const axios = require("axios");
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
var cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello InvoiceTracker");
});

app.get("/react", (req, res) => {
  res.send("Hello React");
});
mongoose
  .connect(process.env.MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDb connected");
    return app.listen(PORT, () => {
      console.log(`Example app listening at http://localhost:${PORT}`);
    });
  })
  .then((res) => {
    console.log(`Server running at ${res.url}`);
  });
