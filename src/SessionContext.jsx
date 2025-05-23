import React, { useState, useEffect } from 'react';

const SessionContext = React.createContext();

export const SessionProvider = (props) => {
  const { children } = props;

  // Tomamos los valores del localStorage si existen
  const [isLogedIn, setIsLogedIn] = useState(() => localStorage.getItem('isLogedIn') === 'true');
  const [role, setRol] = useState(() => localStorage.getItem('user_rol') || null);
  const [name, setName] = useState(() => localStorage.getItem('user_name') || '');
  const [lastName, setLastName] = useState(() => localStorage.getItem('user_lastName') || '');
  const [document, setCedula] = useState(() => localStorage.getItem('user_cedula') || '');

  // Establece los valores de los estados al loguearse 
  const login = (data) => {
    setCedula(data.document || '');
    setRol(data.role);
    setName(data.username?.toUpperCase() || '');
    setLastName(data.apellido?.toUpperCase() || '');
    setIsLogedIn(true);
  };

  // Limpia los etsados al cerrar sesión 
  const logout = () => {
    setCedula(null);
    setRol(null);
    setName(null);
    setLastName(null);
    setIsLogedIn(false);
  };

  // Guardamos los valores importantes en localStorage cada vez que cambien
  useEffect(() => {
    if (isLogedIn) {
      localStorage.setItem('isLogedIn', 'true');
    } else {
      localStorage.removeItem('isLogedIn');
    }
    if (role) {
      localStorage.setItem('user_rol', role);
    } else {
      localStorage.removeItem('user_rol');
    }
    if (name) {
      localStorage.setItem('user_name', name);
    } else {
      localStorage.removeItem('user_name');
    }
    if (lastName) {
      localStorage.setItem('user_lastName', lastName);
    } else {
      localStorage.removeItem('user_lastName');
    }
    if (document) {
      localStorage.setItem('user_cedula', document);
    } else {
      localStorage.removeItem('user_cedula');
    }
  }, [isLogedIn, role, name, lastName, document]);

  const sessionContextValue = {
    isLogedIn,
    role,
    document,
    name,
    lastName,
    login,
    logout,
  };

  // Asigno valor del contexto a los componentes que lo necesiten
  return (
    <SessionContext.Provider value={sessionContextValue}>
      {children}
    </SessionContext.Provider>
  );
};

export default SessionContext;

