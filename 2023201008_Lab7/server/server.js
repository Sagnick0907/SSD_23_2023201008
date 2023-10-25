const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const cors = require("cors");
require('dotenv').config()

const users = require("./routes/api/users");
const app = express();
app.use(cors());

// Bodyparser middleware
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
// Configure Bodyparser middleware to parse URL-encoded and JSON request bodies
app.use(bodyParser.json());

// Load the MongoDB configuration from a separate file (./config/keys.js)
const db = process.env.mongoURI;

// Connect to the MongoDB database using Mongoose
mongoose
    .connect(
        db,
        { useNewUrlParser: true }
    )
    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api/users", users);

const port = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there


// Start the Express server and have it listen on the specified port
app.listen(port, () => console.log(`Server up and running on port ${port} !`));