const express = require('express');
const app = express();


app.use('/',(req,res)=>{
    res.send('Hello world');
})
app.listen(3000,'localhost',()=>{
    console.log(`http://localhost:3000`);
})