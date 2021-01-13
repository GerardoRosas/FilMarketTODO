import React, { useState } from 'react';

import { TasksCollection } from '../../api/TaskCollection';


const Task = ({task}) => {


    const {text, _id, completed} = task;

    const [ done, setDone ] = useState(false);
    const [ deleted, setDeleted ] = useState(false);


    //Marcar como completadas
    const taskChecked = (e) => {

        const taskSelected = document.querySelector('#task');
        
        if(!done){
            taskSelected.classList.add('checkTask');
            setDone(false);
        }else{
            taskSelected.classList.remove('checkTask');
            setDone(true);
        }
        
       
    }


    //Eliminar tareas
    const deleteTask = async (id) => {

        await TasksCollection.remove({ _id: id }, 1);
    }




    return (  
        <div className="taskItem">
            <li id="task" onClick={taskChecked}>{text}</li>

            <span className="xItem" onClick={() => deleteTask(_id)}>X</span>
        </div>
        
        
    );
}
 
export default Task;