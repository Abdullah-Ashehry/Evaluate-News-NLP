const dotenv = require('dotenv');
dotenv.config();
var bodyParser = require('body-parser')
var cors = require('cors')

var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
var aylien = require("aylien_textapi");
var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});




const app = express()
app.use(cors())
app.use(bodyParser.json())

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function(req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function() {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function(req, res) {
    res.send(mockAPIResponse)
})


app.post('/sentiment', function(req, res) {
    console.log("URL=", req.body.url)
    textapi.sentiment({ url: req.body.url }, function(error, response) {
        if (error === null) {
            console.log("response=", response)
            res.send(response);
        } else {
            console.log("Error=", error)
            res.send({
                status: "faild",
                message: "No response was received"
            })
        }
    });
})