const axios=require('axios');

const indexView=(req,res)=>
{
    res.render('index');
}

const loginUser=(req,res)=>
{
    res.render("login");
}

const manageBooks=(req,res)=>
{
    axios.get("http://localhost:8000/api/books").then((response)=>
    {
        res.render('manage-books',{books:response.data});
    })
   .catch((error)=>
   {
    res.send(error);
   })
}

const addBook=(req,res)=>
{
    res.render('add-book');
}

const updateBook=(req,res)=>
{
    res.render("edit-book");
}


const viewBanner=(req,res)=>
{
    res.render('manage-banner');
}


module.exports= {
    manageBooks,
    addBook,
    updateBook,
    viewBanner,
    indexView,
    loginUser

}