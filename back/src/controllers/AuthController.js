const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {

    try{
        const [name, username, email, password] = req.body;

        if(!name || !username || !email || !password) {
            return res.status(400).json({ error: "All fields are required" });
        }

        // Registration logic here
        const user = {};
        const saltRounds = 10;
        bcrypt.hash(password, saltRounds, function(err, hash){
            user = { name, username, email, password: hash };
        })

        

        const response = await User.create(user);

        return res.status(200).json({
            success: "true",
            message: "User registered successfully"
        })
    } catch (error) {
        console.error("Error registering user:", error);
        return res.status(500).json({
            success: "false",
            message: "Internal server error"
        });
    }
}

const login = async (req, res) => {
    try{
        const [email, password] = req.body;

        if(!email || !password) {
            return res.status(400).json({ error: "All fields are required" });
        }

        
        const user = await User.findOne({ email });
        const hash = user.password;

        if(!user || !bcrypt.compareSync(password, hash)) {
            return res.status(401).json({ error: "Invalid email or password" });
        }else{
            const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { algorithm: 'RS256', expiresIn: '1h' });
        }

        res.setHeader("Authorization", `Bearer ${token}`);
        
        return res.status(200).json({
            success: "true",
            message: "User logged in successfully"
        });
    } catch (error) {
        console.error("Error logging in user:", error);
        return res.status(500).json({
            success: "false",
            message: "Internal server error"
        });
    }
}

const fetchUser = async (req, res) => {
    const [userId] = req.body;

    //fetch user
    const user = await User.findById(userId).select("-password");

    if(!user) {
        return res.status(404).json({ error: "User not found" });
    }

    return res.status(200).json({
        success: true,
        user
    });
}

module.exports = {
    registerUser,
    login,
    fetchUser
}
