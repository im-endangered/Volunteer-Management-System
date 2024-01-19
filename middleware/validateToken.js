const jwt = require("jsonwebtoken");

const validateToken = (requiredRole) => (req, res, next) => {
  const authHeader = req.headers.authenticate || req.headers.Authenticate;

  let token;
  if (authHeader && authHeader.startsWith("Bearer")) {
    token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
      if (err) {
        console.log(err);
        res.status(401);
        throw new Error("User is not authenticated");
      }
      if (requiredRole && decoded.role !== requiredRole) {
        res.status(403);
        throw new Error("Insufficient permissions");
      }

      // Attach the decoded user information to the request for future use
      req.user = decoded;
    });
  } else {
    res.status(401);
    throw new Error("Unauthorized");
  }

  next();
};

module.exports = validateToken;
