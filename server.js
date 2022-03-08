const express = require('express');
const connectDB = require('./connection/conntection');
const userRoutes = require('./routes/userRoutes');
const bodyParser = require('body-parser');
const app = express();

//set view engine
app.set('view engine','ejs');

//database connection
connectDB();

//body-parser
app.use(express.urlencoded({extended:true}));

//user routes
app.use('/user',userRoutes);

app.use('/',(req,res)=>{
    res.render('index',{pageTitle:'An Express site'});
});

app.listen(3000,'localhost',()=>{
    console.log(`http://localhost:3000`);
})