const express = require('express');
const connectDB = require('./connection/conntection');
const app = express();

//set view engine
app.set('view engine','ejs');

connectDB();
app.use('/',(req,res)=>{
    res.render('index',{pageTitle:'An Express site'});
})
app.listen(3000,'localhost',()=>{
    console.log(`http://localhost:3000`);
})