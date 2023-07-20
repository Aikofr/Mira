const express = require("express");

const router = express.Router();

const authControllers = require("./controllers/authControllers");

const { checkSignupData } = require("./services/checkData");
const { hashPassword } = require("./services/auth");

router.post("/signup", checkSignupData, hashPassword, authControllers.signup);

module.exports = router;
