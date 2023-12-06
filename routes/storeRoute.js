import express from "express";
import {registerStore, registerMission,getStoreMissions} from "../controllers/storeController.js"
export const storeRouter = express.Router();

storeRouter.post("/register", registerStore);
storeRouter.post("/register/mission", registerMission);
storeRouter.get("/store/:id/mission", getStoreMissions);