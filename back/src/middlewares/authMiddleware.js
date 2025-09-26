const jwt = require('jsonwebtoken');

// Middleware to authenticate user and check for admin role
// This is a simplified example; in a real application, you would verify JWTs or session tokens.

const authenticate = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
        return res.status(401).json({ message: 'No token provided' });
    }
    const token = authHeader.split(' ')[1];
    jwt.verify(token, 'your-secret-key', (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Invalid token' });
        }
        req.user = user;
        next();
    });
}

const isAdmin = (req, res, next) => {
    if (req.user.role !== 'admin') {    
        return res.status(403).json({ message: 'Forbidden' });
    }
    next();
}

module.exports = {authenticate, isAdmin};;