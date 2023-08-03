import mongoose from "mongoose";
const Schema = mongoose.Schema;

let Game = new Schema({
  name: { type: String },
  type: { type: String, enum: ["action", "adventure", "racing", 'role-playing', 'sports'] },
  image: { type: String },
  rating: { type: String, enum: ["everyone", "teen", "mature"] },
  price: { type: Number },
  system: { type: String, enum: ["all", "PlayStation", "Xbox", "Switch", "PC"] },
  description: { type: String },
});

export default mongoose.model("games", Game);