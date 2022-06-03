const express = require("express");
const router = express.Router();
const Country = require("../models/country.model");


router.post("/",async(req,res)=>{
    try {
        const country = await Country.create(req.body);
        return res.status(201).send(country);
    } catch (error) {
        return res.status(500).send({message: error.message});
    }
});


router.get("/", async(req,res)=>{
    try {
        const country = await Country.find().populate().lean().exec();
        return res.status(201).send({"country":country});
    } catch (error) {
        return res.status(500).send({message: error.message});
    }
});

router.get("/:id", async(req,res)=>{
    try {
        const country = await Country.find(req.params.id).populate().lean().exec();
        return res.status(201).send({"country":country});
    } catch (error) {
        return res.status(500).send({message: error.message});
    }
});

router.delete("/:id", async(req,res)=>{
    try {
        const country = await Country.findByIdAndDelete(req.params.id, req.body).lean().exec();
        return res.status(201).send({"country":country});
    } catch (error) {
        return res.status(500).send({message: error.message});
    }
});
module.exports = router;