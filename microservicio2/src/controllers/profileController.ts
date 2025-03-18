import { Request, Response } from "express";
import { Profile } from "../models/profileModel";
import { generarToken } from "../utils/jwt";

export const createProfiles = async (req: Request, res: Response) => {
    try{
        const profile = new Profile({ ...req.body });
        await profile.save();
        const token = generarToken({ profile })
        res.json( { ...req.body, id: profile.id, password: undefined, token } );
    } catch(error){
        res.status(400).json({ error });
    }
}

export const updateProfile = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const updateObj: any = {};
        const { name, lastName, cellphone, email, password, address } = req.body;

        if (name !== null) updateObj.name = name;
        if (lastName !== null) updateObj.lastName = lastName;
        if (cellphone !== null) updateObj.cellphone = cellphone;
        if (email !== null) updateObj.email = email;
        if (password !== null) updateObj.password = password;
        if (address !== null) updateObj.address = address;

        const profile = await Profile.findByIdAndUpdate(id, updateObj, { new: true, runValidators: true })
        res.status(200).json(profile);
        return;
    } catch(error){
        res.status(400).json({ error });
        return
    }
}

export const deleteProfiles = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const deletedProfile = await Profile.findByIdAndDelete(id).select("-password");

        if (!deletedProfile){
            res.status(404).json({ error: "Profile was not found" });
            return;
        }

        res.json(deletedProfile);
    } catch(error){
        res.status(400).json({ error });
    }
}