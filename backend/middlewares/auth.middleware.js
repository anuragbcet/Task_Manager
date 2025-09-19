const jwt = require('jsonwebtoken');

const authenticateJWT = (req, res, next) => {
  const authHeader = req.header("Authorization");

  if (!authHeader) {
    return res.status(403).json({ error: "Access denied, token not provided" });
  }

  const token = authHeader.split(" ")[1] || authHeader;

  // Extract token from "Bearer <token>"

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: "Invalid or expired token" });
    }

    req.user = user; // Attach decoded user to request
    next(); // Pass control to the next middleware
  });
};

module.exports = authenticateJWT;
