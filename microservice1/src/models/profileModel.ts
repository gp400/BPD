import mongoose, { Schema, Document } from "mongoose";

export interface IProfile extends Document {
    name: string;
    lastName: string;
    cellphone: string;
    email: string;
    password: string;
    address: string;
    state: boolean;
}

const ProfileSchema = new Schema<IProfile>({
    name: { type: String, required: [true, "The name is required"] },
    lastName: { type: String, required: [true, "The last name is required"] },
    cellphone: { type: String, required: [true, "The cellphone is required"] },
    email: { type: String, required: [true, "The email is required"] },
    password: { type: String, required: [true, "The password is required"] },
    address: { type: String, required: [true, "The address is required"] },
    state: { type: Boolean, required: [true, "The state is required"] }
});

export const Profile = mongoose.model<IProfile>("Profile", ProfileSchema);