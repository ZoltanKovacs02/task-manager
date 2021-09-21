function DeleteTask ([id,tasks, setTasks]){
    setTasks(tasks.filter((task) => task.id !== id));
}
export default DeleteTask;