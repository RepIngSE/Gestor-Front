import './DescribeTask.css';
import {useParams} from "react-router-dom";
import CardTask from './Card';
import { useState, useEffect } from 'react';

const DescribeTask = ()=>{

    const [Tasks, setUsers] = useState([{'id':1, 'Name':'Create User', 'Description': 'Create the user Manuel', 'Priority': 1, 'Id_Status': 'New Task'}, {'id':5, 'Name':'Create User', 'Description': 'Create the user Camilo', 'Priority': 2, 'Id_Status': 'New Task'}, {'id':2, 'Name':'Installing Python', 'Description': 'Install python for the user David', 'Priority': 2, 'Id_Status': 'Pending'}, {'id':3, 'Name':'Chamge computer', 'Description': 'Chanqe equipment for the user Camilo', 'Priority': 3, 'Id_Status': 'In Progress'}, {'id':4, 'Name':'Access for SQL Server', 'Description': 'Access to SQL for Juan', 'Priority': 1, 'Id_Status': 'Finish Task'}]);

    const paramMap = {
        'New': 'New Task', 
        'Pending': 'Pending',
        'Progress': 'In Progress', 
        'Finish': 'Finish Task'
    }; 
    const { param } = useParams()
    const idStatus = paramMap[param];
    const describeTask = Tasks.filter(task => task.Id_Status === idStatus)
    return(
        <div className = 'describeTask'>
            {
                describeTask.map (task => (<CardTask type = {param} name = {task.Name} descrip = {task.Description} priority = {task.Priority} typeview = {"Dash Principal"} ></CardTask>))
            }
        </div>
    )
}

export default DescribeTask