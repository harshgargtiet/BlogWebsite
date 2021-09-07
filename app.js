//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _=require("lodash");
const homeStartingContent = "Hello my first blog website ";
const aboutContent = "i am a web developer ";
const contactContent="Contact me through mail";
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
let posts=[];

app.get("/",function(req,res){
    res.render("home",{
        startingContent:homeStartingContent,
        posts:posts
    });
    // console.log(posts);
});
app.get("/about",function(req,res){
    res.render("about",{aboutcontent:aboutContent});
});
app.get("/contact",function(req,res){
    res.render("contact",{contactcontent:contactContent});
});
app.get("/compose",function(req,res){
    res.render("compose");
});
app.post("/compose",function(req,res){
    const post={
        title:req.body.postTitle,
        content:req.body.postBody
    };
    posts.push(post);
    res.redirect("/");
});

app.get("/posts/:postName",function(req,res){
    const reqtitle=_.lowerCase(req.params.postName);
    posts.forEach(function(post){
        const stredfile=_.lowerCase(post.title);
        if(stredfile===reqtitle)
        {
        res.render("post",{
           title:post.title,
           content:post.content 
        });

        }
    })
       
    
});
// app.get("/",function(req,res){
//     res.render("about",{aboutContent:aboutContent});
// });
// app.get("/",function(req,res){
//     res.render("contact",{contactContent:contactContent});
// });


    
    
// app.get("/",function(req,res){
// res.sendFile(__dirname+"/index.html")
// });

// app.get("/about",function(req,res){
//     res.send("<h1> created with love by Harsh </h1>")
//     });
//     app.get("/contact",function(req,res){
//         res.send("<h1> Harsh Garg 7009115485 </h1>")
//         });

// app.post("/",function(req,res){
//     var blogname =req.body.blogName;
//     res.send("Your Blog Name is  " + blogname);

// });
// app.listen(3000,function(){
//     console.log("serven up and running on port 3000")
// });
