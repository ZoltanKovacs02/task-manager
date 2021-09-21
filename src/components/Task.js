import { BsTrash } from "react-icons/bs";
import { useState } from "react";


function Task({ task, onTglStatus, onDeleteTask, onEditTask }) {
    const [desc, setDesc] = useState("");
    const [date, setDate] = useState("");


    const [showTaskEdit, setShowTaskEdit] = useState(false);
    const EditTask = (e) => {
        onEditTask({ id: task.id, desc: desc, date: date, status: task.status });


    };

    return (

        <div className="card text-left" key={task.id}>
            <div className="row">
                <div className="col-10">
                    <h4>{task.desc}</h4>
                    <div className="task-meta">
                        <img
                            src="https://icongr.am/feather/calendar.svg?size=12&color=b5b5b5"
                            alt="calendar"
                        />
                        {task.date}
                    </div>
                </div>

                <div className="col-2 is-center">
                    <button className="button icon-only clear" onClick={() => onTglStatus(task)}>
                        {task.complete && "✅"}
                        {!task.complete && "⬜"}
                    </button>
                </div>
                <div className="col-2 is-center">
                    <button className="button icon-only clear" onClick={() => onDeleteTask(task.id)}>
                        <BsTrash />                   </button>
                </div>
                <div className="col-2 is-center">

                    <button className="button icon-only clear" onClick={() => setShowTaskEdit(!showTaskEdit)}>

                        {!showTaskEdit && "Edit"}
                        {showTaskEdit && "Hide edit "}
                    </button>
                </div>


            </div>
            {showTaskEdit && <div>

                <input
                    type="text"
                    name="desc"
                    id={task.id}
                    value={desc}
                    placeholder={task.desc}

                    onChange={(e) => setDesc(e.target.value)}
                />
                <input
                    type="date"
                    name="desc"
                    id={task.id}
                    value={date}
                    placeholder={task.date}

                    onChange={(e) => setDate(e.target.value)}
                />
                <button className="button icon-only clear" onClick={() => EditTask()}>
                    Save                  </button>
            </div>}


        </div>
    );
}

export default Task;
