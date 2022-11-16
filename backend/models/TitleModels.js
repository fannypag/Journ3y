import mongoose from "mongoose";
 
const Title = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    desc:{
        type: String,
        required: true
    },
    date:{
        type: Int,
        required: true
    }
});
 
export default mongoose.model('title', Title);