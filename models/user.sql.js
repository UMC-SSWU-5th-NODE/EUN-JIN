export const insertUsersql = "insert into user(name, email, gender, phone, status, inactive_date,prefer,createdAt, updatedAt) values(?,?,?,?,?,?,?,?,?);";
export const getUserID = "select * from user where email=?";
export const confirmEmail = "select exists(select 1 from user where email =?) as isExistEmail";
export const addMission = "insert into member_mission(user_id, mission_id, review_id, status, createdAt, updatedAt) values(?,?,?,?,?,?);";
export const getReviews = "select m.*, s.name, s.info, (now()-m.createdAt) as period from mission as m left join store as s on s.dong='adong' where s.id = m.store_id and m.id in (select mission_id from member_mission where user_id = (select id from user as u where id='1')) limit 10 offset 0;"
export const getMissionIngs = "select m.point,s.name,m.name from member_mission as c inner join mission as m on m.id = c.mission_id inner join store as s on s.id = m.store_id where c.status = 'ing' and c.user_id = (select id from user where id=1) limit 10 offset 0;"
export const setStatus = "update member_mission set status='done' where mission_id=1;"