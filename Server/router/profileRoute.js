import express from "express";
import { addProfile, updateProfile } from "../controller/profile";
import { multerUpload } from "../middleware/multer";

const router = express.Router();

// Define route for adding a new profile
router.post("/add", multerUpload.single("image"), addProfile);

// Define route for updating an existing profile
router.put("/update", multerUpload.single("image"), updateProfile);

export default router;
