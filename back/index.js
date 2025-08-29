const express = require("express")
require("dotenv").config();

const app = express();

app.use(express.json());

const port = process.env.PORT || 3000;


app.listen(port, () => {
    app.get("/", (req, res)=> {
        res.send("CodeForge is running");
    })
    console.log(`Server is running on port ${port}`);
})