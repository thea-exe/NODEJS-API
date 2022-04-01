const express = require('express');
const app = express();
const bodyParser = require('body-parser'); // added middleware
const ideasroutes = require('./routes/ideas');


app.use(bodyParser.json()); // added middleware into express

//method handler
app.get('/', async(req,res) =>{
    res.send("Hello world!");
})

app.use('/ideas', ideasroutes);


const port = 3000; // port API will listen
app.listen(port);
console.log("API is running on port ${port}");