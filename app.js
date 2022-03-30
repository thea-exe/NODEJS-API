const express = require('express');
const app = express();
const ideasroutes = require('./routes/ideas');




//method handler
app.get('/', async(req,res) =>{
    res.send("Hello world!");
})

app.use('/ideas', ideasroutes);


const port = 3000; // port API will listen
app.listen(port);
console.log("API is running on port ${port}");