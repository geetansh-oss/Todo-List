function Task() {

    const handleClick = () => {
        fetch("http://localhost:3001/todos" ,{
            method : "POST",
            body : JSON.stringify({
                text : "complete assignment"
            }),
            headers :{
                "Content-Type" : "application/json"
            }
        }).then((resp)=>[
            resp.json().then((data)=>{
                console.log(data);
            })
        ])
    }; 

    return(
        <div>
           <input type="text" placeholder="Enter your task"/>
           <button onClick={handleClick}>send data</button>
        </div>
    );
}

export default Task;