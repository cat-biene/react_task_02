import { useState } from "react";
import AddTask from "./components/AddTask/AddTask";
import TaskManager from "./components/TaskManagerList/TaskManagerList";
import { Task } from "./components/types/Task";

function App() {

  const defaultTasks: Task[] = [
    { id: 1, name: "Complete project proposal"},
    { id: 2, name: "Prepare presentation slides"},
    { id: 3, name: "Review project requirements"},
    { id: 4, name: "Schedule meeting with team"},
    { id: 5, name: "Send progress report to manager"}
];

const[tasks, setTasks] = useState<Task[]>(defaultTasks);

const handlers = {deleteTask, toggleTaskStatus, addTask};

const deleteTask = (value: number): void => setTasks(tasks.filter(({id}) => id !== value));

const toggleTaskStatus = (value:number, mark:number):void=> {
  const target:Task | undefined = tasks.find(({id}) => id === value);
  target && (target. = []);
  setTasks([...tasks]);  
}

const addTask = (value:number, completed: boolean):void=> {
  const target:Task | undefined = tasks.find(({id}) => id === value);
  target && target.completed.push();
  setTasks([...tasks]);  
} 

  return (
    <div>
      <AddTask/>
      <TaskManager tasks={tasks} {...handlers}/>
    </div>
  );
}

export default App;

