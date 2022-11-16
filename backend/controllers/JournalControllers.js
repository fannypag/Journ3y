import User from "../models/JournalModels.js";
 
export const getJournals = async (req, res) => {
    try {
        const journals = await User.find();
        res.json(journals);
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
    try {
        const updatedjournal = await Journal.updateOne({_id:req.params.id}, {$set: req.body});
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

