const mongoose = require('mongoose');
const config = require("../config")

const connectDB = async() => {
    try{

        const con = await mongoose.connect(config.DB);
        console.log(`MongoDB connected : ${con.connection.host}`);

    }catch(e){

        console.log(e);
        process.exit(1);

    }
}

module.exports = connectDB;
