const http = require('http'); 
const fs = require('fs'); // is file-handling
const port = 3000;

const server = http.createServer(function (req,res) {
    // handle different activity on our server
    res.writeHead(200, { 'Content-Type': 'text/html'}) //  Content-Type will be the text from the html file
    fs.readFile('index.html', function (error, data) { 
        if(error){
            res.writeHead(404)
            res.write('Error: File Not Found')
        } else{
            res.write(data) // data is all the information inside index.html
        }
        res.end();
     })
})
server.listen(port, function(error){ // gives us info on whether this was successful
    if(error){
        console.log('Something went wrong', error)
    } else{
        console.log('Server is listening on port ' + port)
    }
})
