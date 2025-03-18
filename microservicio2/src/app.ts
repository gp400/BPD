import express from "express";
import cors from "cors";
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import profileRoutes from "./routes/profileRoutes";

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