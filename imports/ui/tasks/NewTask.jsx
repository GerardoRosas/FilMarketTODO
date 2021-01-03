import React, { useState } from 'react';

import { TextField } from '@material-ui/core';
import { TasksCollection } from '../../api/TaskCollection';

const NewTaks = () => {
    
    const [task, setTask ] = useState('');

    const onChange = e => {
        setTask(e.target.value)
    }

    const onSubmit = e => {
        e.preventDefault();

        if(!task){
            console.log('Debes agregar una tarea');
        }

        TasksCollection.insert({
            text: task.trim(),
            createdAt: new Date()
        })

        setTask('');

    }


    return (  
        <form className="newTaskForm" onSubmit={onSubmit}>
            <TextField variant="outlined" label="Task" placeholder="Add new task" value={task} name="task" onChange={onChange}/>
 
            <input type="submit" value="Add Task"/>
            
        </form>
    );
}
 
export default NewTaks;
