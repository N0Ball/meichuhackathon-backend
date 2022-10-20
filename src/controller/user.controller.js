const fake = require("../db/fake");

const USERS = [
    fake.FAKE_USER_1,
    fake.FAKE_USER_2,
    fake.FAKE_USER_3
]

const DEPARTMENTS = [
    fake.FAKE_DEPARTMENT_1,
    fake.FAKE_DEPARTMENT_2
]

const DEPARTMENT_RELATIONS = [
    fake.FAKE_DEPARTMENT_RELATION_1,
    fake.FAKE_DEPARTMENT_RELATION_2,
    fake.FAKE_DEPARTMENT_RELATION_3
]

const query = (target, aims) => {

    let result = target;

    for (const [aim, value] of Object.entries(aims)){
        result = result.filter( e => e[aim] == value);
    }
    
    return (result.length == 0 ? [undefined] : result);
}

exports.getUserByUid = (uid) => {
    return query(USERS, {uid: uid})[0];
}

exports.getUserByRFID = (rfid) => {
    return query(USERS, {RFID_id: rfid})[0];
}

exports.getDepartmentByDid = (did) => {
    return query(DEPARTMENTS, {did: did})[0];
}

exports.getUserByDid = (did) => {
    return query(DEPARTMENT_RELATIONS, {did: did})
}