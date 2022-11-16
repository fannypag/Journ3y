import mongoose from "mongoose";
 
const Journal = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    desc:{
        type: String,
        required: true
    },
    date:{
        type: Int32Array,
        required: true
    },
    grid_no:{
        type: Int32Array,
        required: true
    }
});
 
export default mongoose.model('journal', Journal);