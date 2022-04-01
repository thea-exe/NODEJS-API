const express = require('express');
const router = new express.Router; 

let ideas = [{
    "id": 1,
    "idea": "a hair washing app that notifies you on the weather the next day"
},
{
    "id": 2,
    "idea": "an ethereum addressbook where you can send mail and videochats to eth addresses"
},
{
    "id": 3,
    "idea": "a blog post on something related to ethereum"
}]

// vvvvvvvvv this is where we start querying data
router.get('/:id?', async(req, res) => { //tells express to look for a uri param in the path thats following ideas, which
    //has a variable name of id. the ? means its optional, so this will address the request whether or not that uri param actually exists
    let responseData;

    // checks if uri para exists
    if(req.params.id){
        responseData = ideas.find(idea => idea.id === Number(req.params.id))
    } else{
        if(req.query.id){ // check to see if a query param has come in 
            responseData = ideas.filter(idea => idea.id === Number(req.query.id)); // all query params come in as strings
            // and because we are comparing idea.id, we need to convert the query param into a number
        }
    }

    // we want to check if theres no response data, which means query param is not passed in 
    // set responseData to the ideas object so it returns everything 
    if (responseData === undefined){
        responseData = ideas
    }
    res.json(responseData);
})


//vvvv this is for a post request, body-parser needed to use this piece of code
router.post('/', async(req, res) => {
    ideas.push(req.body);
    res.status(201).send(); // 201 maps to HTTP response status code of created
})
module.exports = router; // tells NodeJS that other files can use this code