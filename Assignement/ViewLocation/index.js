const express = require("express");
const app = express();
const cors = require("cors");

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

app.use(cors("*"));
app.use(express.json());

app.get("/", (req, res) => {
    res.send("This is the PlanLocation service");
});

app.post("/addlocation", async (req, res) => {
    const dataobj = {
        data: {
            locationName: req.body.locationName,
            city: req.body.city,
        },
    };
    await prisma.planLocation.create(dataobj);
    res.send("Location added successfully");
});

app.get("/viewlocations", async (req, res) => {
    const allLocations = await prisma.planLocation.findMany();
    res.send(allLocations);
});

app.listen(5026, () => {
    console.log("Server is running on port 5026");
});
