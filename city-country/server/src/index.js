const express = require("express");
const app = express();
const cors = require("cors");

const cityController = require("./controllers/city.controller");
const countryController = require("./controllers/country.controller");

app.use(cors());
app.use(express.json());
app.use("/add-city", cityController);
app.use("/add-country", countryController)

module.exports = app;