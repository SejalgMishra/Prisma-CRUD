import express, { Request, Response } from "express";
import { connection } from "./connection";
import bodyParser from "body-parser";
import userRoute from "./routes/userRoutes"
require('dotenv').config();


const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api" , userRoute)

app.listen(3005, async () => {
  await connection();
});
