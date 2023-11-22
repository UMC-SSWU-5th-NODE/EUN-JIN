//const express = require('express')
import express from 'express';
import mysql from 'mysql2/promise';
import { response } from "./config/response.js";
import { BaseError } from "./config/error.js";
import { status } from "./config/response.status.js";
import { tempRouter } from './routes/tempRoute.js';
import { returnError } from './controllers/errorController.js';

const app = express();
const port = 3000;
require("dotenv").config();
app.use(
	express.urlencoded({
		extended: false
	})
);
app.use(express.json());
app.use("/temp",tempRouter);
app.get('/', (req, res) => {
	//res.send('Hello World!testing nodemon....')
	  res.send("testing");	
  });
  
// 유효하지 않은 페이지에 접속한 경우우
app.use((req,res,next) => {
	const err = new BaseError(status.NOT_FOUND);
	next(err);
}
) 
app.use((err,req,res,next)=>{
	console.log(err.data.status);
	console.log(err.data.message);
	res.locals.message = err.message;
	//NODE.ENV=80
	//res.locals.error = process.env.NODE_ENV !== "production" ? err: {};
	//console.log(response(err.data));
	res.status(err.data.status).send(response(err.data));
	
	console.log("done");
});

/*
app.use((req,res,next)=>{
	const err = new BaseError(status.NOT_FOUND);
	next(err);
});

app.use((err,req,res,next)=>{
	console.log(err.data.status);
	console.log(err.data.message);
	res.locals.message = err.message;
	//NODE.ENV=80
	//res.locals.error = process.env.NODE_ENV !== "production" ? err: {};
	//console.log(response(err.data));
	res.status(err.data.status).send(response(err.data));
	
	console.log("done");
});

*/

/*
async function main(){

//import mysql from 'mysql2/promise';
const db = await mysql.createPool({
		host:process.env.DB_HOST,
		user:process.env.DB_USER,
		password:process.env.DB_PW,
		port: process.env.DB_PORT,
		database: process.env.DB_NAME,
		waitForConnections: true,
		insecureAuth: true
});


// missions completed
const [rows1,fields1]= await db.query(`select m.point,s.name,m.name from member_mission as c inner join mission as m on m.id = c.mission_id inner join store as s on s.id = m.store_id where c.status = 'done' and c.user_id = (select id from user where name='eunjin')`);
console.log(rows1);
// missions doing by user
const [ result2 ] = await db.query(`select m.point,s.name,m.name from member_mission as c inner join mission as m on m.id = c.mission_id inner join store as s on s.id = m.store_id where c.status = 'ing' and c.user_id = (select id from user where name='eunjin')`);
console.log(result2);
// show reviews
const [ result3 ] = await db.query(`select m.*, s.name, s.info, (now()-m.createdAt) as period from mission as m left join store as s on s.dong='seongbukgu' where s.id = m.store_id and m.id not in (select mission_id from member_mission where user_id = (select id from user as u where name='eunjin'))`);
console.log(result3);
// search missions that can be completed 
const [result4] = await db.query(`select * from mission where store_id = any(select id from store where dong='seongbukgu') and id not in (select mission_id from member_mission where user_id = (select id from user where name ='eunjin'))`);
console.log(result4);
// get name, email, phone info
const [result5] = await db.query(`select name, email, phone from user where id =2023`);
console.log(result5);
// get the user's point
const [result6] = await db.query(`select sum(m.point) from member_mission as c inner join mission as m on m.id = c.mission_id where c.status="done"`);
console.log(result6);

}


main();
*/
//console.log(test1);




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
