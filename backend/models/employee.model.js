import mongoose, { mongo } from "mongoose";

const employSchema=new mongoose.Schema({
    name:{type:String},
    salary:{type:Number},
    experience:{type:String},
    designation:{type:String},
    phone:{type:Number},
    email:{type:String},
    profile:{type:String}
});
export default mongoose.model.employ||mongoose.model("employ",employSchema);