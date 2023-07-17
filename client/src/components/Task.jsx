import Box from './Box.jsx'

function Task() {
    let task;

    const handleClick = () => {
        var task = document.getElementById("task").value;
        console.log(task);
        fetch("http://localhost:3001/todos" ,{
            method : "POST",
            body : JSON.stringify({
                text : task
            }),
            headers :{
                "Content-Type" : "application/json"
            }
        }).then((resp)=>[
            resp.json().then((data)=>{
                task = data;
            })
        ])
    }; 

    return(
        <div>
            <div>
                 <input type="text" id="task" placeholder="Enter your task"/>
                 <button onClick={handleClick}>send data</button>
            </div>
            <div>
                
            </div>
        </div>
    );
}

export default Task;