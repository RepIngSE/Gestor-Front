import './DashPrincipal.css'
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const DashPrincipal = ()=>{

    const [Tasks, setTask] = useState([{'id':1, 'Id_Status':'Pending', 'Cantidad': '2'}, {'id':2, 'Id_Status':'In Progress', 'Cantidad': '4'}, {'id':3, 'Id_Status':'New Task', 'Cantidad': '5'}, {'id':4, 'Id_Status':'Finish Task', 'Cantidad': '6'}]);

    const Navigate = useNavigate();

    const taskSelected = (view) =>{
        Navigate(view)
    }

    return(
        <div className= 'dashPrincipal'>
            <div className="rec newTask">
                <div className='dashTaskHeader'>
                    <label className='tittleTask'> New Task </label>
                        <div className='cantTask cantTaskNew'>
                            <label className='numTask'> {Tasks.find(task => task.Id_Status === 'New Task')?.Cantidad || '#'} </label>
                        </div>
                </div>
                <div className='dashTaskBody'>
                    <div className='textCard textCardNew'>
                        <label className='textTask'> En esta sección podrás acceder a un resumen claro, ordenado y actualizado de las nuevas tareas que han sido asignadas a tu área. Esto te permitirá identificar fácilmente las actividades pendientes y gestionar tu carga laboral de forma más eficiente y organizada. </label>
                    </div>
                </div>
                <div className = 'footerCard'>
                    <button onClick={()=>{taskSelected('/adminArea/describeTask/New')}} 
                        className = 'btnEnter cantTaskNew hoverNew'> Enter </button>
                </div>
            </div>
            <div className="rec pendingTask">
            <div className='dashTaskHeader'>
                    <label className='tittleTask'> Pending Task </label>
                        <div className='cantTask cantTaskPending'>
                            <label className='numTask'> {Tasks.find(task => task.Id_Status === 'Pending')?.Cantidad || '#'} </label>
                        </div>
                </div>
                <div className='dashTaskBody'>
                    <div className='textCard textCardPending' >
                        <label className='textTask'> En esta sección encontrarás todas las tareas que han sido asignadas pero aún no han comenzado. Aquí podrás revisar cuáles son las actividades pendientes de inicio, lo que te permitirá planificar con anticipación, establecer prioridades y organizar tu tiempo de manera más efectiva. </label>
                    </div>
                </div>
                <div className = 'footerCard'>
                    <button onClick={()=>{taskSelected('/adminArea/describeTask/Pending')}} 
                        className = 'btnEnter cantTaskPending hoverPending'> Enter </button>
                </div>

            </div>
            <div className="rec progressTask">
                <div className='dashTaskHeader'>
                    <label className='tittleTask'> Progress Task </label>
                        <div className='cantTask cantTaskProgress'>
                            <label className='numTask'> {Tasks.find(task => task.Id_Status === 'In Progress')?.Cantidad || '#'} </label>
                        </div>
                </div>
                <div className='dashTaskBody'>
                    <div className='textCard textCardProgress'>
                        <label className='textTask'> Esta sección muestra las tareas que ya están en ejecución. Te permite hacer seguimiento al avance de cada actividad, verificar quién está trabajando en qué y asegurar que el flujo de trabajo se mantenga activo y enfocado en los objetivos establecidos. </label>
                    </div>
                </div>
                <div className = 'footerCard'>
                    <button  onClick={()=>{taskSelected('/adminArea/describeTask/Progress')}} 
                        className = 'btnEnter cantTaskProgress hoverProgress'> Enter </button>
                </div>
            </div>
            <div className="rec finishTask">
            <div className='dashTaskHeader'>
                    <label className='tittleTask'> Finish Task </label>
                        <div className='cantTask cantTaskFinish'>
                            <label className='numTask'> {Tasks.find(task => task.Id_Status === 'Finish Task')?.Cantidad || '#'} </label>
                        </div>
                </div>
                <div className='dashTaskBody'>
                    <div className='textCard textCardFinish'>
                        <label className='textTask'> Aquí se agrupan todas las tareas que ya han sido completadas. Esta sección te ofrece un registro claro del trabajo realizado, útil para realizar reportes, evaluar el desempeño y mantener un historial de cumplimiento dentro de tu área. </label>
                    </div>
                </div>
                <div className = 'footerCard'>
                    <button  onClick={()=>{taskSelected('/adminArea/describeTask/Finish')}} 
                        className = 'btnEnter cantTaskFinish hoverFinish' > Enter </button>
                </div>
            </div>
        </div>
    )
}

export default DashPrincipal