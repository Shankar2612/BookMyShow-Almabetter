const mongodb = require('mongodb');

const mongoURI = "mongodb://localhost:27017/" + "bookMovie"

let mongoose = require('mongoose');


const connectToMongo = () => {

    mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { console.log("connection established with mongodb server online"); })
    .catch(err => {
        console.log("error while connection", err)
    });
}
    


exports.connection = connectToMongo;
