const Books=require("../models/BooksModel");
require("../Database/connection");

const getAllBooks=async (req,res)=>
{
    const books=await Books.find();
    res.send(books);
}
const insertBook=async (req,res)=>{
    let books=new Books(req.body);
    let result=await books.save();
    res.send(result);
}

const updateBook=async (req,res)=>
{
    let id=req.params.id;
    const result=await Books.updateOne(
        {"_id":id},
        {$set:req.body}
        );

    res.send(result);
}

const deleteBook=async (req,res)=>
{
    const id=req.params.id;
    let result=await Books.deleteOne({'_id':id});
    res.send(result);
}

module.exports={
    getAllBooks,
    insertBook,
    updateBook,
    deleteBook
}
