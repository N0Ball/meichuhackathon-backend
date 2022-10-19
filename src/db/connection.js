const mongoose = require('mongoose');

const connectDB = async() => {
    try{

        const con = await mongoose.connect(`mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}`);
        console.log(`MongoDB connected : ${con.connection.host}`);

    }catch(e){

        console.log(e);
        process.exit(1);

    }
}

module.exports = connectDB;
