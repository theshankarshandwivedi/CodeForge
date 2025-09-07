const express = require("express")
const router = require("./src/routes/Auth");
const cors = require("cors")
require("dotenv").config();

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173", // frontend url
    credentials: true,
    exposedHeaders: ["Authorization"], // 👈 very important
  })
);

app.use(express.json());
app.use("/api", router);



const port = process.env.PORT || 3000;

const connectDB = require("./src/config/database");
connectDB();

app.listen(port, () => {
    app.get("/", (req, res)=> {
        res.send("CodeForge is running");
    })
    console.log(`Server is running on port ${port}`);
})