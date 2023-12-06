export const insertStore = "insert into store(name,si,dong,bungi,info,number,createdAt, updatedAt) values(?,?,?,?,?,?,?,?);";

export const insertMission = "insert into mission(store_id, name, success, point, description, createdAt, updatedAt) values(?,?,?,?,?,?,?);";
export const getMissionSQL = "select m.* from mission as m where m.store_id = (select s.id from store as s where s.id=3) limit 10 offset 0;" 