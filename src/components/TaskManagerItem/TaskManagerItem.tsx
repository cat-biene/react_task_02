import React from 'react';
import { Task } from '../types/Task';
import s from "./style.module.css";

type Props = Task & {}

export default function TaskManagerItem({id, name}: Props) {
  return (
    <div className={s.item}>
         <p>id: {id}</p>
         <p>task: {name}</p>
         <button>change</button>
         <button>delete task</button>
    </div>
  )
}

