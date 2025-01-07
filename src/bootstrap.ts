import  mongoSanitize  from 'express-mongo-sanitize';
import  cors  from 'cors';
import { Application, NextFunction, Request, Response } from "express";
import { globalError } from "./middleware/globalErrorMiddleware";
import { AppError } from "./utils/AppError";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import helmet from 'helmet';
import authRouter from './modules/auth/auth.routes';
import userRouter from './modules/user/user.routes';

export function bootstrap(app:Application) {

  app.use("/api/v1/auth", authRouter);
  app.use("/api/v1/user", userRouter);




 






    
app.get('/', (req: Request, res: Response) => {
  res.send('Hello from Node js!');
});  
app.use(cors());

// adding security headers
   app.use(helmet());
app.use(cookieParser());
// prevent SQL injection
app.use(mongoSanitize());

  // Handle invalid URLs
  app.use("*", (req:Request, res:Response, next:NextFunction) => {
    next(new AppError(`Invalid URL ${req.originalUrl}`, 404));
  });

  // Global Error Handling Middleware
  app.use(globalError);
}


