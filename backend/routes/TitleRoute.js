import express from "express";
import { getTemplateById } from "../controllers/TemplateControllers.js";
import { 
    getTitle, 
    getTitle,
    saveTitle,
    updateTitle,
    deleteTitle
} from "../controllers/TitleControllers.js";
 
const router = express.Router();
 
router.get('/titles', getTitle);
router.get('/titles/:id', getTemplateById);
router.post('/titles', saveTitle);
router.patch('/titles/:id', updateTitle);
router.delete('/titles/:id', deleteTitle);
 
export default router;