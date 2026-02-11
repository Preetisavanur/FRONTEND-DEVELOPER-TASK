const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);

connectDB();

app.get("/", (req, res) => {
    res.send("Backend is running");
});
const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

const taskRoutes = require("./routes/tasks");
app.use("/api/tasks", taskRoutes);


