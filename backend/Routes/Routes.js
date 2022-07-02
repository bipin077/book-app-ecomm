const express=require("express");
const books=require("../Controllers/BooksController");
const { Router } = require("express");
const render=require("../render/render");

const router=express.Router();

router.get("/",render.indexView);
router.get("/login",render.loginUser);
router.get("/manage-books",render.manageBooks);
router.get("/add-book",render.addBook);
router.get("/edit-book",render.updateBook);

// banner routes

router.get("/manage-banner",render.viewBanner);


/* Routes for api */


router.get("/api/books",books.getAllBooks);
router.post("/api/books",books.insertBook);
router.put("/api/books/:id",books.updateBook);
router.delete("/api/books/:id",books.deleteBook);



module.exports={
    routes:router
}