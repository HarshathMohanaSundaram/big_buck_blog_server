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

app.get("/bse",(req,res)=>{
    result=[];
    fs.createReadStream('BSE.csv')
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

app.get("/ashok",(req,res)=>{
    result=[];
    fs.createReadStream('ASHOKLEY.NS.csv')
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

app.get("/cipla",(req,res)=>{
    result=[];
    fs.createReadStream('CIPLA.NS.csv')
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

app.get("/eichermot",(req,res)=>{
    result=[];
    fs.createReadStream('EICHERMOT.NS.csv')
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

app.get("/reliance",(req,res)=>{
    result=[];
    fs.createReadStream('RELIANCE.NS.csv')
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

app.get("/tatasteel",(req,res)=>{
    result=[];
    fs.createReadStream('TATASTEEL.NS.csv')
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
