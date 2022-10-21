const express = require("express");
const eventController = require('../controller/event.controller');

const router = express.Router();

router.get('/users', eventController.getEventsByUids);
router.get('/id/:id', eventController.getEventByid);

module.exports = router;
