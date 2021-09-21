import './App.css';
import './assets/style.css';
import { useState } from "react";
import Tasks from './components/Tasks';
import { v4 as uuidv4 } from 'uuid';
function App() {
  const [tasks, setTasks] = useState([
    { desc: "Learn React", id: uuidv4(), date: "2021-01-03", status: "Complete" },
    { desc: "Profit", id: uuidv4(), date: "2021-01-05", status: "Open" },
  ]);
  const onTglStatus = (task) => {
    console.log("completing task");
    setTasks(
      tasks.map((chkTask) => {
        chkTask.complete =
          task.id === chkTask.id ? !chkTask.complete : chkTask.complete;
        return chkTask;
      })
    );
  };
  const onSaveTask = ({ desc, date }) => {
    console.log("saving tasks");
    setTasks([
      { desc: desc, date: date, id: uuidv4(), complete: false },
      ...tasks,
    ]);
  };
  const onDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));

  }
  // const onDeleteTask = (id) => {

  //   DeleteTask([id,tasks, setTasks]);
  // }
  const onEditTask = ({ id, desc, date, status }) => {
    tasks.forEach((item) => {
      if (item.id === id) {
        console.log(item.id)
        item.desc = desc;
        item.status = status;
        item.date = date
      }

    });
    setTasks([...tasks]);

  }
  const isEmpty = (value) => {
    if (value === "")
      return true;
    else
      return false;
  }

  return (
    <div className="App">
      <header>
        <div className="App-title"><h1>Task manager</h1></div>
      </header>
      <div className="container">
        <Tasks tasks={tasks} onTglStatus={onTglStatus} onSaveTask={onSaveTask} onDeleteTask={onDeleteTask} onEditTask={onEditTask}></Tasks>

      </div>
    </div>
  );
}


export default App;
