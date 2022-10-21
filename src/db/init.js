const EventDB = require("../model/event.model");

const {
    events
} = require("../tests/_dummy");

const initDB = () => {
    return new Promise(async (res, rej) => {
        await EventDB.deleteMany({});
        await EventDB.insertMany(events);
        console.log(`MongoDB initialized with ENV: ${process.env.ENV}`);
        res();
    });
}

module.exports = initDB;