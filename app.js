const express = require('express');
const app = express();

//method handler
app.get('/', async(req,res) =>{
    res.send("Hello world!");
})

const port = 3000; // port API will listen
app.listen(port);

console.log("API is running on port ${port}");