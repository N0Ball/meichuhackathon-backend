const userController = require("../controller/user.controller");

const express = require("express");
const router = express.Router();

router.get('/uid/:uid', userController.getUser, userController.userInfoField);
router.get('/rfid/:rfid', userController.getUser, userController.userInfoField);

module.exports = router;
