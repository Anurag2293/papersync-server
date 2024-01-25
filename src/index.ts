import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Express +  Server");
});

app.listen(port, () => {
    console.log(`[server]: Server is running on port: ${port}`);
});