const express=require('express');
const path=require('path');
const homeRoutes=require("./Routes/Routes");

const app=express();

app.use(express.json());
app.set("view engine",'ejs');
app.use(express.static(path.join(__dirname,'public')));
app.use(homeRoutes.routes);




app.listen(8000);
