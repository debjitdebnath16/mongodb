const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

let user = {
    id: 1,
    name: "xyz",
    age: 20
};


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