const express = require("express");
const router = express.Router();
const Schema = require("./Schema");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

// Creating new booking and adding it to database.
router.post("/booking", async (req, res) => {
  const { movie, slot, seats } = req.body;
  
  const myData = new Schema({ movie, slot, seats });
  const saved = await myData.save();

  if (saved) {
    //on successfull
    res.status(200).json({ data: myData, message: "Booking successful!" });
  } else {
    //on error
    res
      .status(500)
      .json({
        data: null,
        message: "Something went wrong!. Please try again.",
      });
  }
});

// Getting last booking details form database and sending it to frontend.

router.get("/booking", async (req, res) => {
  const myData = await Schema.find().sort({ _id: -1 }).limit(1);

  if (myData.length === 0) {
    //Sending "No previous Booking found" message if no last booking found
    res.status(200).json({ data: null, message: "No previous Booking found!" });
  } else {
    //Sending data if last booking found
    res.status(200).json({ data: myData[0] });
  }
});

module.exports = router;
