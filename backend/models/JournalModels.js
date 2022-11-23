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
        type: Date,
        required: true
    },
    grid_no:{
        type: Number,
        required: true
    }
});
 
export default mongoose.model('journal', Journal);