import express from "express";
import { 
    getJournals, 
    getJournalById,
    saveJournal,
    updateJournal,
    deleteJournal,
} from "../controllers/JournalControllers.js";
 
const router = express.Router();
 
router.get('/journals', getJournals);
router.get('/journals/:id', getJournalById);
router.post('/journals', saveJournal);
router.patch('/journals/:id', updateJournal);
router.delete('/journals/:id', deleteJournal);
 
export default router;