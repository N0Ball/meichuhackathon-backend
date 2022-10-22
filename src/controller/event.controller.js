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

exports.getAllEvents = async(req, res) => {
    
    const events = await EventCRUD.getAllEvent(req.query.skip || 0, req.query.limit || 10);

    res.result = [];

    for(const event of events){
        res.result.push(this.eventInfoField(event));
    }

    return res.status(200).json({
        detail: res.result
    });

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

exports.getEventByid = async(req, res) => {

    const id = req.params.id;

    const event = await EventCRUD.getEventById(id);

    if (event === null){
        return res.status(404).json({
            detail: "Event not found"
        });
    }

    return res.status(200).json({
        detail: _eventInfoField(event)
    });

}

exports.createEvent = async(req, res) => {

    if ((!req.body.uid || !req.body.result) || !req.body.time){
        return res.status(400).json({
            detail: "Should include uid, result, time field"
        });
    }

    const event = await EventCRUD.createEvent({...req.body, url: 'https://img.dummy.com'});
    
    return res.status(201).json({
        detail: _eventInfoField(event)
    });

}