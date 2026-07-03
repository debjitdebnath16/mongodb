const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017/";
const client = new MongoClient(url);

async function connectDB() {
    await client.connect();
    console.log("MongoDB Connected!");
    return client.db("shopDB");
}

module.exports = connectDB;