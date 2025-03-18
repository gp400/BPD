import { Response, Request, NextFunction } from "express";
import { verificarToken } from "../utils/jwt";

export const tokenVerifier = (req: Request, res: Response, next: NextFunction) => {
    try{
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