var User = require('../app/controller/user')
 
var _ = require('underscore')
 
module.exports = function(app){
    app.get('/',User.list)
    app.get('/user',User.save);
}