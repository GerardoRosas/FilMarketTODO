import React, { useState } from 'react';
import Task from './Task';
import NewTask from './NewTask';
import {useTracker} from 'meteor/react-meteor-data';
import { TasksCollection } from '../../api/TaskCollection';

import { Grid } from '@material-ui/core';

const TaskHandler = () => {

    const tasks = useTracker(() => TasksCollection.find({}).fetch());

    const [ deletetask, handleDeleteTask ] = useState(false);

    const userName = localStorage.getItem('userName');
    console.log(userName);
    

    return ( 
        <Grid container direction="column" className="taskHanlderContainer">
            <Grid item>
                <h3 className="welcome">Welcome {userName} to your To-Do List 📝 </h3>
            </Grid>

            <NewTask />

            <ul className="ulList">
                {tasks.map(task => 
                    <Task key={task._id} task={task}/>
                )}
            </ul>
        </Grid>
    );
}
 
export default TaskHandler;