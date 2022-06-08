const express = require("express");
const User = require("../models/user.model");
const router = express.Router();

//to get all the users
router.get("/", async (req, res) => {
  try {
    const users = await User.find().lean().exec();
    res.status(200).send({ data: users});
  } catch (error) {
    res.status(500).send({error: error.message });
  }
});

//to  create new user
router.post("/create", async (req, res) => {
  try {
    const user = await User.create(req.body);
    return res.status(201).send({ data: user });
  } catch (error) {
    res.status(500).send({message: "error"});
  }
});

// to get single user by using  id
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id).lean().exec();
    return res.status(200).send({ data: user});
  } catch (error) {
    res.status(500).send({error: error.message });
  }
});


//edit user by id
router.patch("/:id/edit", async (req, res) => {
  try {
    const user = await User.findOneAndUpdate({ _id: req.params.id }, req.body, {new: true,}).lean().exec();
    return res.status(201).send({ data: user});
  } catch (error) {
    res.status(500).send({error: error.message });
  }
});