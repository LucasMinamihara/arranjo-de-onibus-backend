import { Router } from "express";
import { logar, registrarNoBanco } from "../controllers/user.controller.js";

const route = Router();

route.get("/logar", logar);
route.post("/registrar", registrarNoBanco);

export default route;
