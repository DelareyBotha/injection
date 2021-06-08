const express = require("express");
const cors = require("cors");
const app = express();

const port = 3000;

app.use(cors());

app.get("/", (req:any, res:any)=>{
    res.status("200").json({
        message: "This is the root directory!"
    });
});

app.get("/stuff", (req: any, res: any)=>{
    res.status("200").json({
       message: "Hello from express"
    });
});

app.listen(port, ()=>{
    console.log(`Listening on ${port}`);
});