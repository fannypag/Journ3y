import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";
import JournalRoute from "./routes/JournalRoute.js";

// var mongoose = require("mongoose");

const app = express();
mongoose.connect('mongodb+srv://journ3y:journey@journ3y.hbejhsm.mongodb.net/Journ3y?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
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
 
app.listen(5000, ()=> {
    console.log('Server up and running...');
});