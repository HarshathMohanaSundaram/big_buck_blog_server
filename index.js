const express = require('express')
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const {parse} = require('csv-parse')
const fs = require('fs')

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
app.listen(5000, ()=>{
    console.log("Server is running on port 5000")
})

app.get("/nse",(req,res)=>{
    result=[];
    fs.createReadStream('NSE.csv')
    .pipe(parse(
        {
            comment:"#",
            columns:true
        }
    ))
    .on("data",(data)=>{
        result.push(data);
    })
    .on("error",(error)=>{
        console.log(error);
    })
    .on("end",()=>{
        res.send(result);
        console.log(result);
        console.log("Done");
    })
})


