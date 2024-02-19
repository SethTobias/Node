// Database where we store our MySQL queries

// Make note of destructing [], Queries/Prepared Statements,

// Database queries


// const addUser = async()=>{
// await pool.query (`
// Prepared Statement and Array..
// `INSERT INTO friends.users (username,password) VALUES (?,?)`,[username,password]
// ) 
// }
// // console.log(await addUser('mattdean','dfghjk'))
// 
// const checkuser = async (username) => {
//      const [password] = await pool.query(`
//      SELECT password FROM users WHERE username  = ?`,[username]
//      return password 
//
//
//`)
// const checkuser = async (username) => {
//      const [[{password}]] = await pool.query(`
//      SELECT password FROM users WHERE username  = ?`,[username]
//      return password 
//
//
//`)
// 
// Recommended
// Bcrypt bcrpt.hash(password,salt??amount of hash times,(err,hash) {})
// 
// bcrypt.compare (password 'entered password',hash 'hashed password in db',error function 'result'){}
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 