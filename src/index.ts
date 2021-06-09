import 'reflect-metadata'
import { container } from "tsyringe";
import UserController from "./user/controllers/user-controller";

const express = require("express");
const cors = require("cors");
const app = express();

const port = 3000;

app.use(cors());

app.use("/users", container.resolve(UserController).routes());

app.listen(port, ()=>{
    console.log(`Listening on ${port}`);
});