import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";
import JournalRoute from "./routes/JournalRoute.js";
import User from "./models/UserModels";
// import app from "express";
import bodyParser from "body-parser";


const app = express();

app.use(cors());
app.use(express.json());

// var mongoose = require("mongoose");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://journ3y:journey@journ3y.hbejhsm.mongodb.net/Journ3y?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true,
});
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => {
    console.log('Database Connected...');
});
 
app.use(cors());
app.use(express.json());

app.use(UserRoute);
app.use(JournalRoute);

app.post('/register',function(req,res){
    // taking a user
    const newuser=new User(req.body);
    console.log(newuser);
 
    if(newuser.password!=newuser.password2)return res.status(400).json({message: "password not match"});
    
    User.findOne({email:newuser.email},function(err,user){
        if(user) return res.status(400).json({ auth : false, message :"email exits"});
 
        newuser.save((err,doc)=>{
            if(err) {console.log(err);
                return res.status(400).json({ success : false});}
            res.status(200).json({
                succes:true,
                user : doc
            });
        });
    });
 });
 
app.listen(5000, ()=> {
    console.log('Server up and running...');
});


