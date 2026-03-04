import mongoose, { Schema, models } from "mongoose";

export interface ITree {
  _id?: string;
  name?: string;
  species?: string;
  lat: number;
  lng: number;
  height?: number | null;
  circumference?: number | null;
  description?: string;
}

const TreeSchema = new Schema<ITree>(
  {
    name: { type: String, default: "" },
    species: { type: String, default: "" },
    lat: { type: Number, required: true },
    lng: { type: Number, required: true },
    height: { type: Number, default: null },
    circumference: { type: Number, default: null },
    description: { type: String, default: "" },
  },
  { timestamps: true }
);

TreeSchema.index({ lat: 1, lng: 1 });

export default models.Tree || mongoose.model<ITree>("Tree", TreeSchema);
