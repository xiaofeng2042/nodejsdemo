var User = require('../model/user')
 
exports.list = function(req,res){
    User.fetch(function(err,users){
        if(err) {console.log(err)}
        res.send(users);
    })
}
exports.save = function(req,res){
    console.log(req.query.name);
    var name = req.query.name || 'noname';
    var password = 'abcdefg';
    var user = new User({"name":name,"password":"123456"})
     
    user.save(function(err){
        if(err)
        {
            console.log('false');
            res.send("fails");
            return;
        }
        res.redirect('/');
    })
}