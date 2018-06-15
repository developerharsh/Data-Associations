var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/blog_demo_2");

var postSchema= new mongoose.Schema({
    title: String,
    content: String
});

var Post = mongoose.model("Post",postSchema);

var userSchema= new mongoose.Schema({
    email: String,
    name: String,
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post"
    }]
});

var User = mongoose.model("User",userSchema);

// User.create({
//     email: "harsh@gmail.com",
//     name: "harsh"
// });

// Post.create({
//     title: "bananas",
//     name: "they are delicious"
// }, function(err,post){
//     if(err){
//         console.log(err);
//     }else{
//         User.findOne({name:"harsh"},function(err,user){
//             if(err){
//                 console.log(err);
//             }else{
//                 user.posts.push(post);
//                 user.save(function(err,savedUser){
//                     if (err){
//                         console.log(err);
//                     }else{
//                         console.log(savedUser);
//                     }
//                 });
//             }
//         });
//     }
// });

User.findOne({name: "harsh"}).populate("posts").exec(function(err,user){
    if(err){

        console.log(err);
    }else{
        console.log(user);
    }
});









