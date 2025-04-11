import './MenuBar.css'
import React, { useState } from "react";

const MenuBar = ()=>{
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    return(
        <div className={isOpen?'MenuContainerLateralOpen':'MenuContainerLateralClose'}>
            <button onClick={toggleMenu} className={isOpen?"btn_menu_ha_open":"btn_menu_ha_close"}>
            <i className="fa-solid fa-bars fa-2xl Icons_menu_bar"></i>
            </button>
        </div>
    )
}

export default MenuBar