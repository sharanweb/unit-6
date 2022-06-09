const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const scrapers = require('./scrapper');

const db = require('./config/db')
app.use(bodyParser.json())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
});

app.get('/job', async (req, res) => {
    const data = await scrapers.getData();
    res.send(data)
})

app.listen(5001, async () =>{
    try {
        await db();
    } catch (error) {
        console.log(error);
    }
    console.log("listening on port 5001")
})