const express = require('express');

const app = express();

// <<<< This is The Code for learning the use of middleware 
// here middleware is not User >>>>>>>

app.get("/", function(req,res){
    res.send("Hello World Its working")
})

app.get("/health", function(req,res){
    const username = req.headers.usernme;
    const password = req.headers.password;
    const kidneyId = req.query.kidneyId; // Convert query parameter to a number

    if (username != "albert" && password != "pass"){
        res.status(400).json({"msg": "something Went Wrong in inputs of header"})
        return
    }
    
    if (kidneyId != 1 && kidneyId != 2){
        res.status(400).json({"msg": "something Went Wrong in inputs of query"})
        return
    }
    res.json({
        msg: "your kidney is fine"
    })
})

app.listen(3000)