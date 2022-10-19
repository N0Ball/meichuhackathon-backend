const express = require("express");
const healthCheckController = require('../controller/health');

const router = express.Router();

router.get('/sync', (req, res) => {
    const result = healthCheckController.healthCheckSync();
    res.status(200).json({
        health: result,
        status: 200
    });
});

router.get('/async', async (req, res) => {
    const result = await healthCheckController.healthCheckAsync();
    res.status(200).json({
        health: result,
        status: 200
    })
})

module.exports = router;
