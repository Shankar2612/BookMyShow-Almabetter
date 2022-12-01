const express = require("express");
const router = express.Router();
const Schema = require("./Schema");


// Creating ne booking and adding it to data base.
router.post('/booking', async (req, res) => {
    const { movie, slot, seats } = req.body;

    const myData = new Schema({ movie, slot, seats });
    const saved = await myData.save();
    res.json(saved);

// Getting last booking details form database and sending it to frontend.
}).get('/booking', async (req, res) => {

    const myData = Schema.find().sort({ _id: -1 }).limit(1);
    console.log(myData);
    res.json(myData);

})





module.exports = router;  