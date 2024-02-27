import express, { Express, Request, Response } from "express";
import  { Message, getAllMessages } from "./models/message";
import dotenv from "dotenv";
import  { migrate } from "./migrationhelper/index";

import {sequelize,initializeDatabase} from './database/db'
import {Player} from './database/player'

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;


app.get("/test", (req: Request, res: Response) => {
    res.json(getAllMessages());
  });
  

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, async () => {
  await initializeDatabase()
  //await sequelize.sync() 
  await migrate()
  console.log(`[server]: Server is running at http://localhost:${port}`);
}); 