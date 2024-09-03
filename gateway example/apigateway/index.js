const express=require("express")
const app=express()
app.use(express.json())
const cors=require("cors")
const axios=require("axios")
app.use(cors("*"))

app.use(async(req,res,next)=>{
    const alllocation=await axios.get("http://localhost:3007/location")
    res.send(alllocation.data)
})

app.use(async(req,res,next)=>{
    const servicename=req.path.split("/")[1]
    console.log(servicename)
    const services=await axios.get(
        `http://localhost:3010/geteservice/${servicename}`
    );
    console.log(services.data)
    const alllocation=await axios.get("http://localhost:3007/location")
    res.send(alllocation.data)
})

app.listen(3000,()=>{
    console.log("locaion service started")
})