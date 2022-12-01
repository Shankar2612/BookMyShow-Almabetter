const express = require("express");
const router = express.Router();
const Schema = require("./Schema");
const app = express();
const cors = require('cors')
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());


// Creating ne booking and adding it to data base.
router.post('/booking', async (req, res) => {
    const { movie, slot, seats } = req.body;

    const myData = new Schema({ movie, slot, seats });
    const saved = await myData.save();
    res.json(myData);

// Getting last booking details form database and sending it to frontend.
}).get('/booking', async (req, res) => {

    const myData = await Schema.find().sort({ _id: -1 }).limit(1);
    res.json(myData);

})





module.exports = router;  