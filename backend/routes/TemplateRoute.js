import express from "express";
import { 
    getTemplates, 
    getTemplateById,
    saveTemplate,
    updateTemplate,
    deleteTemplate
} from "../controllers/TemplateControllers.js";
 
const router = express.Router();
 
router.get('/templates', getTemplates);
router.get('/templates/:id', getTemplateById);
router.post('/templates', saveTemplate);
router.patch('/templates/:id', updateTemplate);
router.delete('/templates/:id', deleteTemplate);
 
export default router;