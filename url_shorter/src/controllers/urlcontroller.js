
const express = require('express');


const router = express.Router();
const Url = require('../models/urlmodel');

router.get('/', async (req, res) => {
    const urlshort= await Url.find()
	res.render('index',{urlshort:urlshort});
});

router.get("/:urlshort",async (req,res)=>{
    const urlshort=await Url.findOne({short:req.params.urlshort})

    if(urlshort==null) return res.status.send(404)

    urlshort.clicks++;
    urlshort.save()
    res.redirect(urlshort.full)
})

router.post('', async (req, res)=>{
	try {
		await Url.create({full:req.body.fullurl});
        res.redirect('/')
	} catch (error) {
		res.send({ error: error.message });
	}
});

module.exports=router