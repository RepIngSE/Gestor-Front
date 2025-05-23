import './DescribeTask.css';
import { useState, useContext } from 'react';
import SessionContext from '../../../SessionContext';

const CardTask = (props)=>{

    const {type, name, descrip, priority, typeview} = props; 

    const [isVisible, setisVisible] = useState(false)
    const changeVisible =() =>{setisVisible(!isVisible)}

    const {rol} = useContext(SessionContext); 
    const PrermisosView = {
        "Dash Principal": ['Assign_New','Save_New','Employee_Assign_New','Employee_Assign_Pend','Start_Task','Employee_Assign_Pro','Initial_Date_Pro','Finish_Task','Employee_Assign_Fin','Initial_Date_Fin','Final_Date_Fin'],
        "Manage Area": ['Area_Assign_New','Area_Assign_Pend','Employee_Assign_Pend','Area_Assign_Pro','Employee_Assign_Pro','Initial_Date_Pro'],
        "tres": ['Employee_Assign_Pend','Area_Assign_Pend','Employee_Assign_Pro','Initial_Date_Pro']
    };

    // Permisos por rol
    const permisosPorRol = {
        1: ['Assign_New','Save_New','Employee_Assign_Pend','Employee_Assign_Pro','Initial_Date_Pro','Area_Assign_Pro','Employee_Assign_Fin','Initial_Date_Fin','Final_Date_Fin'],
        2: ['Assign_New','Area_Assign_Pro','Save_New','Area_Assign_New','Initial_Date_Pro','Area_Assign_Pend','Employee_Assign_Pend','Start_Task','Employee_Assign_Pro','Initial_Date_Pro','Finish_Task','Employee_Assign_Fin','Initial_Date_Fin','Final_Date_Fin'],
        3: ['Employee_Assign_Pend','Area_Assign_Pend','Employee_Assign_Pro','Initial_Date_Pro'],
        4: ['Employee_Assign_Pend','Start_Task','Employee_Assign_Pro','Initial_Date_Pro','Finish_Task','Employee_Assign_Fin','Initial_Date_Fin','Final_Date_Fin']
    };

    const canView = (section) => permisosPorRol[rol]?.includes(section) && PrermisosView[typeview]?.includes(section);


    return(
        <div className = {`recTask ${type == 'New' && 'recTaskNew'} ${type == 'Pending' && 'recTaskPending'} ${type == 'Progress' && 'recTaskProgress'} ${type == 'Finish' && 'recTaskFinish'}`}>
            <div className = {`recPriority ${type == 'New' && 'recColorNew'} ${type == 'Pending' && 'recColorPending'} ${type == 'Progress' && 'recColorProgress'} ${type == 'Finish' && 'recColorFinish'}`}>
                {priority}
            </div>
            <div className = 'recDescribe'>
                <div className = 'taskHeader'> 
                    <label className = 'textDescriptionCard titTask'> {name} </label>
                    <label className = 'textDescriptionCard typeTask'> {type} Task </label>
                </div>
                <div className = 'taskBody'>
                    <label> {descrip}</label>
                </div>
                    {/*Except Applicant / Troubleshooter - Etiqueta New */}
                    {type == 'New' &&
                        <div className = 'taskFooter'> 
                            {canView('Assign_New') && <button className = 'btnTask recColorNew'> Assign </button> } 
                            {canView('Save_New') && <button className = 'btnTask recColorNew' onClick={changeVisible}> Save </button> } 
                            {canView('Area_Assign_New') && <button className = 'btnTask recColorNew'> Area in charge </button>}
                    </div>}

                    {type == 'Pending' &&
                        <div className = 'taskFooter'> 
                            {canView('Employee_Assign_Pend') && <button className = 'btnTask recColorPending'> Employee in charge </button> } 
                            {canView('Start_Task') && <button className = 'btnTask recColorPending'> Start </button>}
                            {canView('Area_Assign_Pend') && <button className = 'btnTask recColorPending'> Area in charge </button>}
                    </div>}

                    {type == 'Progress' &&
                        <div className = 'taskFooter'> 
                            {canView('Employee_Assign_Pro') && <button className = 'btnTask recColorProgress'> Employee in charge </button>}
                            {canView('Initial_Date_Pro') && <button className = 'btnTask recColorProgress'> Initial Date </button>}
                            {canView('Finish_Task') && <button className = 'btnTask recColorProgress'> Finish </button>}
                            {canView('Area_Assign_Pro') && <button className = 'btnTask recColorPending'> Area in charge </button>}
                    </div>}

                    {type == 'Finish' &&
                        <div className = 'taskFooter'> 
                            <button className = 'btnTask recColorFinish'> Employee in charge </button> 
                            <button className = 'btnTask recColorFinish'> Initial Date </button> 
                            <button className = 'btnTask recColorFinish'> Final Date </button> 
                    </div>}
            </div>
        <div className = {isVisible?'Available':'notAvailable'}>
            <div className = 'recFormNotification'>
                <div className = 'NotificationHeader'>
                    <label> New Task </label>
                </div>
                    <textarea className = 'NotificationBody'> Comment.. </textarea>
                <div className = 'NotificationFooter'>
                    <button className = 'btnNotification' onClick = {changeVisible}> Notify </button>
                </div>
            </div>
        </div>
        </div>
    )
}

export default CardTask
