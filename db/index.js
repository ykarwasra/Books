import mongoose from "mongoose";

const bookSchema=new mongoose.Schema({
    title:String,
    description:String,
});

export const Books=mongoose.model('Books',bookSchema);
