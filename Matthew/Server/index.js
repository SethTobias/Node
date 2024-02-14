// In your client folder the frontend

// Declare your local host as baseURL can also have the other part of the path attached to the abaseURL

// In our state: {
//dataName: null
// }

// In our mutation
// muntationName(state??,payloadName) {
// state.dataName = payloadName
// }


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
// 
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
//       console.log(req.data)
//     },
//     async display({commit}){
//       let {data} = await axios.get(baseUrl+'/mates')
//       console.log(data);
//       commit('setMates',data)
//     },
// 
//     async addMate({commit},newMate){ 
//     await axios.post(baseUrl+'/mates',newMate)
//     window.location.reload() ???
//     }
//     async delMate({commit},name){ 
//     await axios.delete(baseUrl+'/mates/'+name)
//     window.location.reload() ???
//     }
//     async editMate({commit},update){ 
//     await axios.delete(baseUrl+'/mates/'+update.id ,update)
//     window.location.reload() ???
//     }
// 
// 
// 
//     },
//   },
//   modules: {
//   }
// })