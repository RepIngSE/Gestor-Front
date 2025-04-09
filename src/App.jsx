import Login from'./views/Login/Login.jsx'
import { Navigate, Route, Routes } from "react-router-dom"
import Principal from'./views/Panel_Principal/Principal.jsx'
import Gestor from './views/Gestor/Gestor.jsx'
import Admin from './views/Admin/Admin.jsx'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login"></Navigate>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/home" element={<Principal></Principal>}></Route>
      <Route path="/gestor" element={<Gestor></Gestor>}></Route>
      <Route path="/admin" element={<Admin></Admin>}></Route>
    </Routes>
  )
}

export default App
