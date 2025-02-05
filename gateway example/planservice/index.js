const express=require("express")
const app=express()
app.use(express.json())
const cors=require("cors")
app.use(cors("*"))
const {PrismaClient} = require("@prisma/client")
const prisma=new PrismaClient()
app.get("/plan",async(req,res)=>{
    const allplans=await prisma.plan.findMany();
    res.send(allplans)
})

app.get("/healthcheck",(req,res)=>{
    const healthobj={
        request_time:new Date().toString(),
        connectivity:prisma.$connect?"connected":"not connected",
        status:"working"
    }
    res.send(healthobj)
})

app.listen("3004",()=>{
    console.log("plan services started")
})