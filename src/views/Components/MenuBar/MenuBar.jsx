import './MenuBar.css'
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const MenuBar = ()=>{
    const [isOpen, setIsOpen] = useState(false);
    const [Selected, setSelected] = useState(1);

    const Navigate = useNavigate();

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    const logOut = () =>{
        Navigate("/") 
    }

    const opcSelected = (opc, view) =>{
        setSelected(opc)
        Navigate(view)
    }

    return(
        <div className={isOpen?'MenuContainerLateralOpen':'MenuContainerLateralClose'}>
            <div className='Menu_container_1'>
                <button onClick={toggleMenu} className={isOpen?"btn_menu_ha_open":"btn_menu_ha_close"}>
                    <i className="fa-solid fa-bars fa-xl Icons_menu_bar"></i>
                </button>
            </div>
            <div className='Menu_container_2'>
                <button onClick={()=>{opcSelected(1,'/dashboardApplicant')}} 
                        className={`btn_menu ${isOpen ? "btn_menu_ha_opc_open" : "btn_menu_ha_opc_close"} ${Selected === 1 ? "Selected" : ""}`}>
                    <i className="fa-solid fa-plus fa-xl Icons_menu_bar"></i>
                    {isOpen?<label>Dashboard Applicant</label>:''}
                </button>
                <button onClick={()=>{opcSelected(2,'/adminArea/createTask')}} 
                        className={`btn_menu ${isOpen ? "btn_menu_ha_opc_open" : "btn_menu_ha_opc_close"} ${Selected === 2 ? "Selected" : ""}`}>
                    <i className="fa-solid fa-file-circle-plus fa-xl Icons_menu_bar"></i>
                    {isOpen?<label>Create Task</label>:''}
                </button>
                <button onClick={()=>{opcSelected(3,'/adminArea/principalTask')}} 
                        className={`btn_menu ${isOpen ? "btn_menu_ha_opc_open" : "btn_menu_ha_opc_close"} ${Selected === 3 ? "Selected" : ""}`}>
                    <i className="fa-regular fa-eye fa-xl Icons_menu_bar"></i>
                    {isOpen?<label>View Tasks</label>:''}
                </button>
                <button onClick={()=>{opcSelected(4,'/user')}} 
                        className={`btn_menu ${isOpen ? "btn_menu_ha_opc_open" : "btn_menu_ha_opc_close"} ${Selected === 4 ? "Selected" : ""}`}>
                    <i className="fa-solid fa-users fa-xl Icons_menu_bar"></i>
                    {isOpen?<label>User</label>:''}
                </button>
                <button onClick={()=>{opcSelected(5,'/user/Profile')}} 
                        className={`btn_menu ${isOpen ? "btn_menu_ha_opc_open" : "btn_menu_ha_opc_close"} ${Selected === 5 ? "Selected" : ""}`}>
                    <i className="fa-regular fa-user fa-xl Icons_menu_bar"></i>
                    {isOpen?<label>Profile</label>:''}
                </button>
            </div>
            <div className='Menu_container_1'>
                <button onClick={logOut} className={isOpen?"btn_menu_ha_open":"btn_menu_ha_close"}>
                    <i className="fa-solid fa-right-from-bracket fa-xl Icons_menu_bar"></i>
                </button>
            </div>
            
        </div>
    )
}

export default MenuBar