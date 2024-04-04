import mongoose from "mongoose";

const collection = "users"

const schema = new mongoose.Schema({
  first_name:String,
  last_name:String,
  email:{
    type:String,
    unique:true
  },
  age:Number,
  password:String,
  rol:{
    type:String,
    default:"user",
    enum: ["user", "admin", "premium"]
  },
  resetToken: String,
  resetTokenExpires: Date
})

const UserModel = mongoose.model(collection,schema);

export default UserModel;