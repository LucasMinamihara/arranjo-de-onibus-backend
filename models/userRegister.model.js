import mongoose from "mongoose";

const registrarSchema = {
  nome: { type: String, require: true },
  email: { type: String, require: true, unique: true },
  logar: { type: Mixed, require: true },
};

export const Registrar = mongoose.model("Registrar", registrarSchema);


