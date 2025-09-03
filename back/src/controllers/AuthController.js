const User = require("../models/User");

const registerUser = async (req, res) => {

    try{
        const [name, username, email, password] = req.body;

        if(!name || !username || !email || !password) {
            return res.status(400).json({ error: "All fields are required" });
        }

        // Registration logic here
        const user = { name, username, email, password };

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

const login = (req, res) => {
    // Login logic here
}

const fetchUser = (req, res) => {
    // Fetch user logic here
}

module.exports = {
    registerUser,
    login,
    fetchUser
}
