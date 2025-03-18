import { Response, Request, NextFunction } from "express";
import { verificarToken } from "../utils/jwt";
import { Profile } from "../models/profileModel";

export const tokenVerifier = async(req: Request, res: Response, next: NextFunction) => {
    try{
        const totalProfiles = await Profile.exists({});
        const endpoint = req.url;
        if (!totalProfiles && endpoint == "/create-profile"){
            next();
            return;
        }

        const authHeader = req.headers.authorization?.split(" ")[1];
        const valido = verificarToken(authHeader as string);
        if (valido){
            next();
        } else {
            res.status(401).json("No esta autorizado")
        }
        return
    } catch(error){
        res.status(400).json("No ha iniciado sesion");
        return
    }
}