var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/blog_demo_2");

var Post = require("./models/post.js");

var User = require("./models/user.js");

// User.create({
//     email: "harsh@gmail.com",
//     name: "harsh"
// });

// Post.create({
//     title: "bananas",
//     content: "they are delicious"
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

// User.findOne({name: "harsh"}).populate("posts").exec(function(err,user){
//     if(err){

//         console.log(err);
//     }else{
//         console.log(user);
//     }
// });









