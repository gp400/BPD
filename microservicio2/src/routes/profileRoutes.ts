import { Router } from "express";
import { createProfiles, deleteProfiles, updateProfile } from "../controllers/profileController";
import { tokenVerifier } from "../middlewares/authMiddleware";

const router = Router();

router.post("/create-profile", tokenVerifier, createProfiles);
router.put("/update-profile/:id", tokenVerifier, updateProfile);
router.delete("/delete-profile/:id", tokenVerifier, deleteProfiles);

export default router;