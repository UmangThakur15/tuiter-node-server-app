import express from 'express';
import HelloController from "./controllers/hello-controller.js";
import UserController from "./users/users-controller.js";
import TuitsController from "./controllers/tuits/tuits-controller.js";
import cors from "cors";
import session from "express-session";
import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://umangthakuremail:Mongo1511@cluster0.ghe9flu.mongodb.net/tuiter?retryWrites=true&w=majority"
);
// mongoose.connect("mongodb://127.0.0.1:27017/tuiter-su1-23");

const app = express();

app.use(
    session({
      secret: "any string",
      resave: false,
      proxy: true,
      saveUninitialized: false,
      cookie:{
        sameSite: "none",
        secure:true,
      },
    })
   );
   
app.use(
    cors({
      credentials: true,
      origin: "https://fastidious-dragon-93ae89.netlify.app",
    // origin : "http://localhost:3000",
    })
   );
   
app.use(express.json());
const port = process.env.PORT || 4000;
TuitsController(app);
HelloController(app);
UserController(app);
AuthController(app);

app.listen(port);