const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

// Register
router.post("/register", async (req, res) => {
  try {
    // Generate hashed password
    const hashedPassword = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString();
    
    // Create new user
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    // Save user to database
    const user = await newUser.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    // Find user by email
    const user = await User.findOne({ email: req.body.email });

    // Check if user exists
    if (!user) {
      return res.status(401).json("Wrong email or password!");
    }

    // Decrypt and compare passwords
    const decryptedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_SEC
    ).toString(CryptoJS.enc.Utf8);
    
    if (decryptedPassword !== req.body.password) {
      return res.status(401).json("Wrong email or password!");
    }

    // Generate JWT token
    const accessToken = jwt.sign(
      { id: user._id },
      process.env.JWT_SEC,
      { expiresIn: "3d" }
    );

    // Return token
    const { password, ...others } = user._doc;
    res.status(200).json({ ...others, accessToken });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
