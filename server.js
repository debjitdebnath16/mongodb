const express = require("express");
const connectDB = require("./db");

const app = express();
const PORT = 3000;

app.use(express.json());

let db;
connectDB().then((database) => {
    db = database;
    console.log("MongoDB Connected!");
});

let user = {
    id: 1,
    name: "xyz",
    age: 20
};


app.get("/products", async (req, res) => {
    const products = await db.collection("products").find().toArray();

    res.status(200).json({
        message: "Products fetched successfully",
        data: products
    });
});


app.post("/products", async (req, res) => {
    const result = await db.collection("products").insertOne(req.body);

    res.status(201).json({
        message: "Product added successfully",
        data: result
    });
});


app.get("/user", (req, res) => {
    res.status(200).json({
        message: "User fetched successfully",
        data: user
    });
});


app.post("/user", (req, res) => {
    user = req.body;

    res.status(201).json({
        message: "User created successfully",
        data: user
    });
});


app.put("/user", (req, res) => {
    user = req.body;

    res.status(200).json({
        message: "User replaced successfully",
        data: user
    });
});


app.patch("/user", (req, res) => {
    Object.assign(user, req.body);

    res.status(202).json({
        message: "User updated successfully",
        data: user
    });
});


app.delete("/user", (req, res) => {
    user = {};

    res.status(200).json({
        message: "User deleted successfully"
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});