const express=require("express");
const bodyParser= require("body-parser");

const app=express()

app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res){
res.sendFile(__dirname+"/index.html")
});

app.get("/about",function(req,res){
    res.send("<h1> created with love by Harsh </h1>")
    });
    app.get("/contact",function(req,res){
        res.send("<h1> Harsh Garg 7009115485 </h1>")
        });

app.post("/",function(req,res){
    var blogname =req.body.blogName;
    res.send("Your Blog Name is  " + blogname);

});
app.listen(3000,function(){
    console.log("serven up and running on port 3000")
});