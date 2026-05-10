import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/LogIn")

const userSchema = mongoose.Schema({
    firstName : String, 
    lastName : String,
    streetAddress : String, 
    city : String, 
    state : String, 
    pinNum : String, 
    email: String, 
    phone : String, 
    dob: String, 
    password : String,
    username : String
})

export default mongoose.model("User", userSchema)