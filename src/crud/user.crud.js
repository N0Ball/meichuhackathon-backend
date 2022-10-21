const userDB = require("../model/user.model");

exports.getUserByUid = async (uid) => {
    return await userDB.findOne({uid: uid}).exec();
}

exports.getUserByRFID = async (rfid) => {
    return await userDB.findOne({RFID_id: rfid}).exec(); 
}