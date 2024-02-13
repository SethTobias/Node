    import mysql from "mysql2";
    import {config} from 'dotenv';
    config()

    const pool = mysql.createPool ({
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE
    }).promise();

    const getFriends = async() =>{
    const [result] = await pool.query(`
    SELECT * FROM mates
    `);
    //    array.forEach((item, index) => {item.id = index + 1;} );
    return result;
    }

    const getFriend = async(id)=> {
        // Prepared statement 
        const [result] = await pool.query(`
        SELECT  * FROM mates WHERE id = ?
        `, [id]); 
        // SELECT * FROM mates LIMIT 1
        return result
    }

    //  const getFriendContains = async(input)=> {
    //     // Prepared statement 
    //     const [result] = await pool.query(`
    //     SELECT  * FROM mates WHERE name LIKE '%?%'
    //     `, [input]); 
    //     // SELECT * FROM mates LIMIT 1
    //     return result
    // }

    const addFriend = async(name,age)=> {
        const [friend] = await pool.query(`
        INSERT INTO mates (name,age) VALUES (?,?)
        `, [name,age]); 
        const [friends] = await pool.query(
            `SELECT * FROM mates`
        )
            return friends.insertId;
    }

    const  updateFriend = async(name,age,id)=>{
        const [friend] = await pool.query (
            ` UPDATE mates SET name=?,age=? WHERE (id=?)`,[name,age,id])
        return friend
    }

    const deleteFriend = async(id)=> {
        const [remove] = await pool.query(
            `DELETE FROM mates WHERE (id = ?)`,[id]
            )
        const [friends] = await pool.query(
            `SELECT * FROM mates`
        )
            return friends;
    }

    // const removeFriends = async()=> {
    //     const [remove] = await pool.query(
    //         `TRUNCATE TABLE mates;`
    //         )

    //     const [friends] = await pool.query(
    //         `SELECT * FROM mates`
    //     )
    //         return friends;
    // }

    // console.log(await updateFriend("Daniel", 20 ,2));
    console.log(await getFriends());

    export { getFriends,getFriend,addFriend,deleteFriend}