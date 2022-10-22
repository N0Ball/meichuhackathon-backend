const express = require("express");
const eventController = require('../controller/event.controller');

const router = express.Router();

router.get('/', eventController.getAllEvents);
router.get('/users', eventController.getEventsByUids);
router.get('/time', eventController.getEventByTime);
router.get('/id/:id', eventController.getEventByid);

router.post('/', eventController.createEvent);

module.exports = router;
