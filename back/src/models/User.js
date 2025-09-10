const mongoose = require("mongoose");

const User = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
    },
    googleId:{
        type: String,
    },
    githubId:{
        type: String,
    },
    avatar:{
        type: String,
        default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmUiF-YGjavA63_Au8jQj7zxnFxS_Ay9xc6pxleMqCxH92SzeNSjBTwZ0l61E4B3KTS7o&usqp=CAU"
    },
    role:{
        type: String,
        enum: ["User", "Admin"],
        default: "User"
    },
    provider:{
        type: String,
        enum: ["local", "Google", "Github"],
        default: "local"
    }
}, {timestamps: true});

User.index({ email: 1 });
User.index({ googleId: 1 });
User.index({ githubId: 1 });


module.exports = mongoose.model("User", User);
