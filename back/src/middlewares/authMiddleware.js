

const authenticate = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
        return res.status(401).json({ message: 'No token provided' });
    }
    const token = authHeader.split(' ')[1];
    if (token !== 'your-secret-token') {
        return res.status(403).json({ message: 'Invalid token' });
    }
    next();
}

const isAdmin = (req, res, next) => {
    if (req.user.role !== 'admin') {    
        return res.status(403).json({ message: 'Forbidden' });
    }
    next();
}
