import React from 'react';
import Task from './Task';
import NewTask from './NewTask';
import {useTracker} from 'meteor/react-meteor-data';
import { TasksCollection } from '../../api/TaskCollection';

import { Grid } from '@material-ui/core';

const TaskHandler = () => {

    const tasks = useTracker(() => TasksCollection.find({}).fetch());
    

    // const tasks = [
    //     {_id: 1, text: 'First task'},
    //     {_id: 2, text: 'Second task'},
    //     {_id: 3, text: 'Third task'}
    // ]

    return ( 
        <Grid container direction="column" className="taskHanlderContainer">
            <Grid item>
                <h3>Welcome to your dashboard</h3>
            </Grid>
            <NewTask />

            <ul>
                {tasks.map(task => <Task key={task.id} task={task}/>)}
            </ul>
        </Grid>
    );
}
 
export default TaskHandler;