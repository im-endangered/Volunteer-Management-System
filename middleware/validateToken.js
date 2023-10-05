const jwt = require("jsonwebtoken");

const validateToken = (req, res, next) => {
  const authHeader = req.headers.authenticate || req.headers.Authenticate;

  let token;
  if (authHeader && authHeader.startsWith("Bearer")) {
    token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
      if (err) {
        console.log(err);
        res.status(401);
        throw new Error("User is unauthenticated");
      }
    });
  } else {
    res.status(401);
    throw new Error("Unauthorized");
  }
  next();
};

module.exports = validateToken;
