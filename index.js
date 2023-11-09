import express from "express";
import mongoose from "mongoose";
import bookRoute from "./routes/bookRoutes.js";


const app=express();
app.use(express.json());
const port=3000;

app.use("/",bookRoute);
mongoose.connect('mongodb+srv://y4yashkarwasra:Database123@cluster0.nimohey.mongodb.net/');

app.listen(port,()=>{console.log(`you are listing to port ${port}`)});