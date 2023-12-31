import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./api/routes/auth.js";
import hotelsRoute from "./api/routes/hotels.js"
import roomsRoute from "./api/routes/rooms.js"
import usersRoute from "./api/routes/users.js"
const app = express();
dotenv.config();

const connect = async () =>{
try {
    await mongoose.connect(process.env.MONGO);
    console.log("connected to mongodb")
  } catch (error) {
    throw error
  }
};

mongoose.connection.on("disconnected", ()=>{
    console.log("mongoose is disconneced");
})

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);
app.use("/api/users", usersRoute);

app.use((err , req, res, next )=>{
  const errorStatus = err.status || 500
  const errorMassage = err.Massage || "something is wrong"
  return res.status(errorStatus).json({
    sucess : false ,
     status : errorStatus ,
     massage : errorMassage ,
     stack : err.stack,
  });
});

app.listen(8800, ()=>{
    connect();
    console.log("connected to back end");
}) 