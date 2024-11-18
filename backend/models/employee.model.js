import mongoose, { mongo } from "mongoose";

const employSchema=new mongoose.Schema({
    task:{type:String}
});
export default mongoose.model.Employee||mongoose.model("Employee",employSchema);