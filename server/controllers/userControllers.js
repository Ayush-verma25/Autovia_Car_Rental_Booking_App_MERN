import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Generate JWT Token
const generateToken = (userId) => {
  const payload = userId;
  return jwt.sign(payload, process.env.JWT_SECRET);
};

// register User
export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body ?? {};

    if (
      typeof name !== "string" ||
      !name.trim() ||
      typeof email !== "string" ||
      !email.trim() ||
      typeof password !== "string" ||
      password.length < 8
    ) {
      return res
        .status(400)
        .json({ success: false, message: "fill all the fields!" });
    }

    const normalizedEmail = email.trim();
    const userExists = await User.findOne({ email: normalizedEmail });
    if (userExists) {
      return res
        .status(409)
        .json({ success: false, message: "User already exists!" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      name: name.trim(),
      email: normalizedEmail,
      password: hashedPassword,
    });
    const token = generateToken(user._id.toString());
    res.json({ success: true, token });
  } catch (error) {
    console.error("User registration failed:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

//Login User
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body ?? {};
    if (
      typeof email !== "string" ||
      !email.trim() ||
      typeof password !== "string" ||
      !password
    ) {
      return res
        .status(400)
        .json({ success: false, message: "fill all the fields!" });
    }

    const user = await User.findOne({ email: email.trim() });
    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid Credentials!" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid Credentials!" });
    }
    const token = generateToken(user._id.toString());
    res.json({ success: true, token });
  } catch (error) {
    console.error("User login failed:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// Get User data using Token (JWT)
export const getUserData = async (req, res) => {
  try {
    const { user } = req;
    res.json({ success: true, user });
  } catch (error) {
    console.error("User login failed:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
