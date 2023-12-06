import {response} from "../config/response.js";
import { status } from "../config/response.status.js";


import {joinUser, registerMemberMission, getReviewList,getUserMissionIng,completedUserMission} from "../providers/userProviders.js";


export const userSignin = async(req,res,next) => {
    console.log("회원가입 요청");
    console.log("body:", req.body);
    res.send(response(status.SUCCESS, await joinUser(req.body)));
    
}

export const getMission = async(req,res,next) => {

    res.send(response(status.SUCCESS, await registerMemberMission(req.body)));
}

export const myReivewList = async(req,res,next) => {
    //임의적으로 사용자 아이디 설정
    const id = 1;
    res.send(await getReviewList(1));
}
export const getMissioning = async(req,res,next) => {
    const id =1;
    res.send(await getUserMissionIng(1));
}
export const completedMission = async(req,res,next) => {
    const id  = req.params.id;
    res.send(await completedUserMission(id));
}