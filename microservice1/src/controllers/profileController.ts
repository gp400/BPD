import { Request, Response } from "express";
import { Profile } from "../models/profileModel";
import { generarToken } from "../utils/jwt";

const getProfileDb = async(id: string) => {
    return await Profile.findById(id).select("-password").lean();
}

export const getToken = async(req: Request, res: Response) => {
    try {

        const { id } = req.params;
        const profile = await getProfileDb(id);

        if (!profile){
            res.status(404).json({ error: "Profile was not found" });
            return;
        }

        const token = generarToken( profile );
        res.json({token})
    } catch(error){
        res.status(400).json({ error });
    }
}

export const getProfiles = async (req: Request, res: Response) => {

    try{
        const profiles = await Profile.find().select("-password").lean();
        res.json(profiles);
    } catch(error){
        res.status(400).json({ error });
    }
}

export const getProfile = async (req: Request, res: Response) => {

    try{

        const { id } = req.params;
        const profile = await getProfileDb(id);

        if (!profile){
            res.status(404).json({ error: "Profile was not found" });
            return;
        }

        res.json(profile);
    } catch(error){
        res.status(400).json({ error });
    }
}