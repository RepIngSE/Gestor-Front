import './DescribeTask.css';
import { useState, useContext } from 'react';
import SessionContext from '../../../SessionContext';
import { updateTaskApi, getUsersForRol } from '../../../Services/Apis_Cards';

const CardTask = (props)=>{

    const {type, name, descrip, priority, typeview} = props; 
    const [titulo, settitulo] = useState('')
    const { role, document } = useContext(SessionContext);
    const [isVisible, setisVisible, showAssign, setShowAssign] = useState(false)
    const changeVisible =(permiso) =>{
        if (notify_rol[role]?.includes(permiso)) {
            settitulo(permiso)
        setisVisible(!isVisible);
    }
    
    }


    datos_users = [
        {'id':1, 'name' :  'nombre 1'},
        {'id':2, 'name' :  'nombre 2'},
        {'id':3, 'name' :  'nombre 3'}
    ]
    
     // Mostrar el selector y cargar usuarios
    const assignClick = async () => {
        setShowAssign((prev) => !prev);

        if (!showAssign) {
        try {
            const userList = await getUsersForRol(document); // Cambia 2 por el rol que necesites
            setUsers(userList);
        } catch (err) {
            console.error('Error al cargar usuarios:', err);
        }
        }
    };

    //Guardar la informacion 
    const UpdateSave = async () => {
        if (!selectedUser) {
            alert('Selecciona un usuario');
            return;
        }

        try {
            await updateTaskApi(id, {
                USER_IN_CHARGE: selectedUser,
                ID_STATUS: 1, // o el estado que corresponda
            });
            alert('✅ Tarea actualizada correctamente');
            setShowAssign(false);
        } catch (error) {
            console.error('Error al actualizar tarea:', error);
            alert('❌ Error al actualizar la tarea');
        }
    };

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

    const notify_rol = {
        1:['New Task','salir'],
        2:['New Task','salir', 'Progress Task','Finish Task'],
        3:['salir'],
        4:['salir','Progress Task','Finish Task']
    }

    const canView = (section) => permisosPorRol[role]?.includes(section) && PrermisosView[typeview]?.includes(section);


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
<<<<<<< HEAD
                            {canView('Assign_New') && <select className = 'btnTask recColorNew'> 
                                <option value="">Assing</option>
                                    {datos_users.map((user) => (<option key={user.id} value={user.id}>{user.name}</option>))}
                                </select> } 
=======
                            {canView('Assign_New') && <select className = 'btnTask recColorNew'> <option value=""> Assign </option> </select> } 
>>>>>>> d74a47c74d1be524d8d23c38ce7fd140c647cdda
                            {canView('Save_New') && <button className = 'btnTask recColorNew' onClick={()=>changeVisible('New Task')}> Save </button> } 
                            {canView('Area_Assign_New') && <button className = 'btnTask recColorNew'> Area in charge </button>}
                    </div>}

                    {type == 'Pending' &&
                        <div className = 'taskFooter'> 
                            {canView('Employee_Assign_Pend') && <button className = 'btnTask recColorPending'> Employee in charge </button> } 
                            {canView('Start_Task') && <button className = 'btnTask recColorPending' onClick={()=>changeVisible('Progress Task')}> Start </button>}
                            {canView('Area_Assign_Pend') && <button className = 'btnTask recColorPending'> Area in charge </button>}
                    </div>}

                    {type == 'Progress' &&
                        <div className = 'taskFooter'> 
                            {canView('Employee_Assign_Pro') && <button className = 'btnTask recColorProgress'> Employee in charge </button>}
                            {canView('Initial_Date_Pro') && <button className = 'btnTask recColorProgress'> Initial Date </button>}
                            {canView('Finish_Task') && <button className = 'btnTask recColorProgress' onClick={()=>changeVisible('Finish Task')}> Finish </button>}
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
                    <label> {titulo} </label>
                </div>
                    <textarea className = 'NotificationBody' value="Comment.." readOnly />
                <div className = 'NotificationFooter'>
                    <button className = 'btnNotification' onClick = {()=>changeVisible('salir')}> Notify </button>
                </div>
            </div>
        </div>
        </div>
    )
}

export default CardTask
