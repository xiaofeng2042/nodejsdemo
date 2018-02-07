var mongoose = require('mongoose')
 
var UserSchema = new mongoose.Schema({
    name:{
        unique:true,
        type:String
    },
    password:{
        type:String
    },
    //0  1  2  3  4
    role:{
        type:Number,
        default:5
    }
})
UserSchema.statics = {
    fetch:function(cb){
        return this.find({})
        .exec(cb)
    },
    findById:function(id,cb){
        return this.findOne({_id:id}).exec(cb)
    }
}
module.exports = UserSchema