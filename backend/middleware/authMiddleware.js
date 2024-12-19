//protect routes with authentication (JWT);
import jwt from 'jsonwebtoken';

const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) {
        return res.status(401).json({ message: 'No token, authorization denied' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded.user; // Attach user data to the request
        next();
    } catch (error) {
        res.status(401).json({ message: 'Token is not valid' });
    }
};
export { authMiddleware };
