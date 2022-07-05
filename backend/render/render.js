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
    axios.get("http://localhost:8000/api/books",{params:{id:req.query.id}})
    .then((userData)=>{
        res.render("edit-book",{user:userData.data});
    })
    .catch((error)=>{
        res.send(error);
    })
    
}

const deleteBook=async (req,res)=>
{
    let id=req.params.id;
    await axios.delete("http://localhost:8000/api/books/",{params:id})
    .then((result)=>
    {
        res.send(result.data);
    })
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
    loginUser,
    deleteBook

}