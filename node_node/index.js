import express from "express";
import { config } from "dotenv";
config();
const app = express();
app.use(express.json());
// Request sent it will load this specific page anf be able to see the paths for the data
app.use(express.static('public'))
const PORT = process.env.PORT || 2701;

let array = [
    {id: 1, name: 'Stitch' , birthYear:  2004, age:  5},
    {id: 2, name: 'Rain'},
    {id: 3, name: 'Seth'}
]
let array2 = [
    {id: 3, name: 'Seth'},
    {id: 1, name: 'Stitch' , birthYear:  2004, age:new Date().getFullYear()},
    {id: 2, name: 'Rain'}
]
let array3 = [
    {id: 2, name: 'Rain'},
    {id: 3, name: 'Seth'},
    {id: 1, name: 'Stitch' , birthYear:  2004, age: new Date().getFullYear()}
]

app.get('/array', (req, res) => {
    const message = `Hello World! I am a Node.js Express server running in ${process.cwd()}. Port Number  is ${PORT}`;
        console.log(message);
        res.send(array);
     });

     const generateUniqueId = () => array.length + 1;

     app.post('/array/add', (req,res) => {
        // created an object
        let item = {
        // Id that won't repeat
        id: generateUniqueId(),
        // requesting the name from the user
        name: req.body.name,
        // (req get data from user name what we want them to input)
    };
        array.push(item);
        // 
        res.send(item);
    });

    // 
    app.delete('/array/delete/:id', (req,res) => {
        // 
        let item = array.findIndex(i => i.id === +req.params.id);
        // 
        if (!item){
        // 
        array.splice(item,1)
        // 
        array.forEach((item, index) => {item.id = index + 1;} );
        // 

        res.send(array);
    }})
    


app.listen(
    // 
    PORT, () => console.log(`Server is running on Port: ${PORT}. At server address http://localhost:${PORT}.`)
);


// let array1 = [];
// 
// const addObjects = (...objects) => {objects.forEach(data => {    const newObject = {id: generateUniqueId(),...data,};
// array.push(newObject); 
// });
// };
// const removeObjectById = (id) => {array = array.filter(obj => obj.id !== id);  
// // Update IDs after removing an object 
// array.forEach((obj, index) => {obj.id = index + 1;
//     });    
// };
// // Adding multiple objects at once
// addObjects({ name: 'Seth', age: 25, city: 'Example City' }, { name: 'Stitch', age: 30, city: 'Another City' },  { name: 'Jy', age: 28, city: 'City XYZ' });console.log(array);

// // Removing an object (example: remove object with ID 2)
// removeObjectById(2);console.log(array);