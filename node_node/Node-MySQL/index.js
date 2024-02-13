import express from "express";
import { config } from "dotenv";
config();
import cors from "cors";
import friendsRouter from "./routes/friends.js"
const PORT = process.env.PORT;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));
// Static to be used last
app.use('/friends',friendsRouter)





// app.get("/friends", async (req, res) => {
//   res.send(await getFriends());
// });

// app.delete("/friends/delete/:id", async (req,res) => {
//     const  id = +req.params.id;
//     const remove = await removeFriend(id);
//     res.send(remove);
// });

// app.post("/friends/add", async (req, res) => {
//   const { name, age } = req.body;
//   const post = await addFriend(name, age);
//   res.send(post);
// });

// // app.post("/friends/add", async (req,res)=>{
// //     const name = req.body.name
// // })

// app.patch('/friends/:id', async(req,res)=>{
//     const friend = await getFriend (+req.params.id);
//     let {name,age} = req.body;
//     name ? name=name: {name}=friend;
//     age ? age=age: {age}=friend
// })

app.listen(PORT, () => {
  console.log(`This server is running at Port: http://localhost:${PORT}`);
});
