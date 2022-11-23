import mongoose from "mongoose";
 
const Title = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    grid_no:{
        type: Number,
        required: true
    }
});
 
export default mongoose.model('title', Title);