import React from 'react';
import s from "./style.module.css";
import TaskManagerItem from '../TaskManagerItem/TaskManagerItem';
import { Task } from '../types/Task';

type Props = {
  tasks: Task[],
  deleteTask: Function,
  toggleTaskStatus: Function,
  addTask: Function
};

export default function TaskManager({tasks, deleteTask, toggleTaskStatus, addTask}: Props) {
  
  const handlers = {deleteTask, toggleTaskStatus, addTask};
  return (
    <div className={s.tasks}>
      {
        tasks.map((task) => 
        <TaskManagerItem key={task.id}
        {...task}
        {...handlers}/>)
      }
    </div>
  )
}

