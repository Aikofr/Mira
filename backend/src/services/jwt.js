const jwt = require("jsonwebtoken");

const createJwt = (payload) => {
  return jwt.sign(payload, process.env.JWT_KEY, {
    expiresIn: "1h",
  });
};

const verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_KEY);
};

const checkUser = (req, res, next) => {
  if (req.cookies.mira_tkn_lg) {
    const token = verifyToken(req.cookies.mira_tkn_lg);
    if (token.role === "admin") {
      next();
    } else {
      res.status(401).json({ msg: "Unauthorized" });
    }
  } else {
    res.status(401).json({ msg: "Unauthorized" });
  }
};

module.exports = {
  createJwt,
  checkUser,
};
