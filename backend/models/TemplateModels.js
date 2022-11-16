import mongoose from "mongoose";
 
const Template = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    grid_no:{
        type: Int32Array,
        required: true
    }
});
 
export default mongoose.model('template', Template);