const userDB = require("../model/user.model");

exports.getUserByUid = async (uid) => {
    return await userDB.findOne({uid: uid}).exec();
}

exports.getUserByRFID = async (rfid) => {
    return await userDB.findOne({RFID_id: rfid}).exec(); 
}

// exports.getDepartmentByDid = (did) => {
//     return query(DEPARTMENTS, {did: did})[0];
// }

// exports.getUserByDid = (did) => {
//     return query(DEPARTMENT_RELATIONS, {did: did})
// }