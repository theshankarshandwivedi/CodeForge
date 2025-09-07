const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
  try {
    let user = req.body;
    console.log(user);
    const name = user.name;
    const username = user.username;
    const email = user.email;
    let password = user.password;

    if (!user.name || !user.username || !user.email || !user.password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Registration logic here

    const saltRounds = 10;
    const hash = bcrypt.hashSync(password, saltRounds);

    const response = await User.create({
      name: name,
      username: username,
      email: email,
      password: hash,
    });

    console.log(response);

    return res.status(200).json({
      success: "true",
      message: "User registered successfully",
    });
  } catch (error) {
    console.error("Error registering user:", error);
    return res.status(500).json({
      success: "false",
      message: "Internal server error",
    });
  }
};

const login = async (req, res) => {
  try {
    const details = req.body;

    const email = details.email;
    let password = details.password;

    if (!email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const user = await User.findOne({ email });
    const hash = user.password;
    let token;
    if (!user || !bcrypt.compareSync(password, hash)) {
      return res.status(401).json({ error: "Invalid email or password" });
    } else {
      token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY, {
        algorithm: "HS256",
        expiresIn: "1h",
      });
    }

    res.setHeader("Authorization", `Bearer ${token}`);

    return res.status(200).json({
      success: "true",
      message: "User logged in successfully",
    });
  } catch (error) {
    console.error("Error logging in user:", error);
    return res.status(500).json({
      success: "false",
      message: "Internal server error",
    });
  }
};

const fetchUser = async (req, res) => {
  const [userId] = req.body;

  //fetch user
  const user = await User.findById(userId).select("-password");

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  return res.status(200).json({
    success: true,
    user,
  });
};

module.exports = {
  registerUser,
  login,
  fetchUser,
};
