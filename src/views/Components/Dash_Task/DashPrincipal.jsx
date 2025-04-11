import './DashPrincipal.css'
import React, { useState } from "react";

const DashPrincipal = ()=>{
    return(
        <div className= 'dashPrincipal'>
            <div className="rec newTask">
                <div className='dashTaskHeader'>
                    <label className='tittleTask'> New Task </label>
                        <div className='cantTask'>
                            <label className='numTask'> # </label>
                        </div>
                </div>
                <div className='dashTaskBody'>
                    <div className='textCard'>
                        <label className='textTask'> En este apartado podrás ver las nuevas tareas que se han generado para tu área. </label>
                    </div>
                </div>
                <div>
                    <button> Go </button>
                </div>
            </div>
            <div className="rec pendingTask">
                <label className='tittleTask'> Pending Task </label>
            </div>
            <div className="rec progressTask">
                <label className='tittleTask'> Progress Task </label>
            </div>
            <div className="rec finishTask">
                <label className='tittleTask'> Finish Task </label>
            </div>
        </div>
    )
}

export default DashPrincipal