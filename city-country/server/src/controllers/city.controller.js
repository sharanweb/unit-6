const express = require("express");
const router = express.Router();
const City = require("../models/city.model");


router.post("/",async(req,res)=>{
    try {
        const city = await City.create(req.body);
        return res.status(201).send(city);
    } catch (error) {
        return res.status(500).send({message: error.message});
    }
});


router.get("/", async(req,res)=>{
    try {
        const city = await City.find().populate().lean().exec();
        return res.status(201).send({"city":city});
    } catch (error) {
        return res.status(500).send({message: error.message});
    }
});

router.get("/:id", async(req,res)=>{
    try {
        const city = await City.find(req.params.id).populate().lean().exec();
        return res.status(201).send({"city":city});
    } catch (error) {
        return res.status(500).send({message: error.message});
    }
});

router.delete("/:id", async(req,res)=>{
    try {
        const city = await City.findByIdAndDelete(req.params.id, req.body).lean().exec();
        return res.status(201).send({"city":city});
    } catch (error) {
        return res.status(500).send({message: error.message});
    }
});
module.exports = router;