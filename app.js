import express from 'express';
import HelloController from "./controllers/hello-controller.js";
import UserController from "./users/users-controller.js";
import TuitsController from "./controllers/tuits/tuits-controller.js";
import session from "express-session";
import AuthController from "./users/auth-controller.js";
import cors from 'cors';

const app = express();

import mongoose from "mongoose";


const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/tuiter'

console.log(process.env.DB_CONNECTION_STRING);
console.log(CONNECTION_STRING);
// const CONNECTION_STRING = "mongodb+srv://dhyeysavaliya2000:<password>@cluster0.exksxhm.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(CONNECTION_STRING);


app.use(
    session({
      secret: "any string",
      resave: false,
      saveUninitialized: true,
      cookie: {
        sameSite : "none",
        secure : true
      }
    })
   );
   
app.use(
    cors({
      credentials: true,
      // origin: "https://luxury-mochi-12313b.netlify.app",
    // origin : "http://localhost:3000",
    origin: "https://a6--fanciful-tapioca-ea98bc.netlify.app"
    })
   );
   
app.use(express.json());
const port = process.env.PORT || 4000;
TuitsController(app);
HelloController(app);
UserController(app);
AuthController(app);

app.listen(port);