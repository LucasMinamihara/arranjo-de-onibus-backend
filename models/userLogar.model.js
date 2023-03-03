import mongoose from "mongoose";

const logarSchema = {
  email: { type: String, require: true },
  senha: { type: Mixed, require: true },
};

export const Logar = mongoose.model("Logar", logarSchema);


