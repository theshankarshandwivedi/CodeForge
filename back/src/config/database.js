const mongoose = require("mongoose");

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connected to database successfully");
    }
    catch(error){
        console.log("Database connection failed");
        console.log(error);
    }

}

module.exports = connectDB;