const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        require:[true,'Name cannot be empty'],
        minlength:[2,'Name cannot be less than 2 character'],
        maxlength:[64,'Name cannot be greater than 64 character'],
        
    },
    email:{
        type:String,
        require:[true,'email is required'],
        maxlength:[64,'Name cannot be greater than 64 character'],
    },
    password:{
        type:String,
        require:[true,'Password is required'],
    },
    isActive:{
        type:Boolean,
        default:true
    },
    isDelete:{
        type:Boolean,
        default:false
    }
})


userSchema.pre("save",async function(next){
if(!this.isModified('password')) next();
else{
    this.password = await bcrypt.hash(this.password,12);
    next();
}
})
const userModel = mongoose.model('userCollections',userSchema);
module.exports = userModel;