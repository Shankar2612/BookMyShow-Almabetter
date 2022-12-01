const mongoose = require('mongoose');
const { Schema } = mongoose;

// Created a new schema for pushing movie booking details.
const bookMovieSchema = new Schema({
    movie: { type: String },
    slot: { type: String },
    seats: {
        A1: { type: Number },
        A2: { type: Number },
        A3: { type: Number },
        A4: { type: Number },
        D1: { type: Number },
        D2: { type: Number }
    }

})

// Registering the schema with mongoose model.
module.exports = mongoose.model('bookmovietickets', bookMovieSchema);
