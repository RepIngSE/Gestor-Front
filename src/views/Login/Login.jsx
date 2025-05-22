import '../../styles/Login.css';
import { useNavigate } from 'react-router-dom';
import SessionContext from '../../SessionContext';
import { useContext, useState } from 'react';

const Login = () => {
    const navigate = useNavigate();

    // Sesión por rol 
    const { login } = useContext(SessionContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const inicio = async (event) => {
      event.preventDefault();
  
      // Ejemplo Api
      const userData = {
        username: username,
        password: password,
        documento: '123456789',
        apellido: 'Ramírez',
        rol: 4 // Roles 
      };
  
      login(userData); // Guarda la sesión
  
      // Navega según el rol
      if (userData.rol === 1) {
        navigate('/dashboardApplicant');
      } else if (userData.rol === 2) {
        navigate('/dashboardApplicant');
      } else if (userData.rol === 3) {
        navigate('/dashboardApplicant');
      } else if (userData.rol === 4) {
        navigate('/dashboardApplicant');
      } else {
        navigate('/home');
      }
    };
  
    return (
      <div className='principalContainer'>
        <div className="circle one"></div>
        <div className="circle two"></div>
        <div className="circle three"></div>
        <div className="circle four"></div>
        <div className="circle fifth"></div>
        <div className="square one"></div>
  
        <div className='login'>
          <div className="rectangle one"></div>
          <div className="rectangle two"></div>
          <div className="rectangle three"></div>
  
          <form className='formLogin1' onSubmit={inicio}>
            <h1 className="welcome">¡Login!</h1>
            <div className='Icon'>
              <label className='lbInput'>
                <i className="fa-solid fa-circle-user colorIcon"></i>
              </label>
              <input
                className="loginInt"
                type="text"
                placeholder='User'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
  
            <div className='Icon'>
              <label className='lbInput'>
                <i className="fa-solid fa-lock colorIcon"></i>
              </label>
              <input
                className="loginInt"
                type="password"
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
  
            <div className='Icon'>
              <button className='buttonI' type='submit'>ingresar</button>
            </div>
          </form>
  
          <div className='formLogin2'></div>
        </div>
      </div>
    );
  };
  
  export default Login;