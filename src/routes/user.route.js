const userController = require("../controller/user.controller");

const express = require("express");
const router = express.Router();

router.get('/uid/:uid', async (req, res) => {

    const user = await userController.getUserByUid(req.params.uid);

    if (user === null){
        return res.status(404).json({
            'detail': 'user not found'
        })
    }

    return res.status(200).json(user);
});

// router.get('/rfid/:rfid', (req, res) => {
//     const user = userController.getUserByRFID(req.params.rfid);

//     if (user === undefined){
//         return res.status(404).json({
//             'detail': 'user not found'
//         })
//     }

//     return res.status(200).json(user);
// })

// router.get('/did/:did', (req, res) => {
//     const users = userController.getUserByDid(req.params.did);

//     if (users === undefined){
//         return res.status(400).json({
//             'detial': 'users not found'
//         })
//     }

//     return res.status(200).json(users);
// })

module.exports = router;
