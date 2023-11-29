export const insertUsersql = "insert into user(name, email, gender, phone, status, inactive_date,prefer,createdAt, updatedAt) values(?,?,?,?,?,?,?,?,?);";
export const getUserID = "select * from user where email=?";
export const confirmEmail = "select exists(select 1 from user where email =?) as isExistEmail";
export const addMission = "insert into member_mission(user_id, mission_id, review_id, status, createdAt, updatedAt) values(?,?,?,?,?,?);";


