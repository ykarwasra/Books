import { Books } from "../db/index.js";
import { Router } from "express";

const bookRoute=Router();

bookRoute.get("/books",async(req,res, next)=>{
    try{
        const books=await Books.find({});
        res.status(200).json(books);
    }
    catch (error){
        console.log(error)
        return next(error);
    }
});

bookRoute.post("/book", async (req, res, next) =>{
    let book = new Books ({
      title: req.body.title,
      description: req.body.description,
      author:req.body.author,
    })
    try {
      await book.save()
      res.status(201).json({message:"book is created",book:book});
    }
    catch (error){
        console.log(error)
        return next(error);
    }
});

bookRoute.put('/update/:id',async(req,res,next)=> {
    const bookId=req.params.id;
    try{
        const book=await Books.findByIdAndUpdate(bookId,req.body,{new:true});
        if(!book){
            throw Error('No such book found');
          }
          else{
            res.status(204).json({message:'updated Successfully'})
          }
    }
    catch(error){
        console.log(error);
        return next(error);
    }
});

bookRoute.delete('/remove/:id',async(req,res,next)=> {
    const bookId=req.params.id;
  try{
    const book=await Books.findByIdAndDelete(bookId);
      if(!book){
        throw Error('No such book found');
      }
      else{
        res.status(204).json({message:'Deleted Successfully'})
      }
      }
  catch(error){
      console.log(error);
      return next(error);
  }
});

bookRoute.get('/book/:id',async(req,res,next)=>{
  const bookId=req.params.id;
   try{
       const book=await Books.findById(bookId);
       if(!book){
           throw Error('No such book found');
         }
         else{
          res.status(201).json(book);
         }
     }
     catch(error){
      console.log(error);
         return next(error);
     }
 });
export default bookRoute;
