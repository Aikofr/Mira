const express = require("express");

const router = express.Router();

const authControllers = require("./controllers/authControllers");

const { checkLogData } = require("./services/checkData");
const { hashPassword } = require("./services/auth");

router.post("/signup", checkLogData, hashPassword, authControllers.signup);
router.post("/signin", checkLogData, authControllers.signin);

module.exports = router;
