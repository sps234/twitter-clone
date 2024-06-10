const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

// Register
router.post("/register", async (req, res) => {
  try {
    
    const hashedPassword = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString();
    
    
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    
    const user = await newUser.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    
    const user = await User.findOne({ email: req.body.email });

   
    if (!user) {
      return res.status(401).json("Wrong email or password!");
    }

    
    const decryptedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_SEC
    ).toString(CryptoJS.enc.Utf8);
    
    if (decryptedPassword !== req.body.password) {
      return res.status(401).json("Wrong email or password!");
    }

    
    const accessToken = jwt.sign(
      { id: user._id },
      process.env.JWT_SEC,
      { expiresIn: "3d" }
    );

    
    const { password, ...others } = user._doc;
    res.status(200).json({ ...others, accessToken });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
