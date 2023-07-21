const express = require("express");

const router = express.Router();

const authControllers = require("./controllers/authControllers");
const newsControllers = require("./controllers/newsControllers");
const profilsControllers = require("./controllers/profilsControllers");
const finesControllers = require("./controllers/finesControllers");

const { checkLogData } = require("./services/checkData");
const { hashPassword } = require("./services/auth");

router.post("/signup", checkLogData, hashPassword, authControllers.signup);
router.post("/signin", checkLogData, authControllers.signin);

router.get("/news", newsControllers.getAll);
router.get("/profils", profilsControllers.getAll);
router.get("/profils/:id", profilsControllers.getOne);

router.get("/fines/:id", finesControllers.getbyProfil);
router.post("/fines", finesControllers.addFine);

router.put("/fines/:id", finesControllers.updateFine);

router.delete("/fines/:id", finesControllers.deleteFine);

module.exports = router;
