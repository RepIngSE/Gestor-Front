import "../../../styles/Principal.css";
import { useContext, useState } from 'react';
import { CreateTaskApi } from "../../../Services/Api_FormTaskCreate";
import { getProfileApi } from "../../../Services/Api_Profile";
import SessionContext from "../../../SessionContext";

const FormTask =  () => {
    const [titleTask, setTaskname] = useState('');
    const [describeTask, setTaskDescribe] = useState('');
    const [priorityTask, setTaskPriority] = useState('');
    const [areaTask, setTaskArea] = useState('');
    const { document } = useContext(SessionContext)
    
    //Guardar la informacion 
    const CreateTask = async () => {
        try {
            event.preventDefault(); 
            console.log("se llama?", document);
            
            const data = await getProfileApi(document);
            console.log(data.ID);
            
            
            await CreateTaskApi( {
                NAME: titleTask,
                DESCRIPTION: describeTask,
                PRIORITY: priorityTask,
                ID_USER: data.ID,
                ID_STATUS: 3,
                AREA: areaTask
            });

            setTaskname('');
            setTaskDescribe('');
            setTaskPriority('');
            setTaskArea('');
        } catch (error) {
            console.error('Error al Crar tarea:', error);
            alert('❌ Error al actualizar la tarea');
        }
    };
    
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
                            <option className='selectOption' value="2"> Information Technology </option>
                            <option className='selectOption' value="3"> Customer Service </option>
                        </select>
 
                    </div>

                    <button className = 'buttonCreate' onClick={CreateTask} > Create task </button> 
                </form>
            </div> 
        </div>
    )
}

export default FormTask; 