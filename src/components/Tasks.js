import Task from "./Task";
import TaskAdd from "./TaskAdd";
import { useState } from "react";


function Tasks({ tasks, onTglStatus,onSaveTask,onDeleteTask,onEditTask }) {
   
    
      const [showTaskAdd, setShowTaskAdd] = useState(false);
    return (
    <div className="row">
      <div className="col-12 text-right">
      <button
          className="button outline"
          onClick={() => setShowTaskAdd(!showTaskAdd)}>
          {!showTaskAdd && "New"}
          {showTaskAdd && "➖"}
        </button>

        {
  showTaskAdd && <TaskAdd task={{}} onSaveTask={onSaveTask} />
}
      </div>
      {tasks.map((task) => (
         <Task task={task} onTglStatus={onTglStatus} onDeleteTask={onDeleteTask} onEditTask={onEditTask} />

      ))}
      <div className="col-12"></div>
    </div>
  );
}

export default Tasks;
