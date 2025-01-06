import express  from "express";
import dotenv from "dotenv";
dotenv.config();
dotenv.config()

const app = express();

// Middleware for JSON body parsing
app.use(express.json({limit: "10kb"}));
app.use(express.urlencoded({extended: false}));





const port :number  = parseInt(process.env.PORT as string) || 10000





app.listen(port, ():void =>
    console.log(`Example app listening on port http://localhost:${port}`)) 
 
