import express, { Request, Response }  from "express";
import dotenv from "dotenv";
import { dbConnection } from "../database/dbConnection";
dotenv.config();
dotenv.config()

const app = express();

// Middleware for JSON body parsing
app.use(express.json({limit: "10kb"}));
app.use(express.urlencoded({extended: false}));





const port :number  = parseInt(process.env.PORT as string) || 10000


dbConnection()
app.get('/', (req: Request, res: Response) => {
  res.send('Hello from Node js!');
});  

app.listen(port, ():void =>
    console.log(`Example app listening on port http://localhost:${port}`)) 
 
