const mongoose = require('mongoose');
require('dotenv').config();
//define mongodb connection URL
//local url
// const mongoURL = 'MONGODB_URL_LOCAL';//replace 'mydatabse' with your database
//global url
const mongoURL = process.env.MONGODB_URL;

//set up mongoDB connection
// mongoose.connect(mongoURL, {
//     useNewUrlParser: true,
//     useUnifiedTopology:true
// })
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
     // 5 seconds timeout
}).catch(err => {
    console.error('Failed to connect to MongoDB server:', err);
});

//get the default connection
//Mongoose maintains a default connection
const db = mongoose.connection;

//Define event listeners for database connection

db.on('connected',()=>{
    console.log('connected to MongoDB server');
})

db.on('error',(err)=>{
    console.log('MongoDB connection error:', err);
})

db.on('disconnected',()=>{
    console.log('MongoDB server disconnected');
})


module.exports = db;