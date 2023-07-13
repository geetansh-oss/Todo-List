const express = require ('express');
const cors = require ('cors');
const app = express();

app.use(express.json());
app.use(cors());

let todos = [];

// show all the task
app.get('/todos', (req,res) => {
    res.send(todos);
});

// to get new task
app.post('/todos', (req,res)=>{

    const newTodo = {
        "id" : Math.floor(Math.random() * 1000000),
        "text" : req.body.text
    }
    todos.push(newTodo);
    res.status(200).send(newTodo);
});

// to delete a task

app.delete('/todos/:id', (req,res) =>{
    // const todoIdx = 
    const todoIdx = findIndex(todos, parseInt(req.params.id));
    if(todoIdx === -1){
        res.status(404).send();
    }else{
        todos = removeAtIndex(todos, todoIdx);
        res.status(200).send();
    }
});

app.listen(3001, ()=>{
    console.log("server listening to 3001")
});


function findIndex(arr, id){
    for (let i = 0; i < arr.length; i++) {
        if(arr[i].id === id){
            return i;
        }
    }
    return -1; 
}

function removeAtIndex(arr , index){
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if(i !== index){
            newArr.push(arr[i]);
        }
    } 
    return newArr; 
}