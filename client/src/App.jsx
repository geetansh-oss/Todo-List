import './App.css';
import Task from './components/Task.jsx';
import Box from './components/Box.jsx'

function App() {

  function x() {
    fetch("http://localhost:3001/todos", {
      method : "Get"
    }).then((res)=>{
       res.json().then((data)=>{
          console.log(data)
       })
    })
  }
  x();

  return (
    <div>
      <h1>This is TodoList</h1>
      <br></br>
      <div>
         <Task/>
      </div>
      <br></br>
      <div>
         <Box/>
      </div>
    </div>
  );
}

export default App;
