const createError = require("http-errors");
const express = require("express");
const app = express();

const PORT = 3000;

app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);

// MongoDB
const connectDB = require("./db/connection");
connectDB();

if (process.env.ENV == 'DEV'){
    const initDB = require("./db/init");
    initDB();
}

// Middlewares
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(bodyParser.json());

// Set up CORS option
const corsOption = {
    origin: process.env.CLIENT,
};

app.use(cors(corsOption));

// Routings
app.use("/api/v1/health", require("./routes/health.route"));
app.use("/api/v1/event", require("./routes/event.route"));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

module.exports = app;
