const EventCRUD = require("../crud/event.crud");

const _eventInfoField = event => {

    return {
        uid: event.uid,
        url: event.url,
        result: event.result,
        time: event.time
    }

}

exports.eventInfoField = event => {
    return {
        _id: event._id,
        result: event.result,
        time: event.time
    }
}

exports.getEventsByUids = async (req, res) => {

    let uids = ''

    try {

        uids = JSON.parse(req.query.uids || "[]");
        
    } catch (error) {
        
        return res.status(400).json({
            detail: `uid invalid with error ${error}`
        });

    }
    
    const events = await EventCRUD.getEventsByUids(uids);
    res.result = [];
    events.forEach(event => {
        res.result.push(this.eventInfoField(event));
    });

    return res.status(200).json({
        detail: res.result
    });
}