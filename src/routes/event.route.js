const express = require("express");
const eventController = require('../controller/event.controller');

const router = express.Router();

router.get('/users', eventController.getEventsByUids);

module.exports = router;
