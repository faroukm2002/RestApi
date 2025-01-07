import { dbConnection } from './../database/dbConnection';
import express  from "express";
import dotenv from "dotenv";
dotenv.config();
import morgan from "morgan";
import { bootstrap } from './bootstrap';

const app = express();

// Middleware for JSON body parsing
app.use(express.json({limit: "10kb"}));
app.use(express.urlencoded({extended: false}));


// Logger for development
if (process.env.NODE_ENV === 'development') { 
    app.use(morgan("dev"))
  
}



const port :number  = parseInt(process.env.PORT as string) || 10000


dbConnection()
bootstrap(app);



app.listen(port, ():void =>
    console.log(`Example app listening on port http://localhost:${port}`)) 
 
