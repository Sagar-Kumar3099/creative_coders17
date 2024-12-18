import express from "express";
import redis from "ioredis";

const app = express();

app.get("/",(req, res) => {
    console.log("Your loan amount is: ")
})

app.listen(6000, () => {
    console.log("server start on http://localhost:6000")
});
