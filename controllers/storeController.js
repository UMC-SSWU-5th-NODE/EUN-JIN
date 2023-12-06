import {response} from "../config/response.js";
import { status } from "../config/response.status.js";
import { addStore, addMission,getMissions } from "../models/store.dao.js";

export const registerStore = async(req,res,next) => {

    console.log(req.body);

    return res.send(response(status.SUCCESS,addStore(req.body)));

}

export const  registerMission = async(req,res,next) => {
    console.log(req.body);

    return res.send(response(status.SUCCESS, addMission(req.body)));
}
export const getStoreMissions = async(req,res,next) => {
    console.log(req.params.id);
    const id = req.params.id;

    return res.send(await getMissions(id));
}