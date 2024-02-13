import express from "express";
import { config } from "dotenv";
import cors from "cors";
import exerciseRouter from "./Routes/exercise.js"


const app = express();
app.use(express.json());
app.use(cors());

config();

app.use('/form',exerciseRouter)


app.get("/Infos", async (req, res) => {
  res.send(await getInfos());
});

const frontendData = {
    message: 'Hello from the server!',
    mainData: getInfos(),
};

app.get('/api/data', (req, res) => {
    res.json(frontendData);
});

app.delete("/Infos/delete/:id", async (req,res) => {
    const  id = +req.params.id;
    const remove = await removeInfo(id);
    res.send(remove);
});

app.post("/Infos/add", async (req, res) => {
  const { name, age } = req.body;
  const post = await addInfo(name, age);
  res.send(post);
});

// // app.post("/Infos/add", async (req,res)=>{
// //     const name = req.body.name
// // })

// app.patch('/Infos/:id', async(req,res)=>{
//     const Info = await getInfo (+req.params.id);
//     let {name,age} = req.body;
//     name ? name=name: {name}=Info;
//     age ? age=age: {age}=Info
// })



const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`This server is running at Port: http://localhost:${PORT}`);
  });