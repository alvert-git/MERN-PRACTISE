const express = require("express");
const cors = require("cors"); // Import the cors package

const app = express();

app.use(cors()); // Enable CORS for all routes

app.get("/simpleInterest", function (req, res) {
    const p = parseInt(req.query.p);
    const t = parseInt(req.query.t);
    const r = parseInt(req.query.r);

    let SI = (p * t * r) / 100;
    let total = p + SI;
    res.send({
        total: total,
        interest: SI,
    });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});