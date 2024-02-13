import mysql from "mysql2";
import {config} from 'dotenv';
config()

const pool = mysql.createPool ({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
}).promise();

 const getInfos = async() =>{
   const [result] = await pool.query(`
   SELECT * FROM form
   `);
//    array.forEach((item, index) => {item.id = index + 1;} );
   return result;
}

 const getInfo = async(id)=> {
    // Prepared statement 
    const [result] = await pool.query(`
    SELECT  * FROM form WHERE id = ?
    `, [id]); 
    // SELECT * FROM form LIMIT 1
    return result
}

//  const getInfoContains = async(input)=> {
//     // Prepared statement 
//     const [result] = await pool.query(`
//     SELECT  * FROM form WHERE name LIKE '%?%'
//     `, [input]); 
//     // SELECT * FROM form LIMIT 1
//     return result
// }

 const addInfo = async(name,age)=> {
    const [Info] = await pool.query(`
    INSERT INTO form (name,age) VALUES (?,?)
    `, [name,age]); 
    const [Infos] = await pool.query(
        `SELECT * FROM form`
    )
        return Infos.insertId;
}

const  updateInfo = async(name,age,id)=>{
    const [Info] = await pool.query (
        ` UPDATE form SET name=?,age=? WHERE (id=?)`,[name,age,id])
    return Info
}

const deleteInfo = async(id)=> {
    const [remove] = await pool.query(
        `DELETE FROM form WHERE (id = ?)`,[id]
        )
    const [Infos] = await pool.query(
        `SELECT * FROM form`
    )
        return Infos;
}

// const removeInfos = async()=> {
//     const [remove] = await pool.query(
//         `TRUNCATE TABLE form;`
//         )

//     const [Infos] = await pool.query(
//         `SELECT * FROM form`
//     )
//         return Infos;
// }

// console.log(await updateInfo("Daniel", 20 ,2));
console.log(await getInfos());

export { getInfos,getInfo,addInfo,deleteInfo};