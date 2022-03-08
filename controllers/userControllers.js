const userModel = require('../models/userModel');

exports.getRegisterUser = (req, res) => {
  res.render("users/register",{message:''});
};
exports.postRegisterUser = async(req, res) => {
  const user = new userModel(req.body);
  console.log("This ");
  console.log(req.body);
  try{
    const result = await user.save();
    console.log(result);
    res.render("users/register",{message:'User account created successfully'});
    
  }
  catch(err){
    console.log(err);
  }
  // console.log(req.body);
  // let result = await userModel.insertMany(req.body)
  // res.send('successfully')
};
