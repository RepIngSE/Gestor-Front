import './MenuBar.css'
import React, { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import SessionContext from '../../../SessionContext';

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

    const {role} = useContext(SessionContext); 

    // Permisos por rol
    const permisosPorRol = {
        1: ['Dashboard Principal', 'Create Task', 'Profile', 'Log Out'],
        2: ['Dashboard Principal', 'Manage Area', 'Manage User', 'Profile', 'Log Out'],
        3: ['Task Pending', 'Task In Progress', 'Task Complete', 'Profile', 'Log Out','Dashboard Principal'],
        4: ['Dashboard Principal', 'Profile', 'Log Out']
    };

    const ruta_definida = {
        1: "/adminArea",
        2: "/adminCompany",
        3: "/dashboardApplicant",
        4: "/troubleshooter"    
    }

    const canView = (section) => permisosPorRol[role]?.includes(section);

    return(
        <div className={isOpen?'MenuContainerLateralOpen':'MenuContainerLateralClose'}>
            <div className='Menu_container_1'>
                <button onClick={toggleMenu} className={isOpen?"btn_menu_ha_open":"btn_menu_ha_close"}>
                    <i className="fa-solid fa-bars fa-xl Icons_menu_bar"></i>
                </button>
            </div>
            <div className='Menu_container_2'>
            {canView('Dashboard Principal') && <button onClick={()=>{opcSelected(1,ruta_definida[role]+"/principalTask")}} 
                        className={`btn_menu ${isOpen ? "btn_menu_ha_opc_open" : "btn_menu_ha_opc_close"} ${Selected == 1 ? "Selected" : ""}`}>
                    <i className="fa-regular fa-chart-bar fa-xl Icons_menu_bar"></i>
                    {isOpen?<label>Dashboard principal</label>:''}
                </button>}
                {canView('Create Task') && <button onClick={()=>{opcSelected(2,ruta_definida[role]+'/createTask')}} 
                        className={`btn_menu ${isOpen ? "btn_menu_ha_opc_open" : "btn_menu_ha_opc_close"} ${Selected == 2 ? "Selected" : ""}`}>
                    <i className="fa-regular fa-file-lines fa-xl Icons_menu_bar"></i>
                    {isOpen?<label>Create task</label>:''}
                </button>}
                {canView('Manage Area') && <button onClick={()=>{opcSelected(3,ruta_definida[role]+'/manageArea')}} 
                        className={`btn_menu ${isOpen ? "btn_menu_ha_opc_open" : "btn_menu_ha_opc_close"} ${Selected == 3 ? "Selected" : ""}`}>
                    <i className="fa-regular fa-user fa-xl Icons_menu_bar"></i>
                    {isOpen?<label>Manage Area</label>:''}
                </button>}
                {canView('Manage User') && <button onClick={()=>{opcSelected(4,ruta_definida[role]+'/manageUser')}} 
                        className={`btn_menu ${isOpen ? "btn_menu_ha_opc_open" : "btn_menu_ha_opc_close"} ${Selected == 4 ? "Selected" : ""}`}>
                    <i className="fa-regular fa-user fa-xl Icons_menu_bar"></i>
                    {isOpen?<label>Manage User</label>:''}
                </button>}
                {canView('Task Pending') && <button onClick={()=>{opcSelected(5,ruta_definida[role]+'/describeTask/Pending')}} 
                        className={`btn_menu ${isOpen ? "btn_menu_ha_opc_open" : "btn_menu_ha_opc_close"} ${Selected == 5 ? "Selected" : ""}`}>
                    <i className="fa-regular fa-user fa-xl Icons_menu_bar"></i>
                    {isOpen?<label>Task Pending</label>:''}
                </button>}
                {canView('Task In Progress') && <button onClick={()=>{opcSelected(6,ruta_definida[role]+'/describeTask/Progress')}} 
                        className={`btn_menu ${isOpen ? "btn_menu_ha_opc_open" : "btn_menu_ha_opc_close"} ${Selected == 6 ? "Selected" : ""}`}>
                    <i className="fa-regular fa-user fa-xl Icons_menu_bar"></i>
                    {isOpen?<label>Task In Progress</label>:''}
                </button>}
                {canView('Task Complete') && <button onClick={()=>{opcSelected(7,ruta_definida[role]+'/describeTask/Finish')}} 
                        className={`btn_menu ${isOpen ? "btn_menu_ha_opc_open" : "btn_menu_ha_opc_close"} ${Selected == 7 ? "Selected" : ""}`}>
                    <i className="fa-regular fa-user fa-xl Icons_menu_bar"></i>
                    {isOpen?<label>Task Complete</label>:''}
                </button>}
                {canView('Profile') && <button onClick={()=>{opcSelected(8,ruta_definida[role]+'/principalTask')}} 
                        className={`btn_menu ${isOpen ? "btn_menu_ha_opc_open" : "btn_menu_ha_opc_close"} ${Selected == 8 ? "Selected" : ""}`}>
                    <i className="fa-regular fa-user fa-xl Icons_menu_bar"></i>
                    {isOpen?<label>Profile</label>:''}
                </button>}
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