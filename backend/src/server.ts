import dotenv from 'dotenv';
dotenv.config();

import express from "express";

import cors from "cors";
import { sample_items, sample_tags, sample_users } from "./data";
import jwt from "jsonwebtoken";
import itemRouter from './routers/item.router';
import { dbConnect } from './configs/database.config';
dbConnect();

const app = express();
app.use(express.json());
app.use(cors({
  credentials: true,
  origin:["http://localhost:4200"]
}));

app.use("/api/items", itemRouter);

app.post("/api/users/login", (req,res)=>{
  const {email,password} = req.body;
  const user = sample_users.find(user => user.email === email &&
    user.password === password);

    if(user){
      res.send(generateTokenResponse(user));
    }else{
      res.status(400).send("User name or Password is not valid!")
    }
})

const generateTokenResponse = (user:any)=>{
  const token = jwt.sign({
    email:user.email, isAdmin:user.isAdmin
  },"SomeRandomText",{
    expiresIn:"30d"
  });

  user.token = token;
  return user;
}

const port = 5001;
app.listen(port, () =>{
  console.log("Website served on http://localhost:" + port);
})
