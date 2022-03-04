const mongoose = require('mongoose');
const connectDB = async()=>{
    const con = await mongoose.connect('mongodb://localhost:27017/ExpressSite');
    console.log(`connection successfully ${con.connection.host}`);
}

module.exports = connectDB;
