const express = require("express");
const app = express();
const cors = require("cors");

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

app.use(cors("*"));
app.use(express.json());

app.get("/", (req, res) => {
    res.send("This is the PlanServices API");
});

app.post("/addservice", async (req, res) => {
    const dataobj = {
        data: {
            serviceName: req.body.serviceName,
            description: req.body.description,
        },
    };
    await prisma.planService.create(dataobj);
    res.send("Service added successfully");
});

app.get("/viewservices", async (req, res) => {
    const allServices = await prisma.planService.findMany();
    res.send(allServices);
});

app.listen(5027, () => {
    console.log("Server is running on port 5027");
});
