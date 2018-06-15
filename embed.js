var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/blog_demo");

var userSchema= new mongoose.Schema({
    email: String,
    name: String
});

var User = mongoose.model("User",userSchema);

var postSchema= new mongoose.Schema({
    title: String,
    content: String
});

var Post = mongoose.model("Post",postSchema);

// var newUser = new User({
//     email: "harsh@gmail",
//     name: "harsh"
// });

// newUser.save(function(err,user){
//     if(err){
//         console.log(err);

//     }else{
//         console.log(user);
//     }
// });

var newPost = new Post({
    title: "apples",
    content: "they are delicious"
});

newPost.save(function(err,post){
    if(err){
        console.log(err);

    }else{
        console.log(post);
    }
});

