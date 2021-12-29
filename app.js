const express=require("express");
const bodyParser=require("body-parser");

var app=express();
app.set("view engine","ejs");
app.use(express.static('Public'));
app.use(express.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.render("body");
});

app.get("/header",function(req,res){
    res.render("header");
});

app.listen(3000,function(){
    console.log("Server has started")
});