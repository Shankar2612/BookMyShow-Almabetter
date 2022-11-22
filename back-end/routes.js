const express = require('express');
const {bookMovieSchema} = require('./scheema');
const router = express.Router();



router.post('/bookMovie',  async (req, res) => {
   
    try {
  
      // Adding a booking to data base.
      b_d = await bookMovieSchema.create({
        movie: req.body.movie,
        solt: req.body.time,
        seats: req.body.noOfseat

      });
      // Sending the respose of booking details.
      res.json(b_d);

    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  })
  