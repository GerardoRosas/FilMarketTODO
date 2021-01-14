import React, { useState } from 'react';

import { TextField, Button, } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { TasksCollection } from '../../api/TaskCollection';

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
      background: 'rgb(44,0,85)',
      color: 'white',
      fontFamily: 'Courier New',
      fontWeight: 'bold'
    },
}));

const NewTaks = () => {

    const classes = useStyles();
    
    const [task, setTask ] = useState('');
    const [ error, setError ] = useState(false);

    const onChange = e => {
        setTask(e.target.value)
    }

    const onSubmit = e => {
        e.preventDefault();

        if(!task){
            setError(true);
            setTimeout(() => {
                setError(false)
            }, 3000 )
            return
        }

        TasksCollection.insert({
            text: task.trim(),
            createdAt: new Date(),
            completed: false
        })

        //Reiniciamos el input
        setTask('');

    }


    return (  
        <form className="newTaskForm" onSubmit={onSubmit}>
            {error ? (
                <div className="error">
                    <p>Ups! 👀 You need to add a task</p>
                </div>
            ): null}
            <TextField variant="outlined" label="New Task" value={task} name="task" onChange={onChange}/>
            
            <Button type="submit" className={classes.button} >Add Task</Button>
            
        </form>
    );
}
 
export default NewTaks;
