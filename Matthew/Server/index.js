// In your client folder the frontend
// Import axios
// axios.defaults.withCredentials = true
// Install vue3-cookies
// Declare your local host as baseURL can also have the other part of the path attached to the abaseURL

// In our state: {
//dataName: null
// }
// Declare dotenv and call config
// In our mutation
// muntationName(state??,payloadName) {
// state.dataName = payloadName
// }
// 
// setLogged(state,payload) {
// state.loggedIn = payload
// }
// 

// Call your functions using async functionName from server.js {commit}/context. into your actions fromm your backend server
// Destructure the Json data = await axios.get(baseURL+'/friends')
// Make sure to call data properly
// after defining your data: commit ('mutationName',data 'Payload:has data' )

// Axios method matches server methods remember to add the path

// actual code
// import { createStore } from 'vuex'
// import axios from 'axios'
// // this is the backend url
// const baseUrl = 'http://localhost:2701'
// export default createStore({
//   state: {
//     mates:[],
//     newMate: {},
//     loggedIn: false,
// 
//   },
//   getters: {
//   },
//   mutations: {
//     setMates:(state,data) => {
//       state.mates = data
//     },
//      newMate: (state,data) => {
//     state.mate = data
//         }
// 
// 
// 
// 
// 
//   },
//   actions: {
//     // login({commit},data){
//     //   axios.post(baseUrl+'/login',data)
//     //   .then(res => {
//     //     console.log(res.data)
//     //   })
//     // }
//     async login({commit},data){
//       let req = await axios.post(baseUrl+'/login',data)
//          commit('setLogged',true)
//         alert() 
//       console.log(req.data)
//     },
//  async logout (context) {
//  let cookies = $cookies.keys()
//  $cookies.remove('jwt')
//  window.location.reload()
// Backend only 
//  let {data} = await axios.delete(baseURL+'/logout')
//  
//} 
//      Retrieving the data from the database
//     async display({commit}){
//       let {data} = await axios.get(baseUrl+'/mates',)
//       console.log(data);
//       commit('setMates',data)
//     },
//      
// 
// 
// 
// 
//      Adding to the database 
//     async addMate({commit},newMate){ 
//     await axios.post(baseUrl+'/mates',newMate)
//     window.location.reload() Window object
//     }
//      Deleting the data
//     async delMate({commit},name){ 
//     await axios.delete(baseUrl+'/mates/'+name)
//     window.location.reload() ???
//     }
//     async editMate({commit},update){ 
//     await axios.delete(baseUrl+'/mates/'+update.id ,update)
//     window.location.reload() ???
//     }
// 
// ??????
//      // Import bcrypt from bcrypt 
// app.post('/users',authenticate, (req,res) => {
// const {username,password} = re1.body
// bcrypt.hash(password,10,async (err,hash)=>{
// if (err) throw err
// await addUser (username,hash)
// res.send({msg:"You have created an account"})
// })
// 
// 
//     },
//   },
//   modules: {
//   }
// })

// jwt.sign(username,private key,expirens in ? )
// Can be defined in the store 7
// 
// jwt.verify (token,)
// 
// const authenticate = (req,res,next)=>{
//
// let {cookie} = req.headers
// let tokenInHeader = cookie && cookie.split('=')[1]  Split Method??
// if(token === null) res.sendStatues(401)
// jwt.verify(tokenInHeader,process.env.SECRET_KEY, (err,user)=>}{
// if(err) return res.sendStatus(403)
// req.user = user
// next()
// })
// let {[cookie]}? = req.headers Mine
// console.log(cookie.jwt?) Mine

// }
// Backend user sets/sends Frontend Deletes
// 