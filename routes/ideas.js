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

router.get('/', async(req, res) => {
    res.json(ideas);
})
module.exports = router; // tells NodeJS that other files can use this code