import express from "express";
import cors from "cors";
import profileRoutes from "./routes/profileRoutes";
import mongoose from 'mongoose';
import dotenv from 'dotenv';

const app = express();
dotenv.config({ path: "../.env" });

try {
    const conexion = mongoose.connect(process.env.MONGO_URI as string);
}catch(error){
    console.log(error);
}

app.use(cors());
app.use(express.json());
app.use("/api/profiles", profileRoutes);

export default app;
