import { Request, Response } from "express";
import { Profile } from "../models/profileModel";
import { generarToken } from "../utils/jwt";

// const getProfileDb = async(id: string) => {
//     return await Profile.findById(id).select("-password").lean();
// }

interface ProfileReturn {
    ok: boolean;
    data: any;
}

const getProfileDb = async(req: Request, res: Response): Promise<ProfileReturn> => {
    const { id } = req.params;
    const profile = await Profile.findById(id).select("-password").lean();
    console.log(profile);

    if (!profile){
        return { ok: false, data: "Profile was not found" };
    }

    return { ok: true, data: profile };
}

export const getToken = async(req: Request, res: Response) => {
    try {
        const profile = await getProfileDb(req, res);

        if (!profile.ok){
            res.status(404).json({ error: profile.data });
            return;
        }

        const token = generarToken( profile.data );
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
        const profile = await getProfileDb(req, res);

        if (!profile.ok){
            res.status(404).json({ error: profile.data });
            return;
        }

        res.json(profile.data);
    } catch(error){
        res.status(400).json({ error });
    }
}