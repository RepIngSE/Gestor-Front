import "../../../styles/Principal.css";

const FormTask =  () => {
    return(
        <div className='applicantForm'> 
            <div className='containerHome container3'>
                <h1 className = 'createForm'> Create Task </h1>
                <form className = 'formPrincipalTask'>
                    <label className = 'textoFormulario'> Title Task </label>
                    <input className="formularioInput" type = 'text' ></input>

                    <label className = 'textoFormulario'> Description </label>
                    <textarea className="formularioText"></textarea>

                    <div className = 'selectPrincipalForm'> 
          
                        <label className = 'textoFormulario'> Priority </label>
                        <select className = 'selectForm'> 
                            <option className='selectOption' value="1"> 1 </option>
                            <option className='selectOption' value="2"> 2 </option>
                            <option className='selectOption' value="3"> 3 </option>
                        </select>                   

                        <label className = 'textoFormulario'> Área of requirements </label>
                        <select className = 'selectForm'> 
                            <option className='selectOption' value="General Management"> General Management </option>
                        </select>
 
                    </div>

                    <button className = 'buttonCreate' type='submit' > Create task </button> 
                </form>
            </div> 
        </div>
    )
}

export default FormTask; 