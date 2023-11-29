import {db} from "../index.js";
import { BaseError } from "../config/error.js";
import { status } from "../config/response.status.js";
import { confirmEmail, insertUsersql, getUserID,addMission} from "./user.sql.js";


export const addUser = async(data) => {
    try{
        const dbConnection = await db.getConnection();
        const [confirm]= await db.query(confirmEmail, data.email);
        //이메일이 이미 존재한다면 1의 값(true), 0이면 존재하지 않음 
        if(confirm[0].isExistEmail){
            dbConnection.release();
            return -1;
        }
        console.log(db.now);
        const result = await db.query(insertUsersql, [data.name, data.email, data.gender, data.phone, data.status, data.inactive_date, data.prefer, db.now,db.now]);

        dbConnection.release();
      

        return result[0];

    }catch(err){
        //throw new BaseError(status.PARAMETER_IS_WRONG);
        console.log(err);
    }
   
}
export const getUser = async(user) => {
    console.log(`user: ${user}`);
    try{
        const dbConnection = await db.getConnection();
        const [user] = await db.query(getUserID,user.email);

        console.log(`user: ${user}`);

        // 해당 id의 사용자 정보가 DB에 존재하지 않는 경우
        if(insertUsersql.length == 0 ) return -1;

        dbConnection.release();
        return user;

    }catch(err){
        console.log(err);
        //throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}

export const addMemberMission = async(data) => {

    const dbConnection = await db.getConnection();
    const result = await db.query(addMission, [data.user_id, data.mission_id, data.review_id, data.status, db.now, db.now]);
    return result;
}