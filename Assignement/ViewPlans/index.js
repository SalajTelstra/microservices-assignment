const express = require("express");
const app = express();
const cors = require("cors");

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

app.use(cors("*"));
app.use(express.json());

app.get("/", (req, res) => {
    res.send("This is telecom service");
});

app.post("/addplan", async (req, res) => {
    const dataobj = {
        data: {
            planName: req.body.planName,
            price: req.body.price,
            validity: req.body.validity,  
            benefits: req.body.benefits,  
        },
    };
    await prisma.plans.create(dataobj);
    res.send("Plan added successfully");
});

app.get("/viewplans", async (req, res) => {
    try{
        const allPlans = await prisma.plans.findMany();
    }
    catch(err){
        res.send("No plans found");
    }
    res.send(allPlans);
});

app.listen(5025, () => {
    console.log("Server is running on port 5025");
});
