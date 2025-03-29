const express = require('express');

const app = express();

app.get("/", function(req,res){
    res.send("Hello World Its working")
})
let numberOfRequests = 0;
function calculateRequests (req,res,next){
    numberOfRequests++;
    console.log(numberOfRequests);
    next();
}

app.get("/health",calculateRequests, function(req,res){
  res.send("The Total request is "+ numberOfRequests)
})

app.listen(3000)