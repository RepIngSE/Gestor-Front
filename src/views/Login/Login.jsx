import '../../styles/Login.css';
import { useNavigate } from 'react-router-dom';
import SessionContext from '../../SessionContext';
import { useContext, useState } from 'react';
import { loginApi } from '../../Services/login';

const Login = () => {
    const navigate = useNavigate();

    // Sesión por rol 
    const { login } = useContext(SessionContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const inicio = async (event) => {
      event.preventDefault();
  
      try {
        const userData = await loginApi(username, password); //no necesitas .json()
        console.log("Respuesta del backend:", userData);
        // Validar si el login fue exitoso
        if (userData) {

          login(userData); // Guarda la sesión
          
          // Navega según el rol
          if (userData.role === 1) {
            navigate('/adminArea/principalTask');
          } else if (userData.role === 2) {
            navigate('/adminArea/principalTask');
          } else if (userData.role === 3) {
            navigate('/dashboardApplicant');
          } else if (userData.role === 4) {
            navigate('/adminArea/principalTask');
          } else {
            navigate('/home');
          }
        } else {
            alert('Datos incorrectos');
        }
      } catch (error) {
        console.error('Error al autenticar:', error);
        alert('Ocurrió un error al intentar ingresar');
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