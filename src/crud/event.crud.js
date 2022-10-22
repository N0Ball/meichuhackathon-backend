const EventDB = require("../model/event.model");

exports.getAllEvent = async(skip, limit) => {
    return await EventDB.find().sort('time').skip(skip).limit(limit).exec();
}

exports.getEventById = async(id) => {
    return await EventDB.findById(id).exec();
}

exports.getEventsByUids = async(uids) => {
    return await EventDB.find({uid: { $in: uids}}).exec();
}

exports.createEvent = async(body) => {

    const event = new EventDB({
        ...body, status: 1
    })

    return await event.save(event);
}