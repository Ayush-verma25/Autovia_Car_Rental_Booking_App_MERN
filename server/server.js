import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./config/db.js";
import userRouter from "./routes/userRoutes.js";

// Initialize Express App
const app = express();

// Connect Database
await connectDB();

// Middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("Server is Up and Running!"));

// App API Routes
app.use("/api/user", userRouter);

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => console.log(`Server is Running on port ${PORT}`));
