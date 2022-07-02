const mongoose=require("mongoose");

const bannerSchema=mongoose.Schema({
    alt:String,
    image:String
});

module.exports=mongoose.model("banners",bannerSchema);