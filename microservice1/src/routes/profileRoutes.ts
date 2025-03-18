import { Router } from "express";
import { getProfile, getProfiles, getToken } from "../controllers/profileController";

const router = Router();

router.get("/get-token/:id", getToken);
router.get("/get-profiles", getProfiles);
router.get("/get-profile/:id", getProfile);

export default router;