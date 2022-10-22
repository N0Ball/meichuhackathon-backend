const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
    uid: {
        // User id
        type: String,
        required: true,
    },
    result: {
        // Event result
        type: String,
        required: true,
    },
    time: {
        // FORMAT: ISO 8601
        type: Date,
        required: true
    },
    url: String, // proof of the picture
    // 0 : Deleted
    // 1 : Active
    status: Number,
});

const EventDB = mongoose.model("events", eventSchema);

module.exports = EventDB;