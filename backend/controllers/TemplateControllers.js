import User from "../models/TemplateModels.js";
 
export const getTemplates = async (req, res) => {
    try {
        const templates = await Template.find();
        res.json(templates);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}
 
export const getTemplateById = async (req, res) => {
    try {
        const template = await Template.findById(req.params.id);
        res.json(template);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}
 
export const saveTemplate = async (req, res) => {
    const template = new Template(req.body);
    try {
        const insertedtemplate = await Template.save();
        res.status(201).json(insertedtemplate);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
 
export const updateTemplate = async (req, res) => {
    try {
        const updatedtemplate = await Template.updateOne({_id:req.params.id}, {$set: req.body});
        res.status(200).json(updatedtemplate);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
 
export const deleteTemplate = async (req, res) => {
    try {
        const deletedtemplate = await Template.deleteOne({_id:req.params.id});
        res.status(200).json(deletedtemplate);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

