// 
import express from 'express';
import {config} from 'dotenv';
import cors from 'cors';

// 
config()
const app = express();
app.use(express.json())
app.use(cors());

app.get('/',(req,res)=>{
    res.send({message: "Awe dog I work"})
})

// 
const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log('http://localhost:' + PORT);
});