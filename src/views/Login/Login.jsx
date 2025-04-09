import '../../styles/Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () =>{

    const Navigate = useNavigate();
    const inicio = async (Event) => {
        Event.preventDefault() 
        Navigate ("/home") 
    } 

    return(
        
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
              
                    <form className= 'formLogin1' onSubmit={inicio}>
                        
                        <h1 className="welcome">¡Login!</h1>
                        <div className='Icon'>
                            <label className= 'lbInput'> <i className="fa-solid fa-circle-user colorIcon"></i>  </label>
                            <input className="loginInt" type="text" placeholder='User'  />
                        </div>
                        
                        <div className='Icon'>
                            <label className= 'lbInput'> <i className="fa-solid fa-lock colorIcon"></i>  </label>
                            <input className="loginInt" type="password" placeholder='Password'/>
                        </div>
                        
                        <div className='Icon'>
                            <button className='buttonI' type = 'submit'>ingresar</button> 
                        </div>

                    </form>

                    <div className= 'formLogin2'></div>
                
            </div>
        </div>
    )
}

export default Login;