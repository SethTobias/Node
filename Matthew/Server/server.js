// Run npm init -y To initialise Node.js in the specific folder
// Name all your dependencies and what they do 
// Install nodemon `npm i express` 

// Import express: After running `npm i express` 

// Import cors: After running `npm i cors`
// app.use(cors(origin:'http://localhose:8080'(Port Number of your hosted Vue),credentials:true))
// Import config using dotenv: After running `npm i dotenv` 

// Import cookie-parser then use it

// Import bcrypt from bcrypt 
// app.post('/users',authenticate, (req,res) => {
// const {username,password} = req.body
// bcrypt.hash(password,10,async (err,hash)=>{
// if (err) throw err
// await addUser (username,hash)
// res.send({msg:"You have created an account"})
// })
// })
 
// const auth = async (res,req,next) => {
// Why are we destructing difference between destructuring [] reference key/property when entering mot dependent on order but the key/property, {} dependent on order declaring variables? Layered/nesting destructuring what??? Nesting a concept in JavaScript
//     const {username,password} = req.body
//     const [hashedPassword] = await checkUser(username)
//     bcrypt.compare(password,hashedPassword.password,(err,result)=> {
//     if(err) throw err 
//     if(result === true) {
//     const {username} = req.body
//     const token = jwt.sign({username.username})
//     const token = jwt.sign({username:username},process.env.SECRET_KEY,{expiresIn:'12h'})
//     res.cookie('jwt',token,{httpOnly:true}) Only Backend can access

//     Front and back can access
//     res.cookie('jwt',token,{httpOnly:true}) 
//      next()
// }else {
//      res.send({msg:'The username or password did not match'})
// }
 
//  app.post('/login/', auth,(req,res) => {

// res.send({msg:"You have created an account"})
// })
// })


//  app.post('/login',(req,res)=>}{
//  const {username} = req.body
//  const token = jwt.sign({username:username},process.env.SECRET_KEY,{expiresIn:'12h'})
 
// Remove cookie Backend only
// app.delete('/logout',(req,res)=>{
//     res.clearCookie()
//     res.send({
//         msg: 'You have logged out.'
//     })
// })

// })

// Import functions inside your controller

// Declare the instance of your app ?Instance
// const app

// Decare your app to use .json to store data as Json data??

// Run get to get your initial data to display


// Post allows use to make changes to our data ?Commit changes? 


// Delete allows ypu delete records or columns from the data remove data

// Make note of the prams ,req.body,res.send, async and wait, 


// .listens allows your app/server to be hosted 

// Server calls the queries with the use of the async functions
// Generate a random String
// type node in a terminal followed by require ('crypto').randomBytes (64).toString('hex')