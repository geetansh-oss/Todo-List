const express = require ('express');
const mongoose = require('mongoose');
const cors = require ('cors');

const app = express();

app.use(express.json());
app.use(cors());


// database conection
mongoose.connect('mongodb+srv://geet_rh:heliog90t@cluster0.fl6qau1.mongodb.net/',{
    useNewUrlParser: true, useUnifiedTopology: true
}).then(()=>{
    console.log("Server connected to dB")
}).catch(()=>{
    console.error;
});

// Schema for our database
const Schema = new mongoose.Schema({
    text : 
    {
        type : String,
        require: true
    },
    isComplete : Boolean
});

// model
const Task = mongoose.model('Task' , Schema);


// show all the task
app.get('/todos', async (req, res) => {
	const todos = await Task.find();

	res.json(todos);
});

// to get new task
app.post('/todos', (req, res) => {
    let Text = req.body.text;
	const todo = new Task({
		text: Text
	});

	todo.save();
	res.json(todo);
});

// to delete a task
app.delete('/todos/:id', async (req, res) => {
	const result = await Task.findByIdAndDelete(req.params.id);

	res.json({result});
});

app.listen(3001, ()=>{
    console.log("server listening to 3001")
});
