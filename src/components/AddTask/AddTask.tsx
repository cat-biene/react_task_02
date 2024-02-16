import React, { ChangeEvent, useState } from 'react'
import s from "./style.module.css"

type FormData = {
    id: string,
    name: string,
    completed: boolean
};

export default function AddTask() {

    const [task, setTask] = useState<FormData>({ id: "", name: "", completed: false});

    const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setTask({
            ...task,
            [name]: value
        })
    }

    return (
        <div className={s.form}>
            <input value ={task.id} type="text" name='id' onChange={changeHandler} />
            <input value ={task.name} type="text" name='task' onChange={changeHandler} />
            <input type="text" name='task' onChange={changeHandler} />
            <button onClick={}>ADD</button>
        </div>
    )
}

