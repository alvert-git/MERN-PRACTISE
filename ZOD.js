const express = require('express');
const zod = require('zod');

function validate(obj) {
    const schema = zod.object({
        email: zod.string().email()
    })
    const response = schema.safeParse(obj);
    console.log(response)
    console.log(response.error)
}
validate({email: "a@123."})
const app = express();

app.use(express.json())

app.post("/health", function(req,res){
    const kidneys = req.body.kidneys;
    const kidneysLength = kidneys.length;

    res.send("You have "+ kidneysLength + " Kidneys")
})

app.listen(3000) 