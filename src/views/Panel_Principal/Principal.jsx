import '../../styles/Principal.css';
import { useNavigate } from 'react-router-dom';

const PanelPrincipal = () => {
  const navigate = useNavigate();

  const goToTaskManager = () => {
    navigate('/gestor');
  };

  return (
    <div className='applicant'>
      <div className='containerHome container2'>
        <div className='rectangle-put'></div>
        <h1 className='taskTittle'>Task</h1>
        <div className='circle_one'>
          <div className='circle_two'>
            <img
              className='containerImage'
              src='https://www.grupocibernos.com/hs-fs/hubfs/beesuite/Tareas%20GTD-1.png?width=538&name=Tareas%20GTD-1.png'
              alt='containerImage'
            />
          </div>
        </div>
      </div>
      <div className='containerHome container3'>
        <h1 className='createTask'>Create Task</h1>
        <form className='formPrincipal'>
          <label className='textoFormulario'>Title Task</label>
          <input className='formularioInput' type='text'></input>

          <label className='textoFormulario'>Description</label>
          <textarea className='formularioText'></textarea>

          <div className='selectPrincipal'>
            <label className='textoFormulario'>Priority</label>
            <select className='selectForm'>
              <option className='selectOption' value='1'>
                1
              </option>
              <option className='selectOption' value='2'>
                2
              </option>
              <option className='selectOption' value='3'>
                3
              </option>
            </select>

            <label className='textoFormulario'>Área of requirements</label>
            <select className='selectForm'>
              <option className='selectOption' value='General Management'>
                General Management
              </option>
              <option className='selectOption' value='Information Technology'>
                Information Technology
              </option>
              <option className='selectOption' value='Customer Service'>
                Customer Service
              </option>
            </select>
          </div>

          <button className='buttonCreate' type='submit'>
            Create task
          </button>
        </form>
        <button className='buttonCreate' onClick={goToTaskManager}>
          Go to Task Manager
        </button>
      </div>
    </div>
  );
};

export default PanelPrincipal;