import User from "../models/TitleModels.js";
 
export const getTitle = async (req, res) => {
    try {
        const title = await Title.find();
        res.json(title);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}
 
export const getTitleById = async (req, res) => {
    try {
        const title = await Title.findById(req.params.id);
        res.json(title);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}
 
export const saveTitle = async (req, res) => {
    const title = new Title(req.body);
    try {
        const insertedtitle = await Title.save();
        res.status(201).json(insertedtitle);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
 
export const updateTitle = async (req, res) => {
    try {
        const updatedtitle = await Title.updateOne({_id:req.params.id}, {$set: req.body});
        res.status(200).json(updatedtitle);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
 
export const deleteTitle = async (req, res) => {
    try {
        const deletedtitle = await Title.deleteOne({_id:req.params.id});
        res.status(200).json(deletedtitle);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

