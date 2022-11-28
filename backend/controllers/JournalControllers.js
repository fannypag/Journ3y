import Journal from "../models/JournalModels.js";
import mongo from "mongodb"
 
export const getJournalsByDate = async (req, res) => {
    const date = req.params.date;
    let afterDate = date.split('-')
    afterDate[2] = (parseInt(afterDate[2]) + 1).toString()
    afterDate = afterDate.join('-')
    console.log(afterDate)
    try {
        const journals = await Journal.find({date: { $gte: date, $lte: afterDate }});
        
        res.status(200).json(journals);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}
 
export const getJournalById = async (req, res) => {
    try {
        const journal = await Journal.findById(req.params.id);
        res.json(journal);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}
 
export const saveJournal = async (req, res) => {
    const journal = new Journal(req.body);
    try {
        const insertedjournal = await Journal.save();
        res.status(201).json(insertedjournal);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
 
export const updateJournal = async (req, res) => {
    const id = mongo.ObjectId(req.params.id);
    try {
        const updatedjournal = await Journal.findOneAndUpdate({_id:id}, req.body);
        res.status(200).json(updatedjournal);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
 
export const deleteJournal = async (req, res) => {
    try {
        const deletedjournal = await Journal.deleteOne({_id:req.params.id});
        res.status(200).json(deletedjournal);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}


