import mongoose from "mongoose";
 
const User = mongoose.Schema({
    fullname:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    grid_no:{
        type: Number,
        required: true
    }
});
 
export default mongoose.model('user', User);