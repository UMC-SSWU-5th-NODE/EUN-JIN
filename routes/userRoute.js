import express from "express";
import {userSignin,getMission,myReivewList,getMissioning,completedMission} from "../controllers/userController.js";

export const userRouter = express.Router({mergeParams:true});


userRouter.post("/signin", userSignin);
userRouter.post("/mission/ing", getMission);
userRouter.get("/myreviews", myReivewList);
userRouter.get("/missions/ing",getMissioning);
userRouter.get("/mission/:id/done",completedMission);