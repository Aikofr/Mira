const express = require("express");

const router = express.Router();

const authControllers = require("./controllers/authControllers");
const newsControllers = require("./controllers/newsControllers");
const profilsControllers = require("./controllers/profilsControllers");

const { checkLogData } = require("./services/checkData");
const { hashPassword } = require("./services/auth");

router.post("/signup", checkLogData, hashPassword, authControllers.signup);
router.post("/signin", checkLogData, authControllers.signin);

router.get("/news", newsControllers.getAll);
router.get("/profils", profilsControllers.getAll);

module.exports = router;
