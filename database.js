const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/0-100")

const User = mongoose.model('Users', {
    name: Number,
    email: String,
    password: String
})

const user = new User({
    name: null,
    email: "alber018@gmial.com",
    password: "123"
})

user.save().then(()=>{
    console.log("Data Saved");
    
}).catch((e)=>{
    console.log("Error" + e);
    
})