const express = require("express");
const app = express();
module.exports = app; //export to server.js


app.use(express.json());


const usersController = require("./controllers/user.controller");
const lotsController = require("./controllers/lot.controller");
const floorController = require("./controllers/floor.controller");
const parkingController = require("./controllers/parking.controller");
const assistantController = require("./controllers/assistant.controller");

// //middlewares
app.use("/users",usersController);
app.use("/lots",lotsController);
app.use("/floors",floorController);
app.use("/parking",parkingController);
app.use("/assistant",assistantController);