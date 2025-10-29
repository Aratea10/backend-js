import mongoose, { Schema } from "mongoose";
import { hash } from "bcrypt";

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
  },
  password: String,
});

// Método del modelo
userSchema.statics.hashPassword = (clearPassword) => {
  return hash(clearPassword, 7);
};

export const User = mongoose.model("User", userSchema);
