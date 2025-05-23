import "../../../styles/Principal.css";
import { useState } from 'react';

const FormTask =  () => {
    const [titleTask, setTaskname] = useState('');
    const [describeTask, setTaskDescribe] = useState('');
    const [priorityTask, setTaskPriority] = useState('');
    const [areaTask, setTaskArea] = useState('');
    return(
        <div className='applicantForm'> 
            <div className='containerHome container3'>
                <h1 className = 'createForm'> Create Task </h1>
                <form className = 'formPrincipalTask'>
                    <label className = 'textoFormulario'> Title Task </label>
                    <input 
                        className="formularioInput" 
                        type = 'text' 
                        value={titleTask} 
                        onChange={(e) => setTaskname(e.target.value)}
                    ></input>

                    <label className = 'textoFormulario'> Description </label>
                    <textarea 
                        className="formularioText"
                        value={describeTask} 
                        onChange={(e) => setTaskDescribe(e.target.value)}>
                    </textarea>

                    <div className = 'selectPrincipalForm'> 
          
                        <label className = 'textoFormulario'> Priority </label>
                        <select className = 'selectForm' value={priorityTask} onChange={(e) => setTaskPriority(Number(e.target.value))}> 
                            <option className='selectOption' value="1"> 1 </option>
                            <option className='selectOption' value="2"> 2 </option>
                            <option className='selectOption' value="3"> 3 </option>
                        </select>                  

                        <label className = 'textoFormulario'> Área of requirements </label>
                        <select className = 'selectForm'  value={areaTask} onChange={(e) => setTaskArea(Number(e.target.value))}> 
                            <option className='selectOption' value="1"> General Management </option>
                        </select>
 
                    </div>

                    <button className = 'buttonCreate' type='submit' > Create task </button> 
                </form>
            </div> 
        </div>
    )
}

export default FormTask; 