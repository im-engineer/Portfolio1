import  express from 'express';
const router = express.Router();
import {contact, getAllContacts} from '../controller/contactController'

router.post("/to/admin",contact);
router.get("/allData",getAllContacts)
export default router;