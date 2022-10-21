const UserCRUD = require("../crud/user.crud");

const userInfoField = (user) => {

    return {
            uid: user.uid,
            name: user.name,
            email: user.email,
            RFID_id: user.RFID_id,
    };

}

exports.getUser = async (req, res, next) => {

    let user = null;

    if ('uid' in req.params){
        user = await UserCRUD.getUserByUid(req.params.uid);
    }

    if ('rfid' in req.params){
        user = await UserCRUD.getUserByRFID(req.params.rfid);
    }

    if (user === null){
        return res.status(404).json({
            detail: "User not found"
        })
    }

    res.result = userInfoField(user);
    
    return res.status(200).json({
        detail: res.result
    });
}