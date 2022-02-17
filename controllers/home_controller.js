const Post = require('../models/posts');
const User = require('../models/user');


module.exports.home = async function(req, res){
    // console.log(req.cookies);
    // res.cookie('user_id', 25);

    // Post.find({},function(err,posts){

    //     return res.render('home', {
    //         title: "Home",
    //         posts : posts
    //     });

    
    // });
    try {
        let posts = await Post.find({})
        .populate('user')
        .populate({
            path:'comments',
            populate:{
                path:'user'
            }
        })
        let users = await User.find({});
       
        return res.render('home', {
            title: "Home",
            posts : posts,
            all_users : users
    });
        
    } catch (error) {
        console.log('Error',err);
        return;
    }
 
    // .exec(function(err,posts){
    //     User.find({},function(err,users){
    //         return res.render('home', {
    //             title: "Home",
    //             posts : posts,
    //             all_users : users
    //     })
        
    //      });
    // })
 
    
 
}

// module.exports.actionName = function(req, res){}