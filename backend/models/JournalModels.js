import mongoose from "mongoose";
 
const Journal = mongoose.Schema({
    title:{
        type: String
    },
    date:{
        type: Date,
        required: true
    },
    grid_no:{
        type: Number
    },
    desc1:{
        type: String
    },
    desc2:{
        type: String
    },
    desc3:{
        type: String
    },
    desc4:{
        type: String
    },
    desc5:{
        type: String
    },
    desc6:{
        type: String
    },
});
 
export default mongoose.model('journal', Journal);