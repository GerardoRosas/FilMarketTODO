import React, { useState } from 'react';
import Task from './Task';
import NewTask from './NewTask';
import {useTracker} from 'meteor/react-meteor-data';
import { TasksCollection } from '../../api/TaskCollection';

import { Grid } from '@material-ui/core';

const TaskHandler = () => {

    const tasks = useTracker(() => TasksCollection.find({}).fetch());

    const [ deletetask, handleDeleteTask ] = useState(false);
    

    return ( 
        <Grid container direction="column" className="taskHanlderContainer">
            <Grid item>
                <h3 className="welcome">Welcome to your dashboard</h3>
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