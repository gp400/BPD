import { Router } from "express";
import { getProfile, getProfiles, getToken } from "../controllers/profileController";
import { tokenVerifier } from "../middlewares/authMiddleware";

const router = Router();

router.get("/get-token/:id", getToken);
router.get("/get-profiles", tokenVerifier, getProfiles);
router.get("/get-profile/:id", tokenVerifier, getProfile);

export default router;