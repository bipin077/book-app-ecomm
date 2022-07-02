const mongoose=require("mongoose");

const BooksSchema=mongoose.Schema({
    book_name:String,
    book_image:String,
    book_price:String,
    author:String,
    show_in_latest:String,
    show_in_best_seller:String,
    status:String,
    publish_on:Date
});

module.exports=mongoose.model("books",BooksSchema);