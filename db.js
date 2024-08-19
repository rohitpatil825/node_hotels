const mongoose = require('mongoose');

//define mongodb connection URL
const mongoURL = 'mongodb://localhost:27017/hotels';//replace 'mydatabse' with your database

//set up mongoDB connection
// mongoose.connect(mongoURL, {
//     useNewUrlParser: true,
//     useUnifiedTopology:true
// })
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000 // 5 seconds timeout
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