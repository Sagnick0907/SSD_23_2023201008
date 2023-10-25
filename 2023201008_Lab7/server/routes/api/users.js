const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");
require('dotenv').config()

// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");
const validateDateInput = require("../../validation/date");
// Load User model
const User = require("../../models/User");
const Qa = require("../../models/qa");

function authenticateUser(req, res, next) {
    const token = req.header("token"); // Assuming the token is sent in the "Authorization" header

    if (!token) {
        return res.status(401).json({ error: "Unauthorized" });
    }

    jwt.verify(token, process.env.secretOrKey, (err, decoded) => {
        if (err) {
            return res.status(401).json({ error: "Unauthorized" });
        }
        //console.log(decoded);
        // If the token is valid, add the decoded user information to the request object
        req.Username = decoded;
        next();
    });
}

///// Update Question Functionality Admin
// Create a POST route to update 'question' and 'answer'
router.post("/updateQuesAnswer", authenticateUser, (req, res) => {
    const quesid = req.body.quesid;
    const newTitle = req.body.title;
    const newDescription = req.body.description;
    const newDate = req.body.date;

    if (!quesid || !newQuestion || !newAnswer || !newDate) {
        return res.status(400).json({ error: "quesid, Title, description, and date are required. It should not be empty!" });
    }

    // Find the document by 'quesid' and update 'question' and 'answer'
    Qa.findOneAndUpdate({ quesid: quesid }, { title: newTitle, description: newDescription, date: newDate }, { new: true })
        .then(updatedDoc => {
            if (!updatedDoc) {
                return res.status(404).json({ error: "Question not found" });
            }

            // Return the updated document as the response
            res.status(200).json(updatedDoc);
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ error: "Internal server error" });
        });
});

// Create a POST route to add a new question and answer
router.post("/addQuesAns", authenticateUser, async (req, res) => {
    console.log(req);
    const { errors, isValid } = validateDateInput(req.body);
    // Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }

    try {
      // Count the number of documents in the Qa collection to generate quesid
      const count = await Qa.countDocuments();
      const newQa = new Qa({
        quesid: count + 1, // Generate quesid
        title: req.body.title,
        description: req.body.description,
        date: req.body.date,
      });
  
      // Save the new Qa document to the database
      await newQa.save();
  
      res.status(200).json({ message: "Question and answer added successfully", newQa });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });


// Define the route
router.get("/userinfo", authenticateUser, async (req, res) => {
    try {
        const Username = req.query.Username; // Retrieve the email from query parameters

        // Check if the email parameter exists
        if (!Username) {
            return res.status(400).json({ error: "Username parameter is missing" });
        }

        // Search for the user by email in the User collection
        const user = await User.findOne({ Username });

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        // Return the role of the found user
        res.json({ user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
    }
});

// Create a GET route to fetch all entries in QaSchema
// Create a route to get all data from the schema
router.get("/allQuestions", async (req, res) => {
    try {
        // Fetch all documents from the "qa" collection
        const qaData = await Qa.find({});
        res.json(qaData);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});


// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/register", (req, res) => {
    // Form validation
    const { errors, isValid } = validateRegisterInput(req.body);
    // Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }
    User.findOne({ Username: req.body.Username }).then(user => {
        if (user) {
            return res.status(400).json({ email: "Username already exists" });
        } else {
            const newUser = new User({
                Username: req.body.Username,
                password: req.body.password
            });
            // Hash password before saving in database
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser
                        .save()
                        .then(user => res.json(user))
                        .catch(err => console.log(err));
                });
            });
        }
    });
});

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/login", (req, res) => {
    //Pull the errors and isValid variables from our validateLoginInput(req.body) function 
    // and check input validation
    // Form validation
    const { errors, isValid } = validateLoginInput(req.body);
    // Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }

    const password = req.body.password;
    const Username = req.body.Username;
    // If valid input, use MongoDB’s User.findOne() to see if the user exists
    User.findOne({ Username }).then(user => {
        // Check if user exists
        if (!user) {
            return res.status(404).json({ usernamenotfound: "Username not found" });
        }

        // If user exists, use bcryptjs to compare submitted 
        // password with hashed password in our database
        // Check password
        bcrypt.compare(password, user.password).then(isMatch => {
            if (isMatch) {
                // User matched, create our JWT Payload
                const payload = {
                    id: user.id,
                    Username: user.Username
                };
                // Sign token including our payload, keys.secretOrKey from keys.js, 
                // and setting a expiresIn time (in seconds)
                jwt.sign(
                    payload,
                    process.env.secretOrKey,
                    {
                        expiresIn: 5400 // 1 year in seconds
                    },
                    (err, token) => {
                        // If successful, append the token to a Bearer string (remember in our passport.js 
                        // file, we setopts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();)
                        res.json({
                            success: true,
                            token: token
                        });
                    }
                );
            } else {
                // Error signing
                return res
                    .status(400)
                    .json({ passwordincorrect: "Password incorrect" });
            }
        });
    });
});

module.exports = router;