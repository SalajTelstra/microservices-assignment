const express = require("express")
const app = express()

const cors = require("cors")
app.use(cors());
app.use(express.json());

const services = [];

app.get("/",(req,res)=>{
    res.send("Service Registry page")
});

app.post("/register",(req,res)=>{
    const servicename = req.body.servicename;
    const url = req.body.url;
    const servicedata = {
        servicename:servicename,
        url:url,
    };
    services.push(servicedata);
    res.send(`Service with name ${servicename} and url ${url} registered`)
});

app.get("/getservice/:servicename",(req,res)=>{
    const servicedata = services.find((e)=>e.servicename==req.params.servicename)
    if(servicedata){
        res.send(servicedata)
    }
    else{
        res.send("Service not found");
    }
});

app.listen(3033,(req,res)=>{
    console.log("service registy up and running");
})