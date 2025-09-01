const express = require("express")
const router = require("./src/routes/Auth");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use("/v1", router);

const port = process.env.PORT || 3000;

const connectDB = require("./src/config/database");
connectDB();

app.listen(port, () => {
    app.get("/", (req, res)=> {
        res.send("CodeForge is running");
    })
    console.log(`Server is running on port ${port}`);
})