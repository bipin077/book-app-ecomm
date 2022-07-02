const mongoose=require("mongoose");

const whychooseschma=mongoose.Schema({
    icon:String,
    title:String,
    subtitle:String
});

module.exports=mongoose.model("whychooseus",whychooseschma);