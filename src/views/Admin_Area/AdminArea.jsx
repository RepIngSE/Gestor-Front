import '../../styles/AdminArea.css'
import MenuBar from "../Components/MenuBar/MenuBar.jsx"
import NewTask from "../Components/New_Task/NewTask.jsx"
import DashPrincipal from "../Components/Dash_Task/DashPrincipal.jsx"
import { Navigate, Route, Routes } from "react-router-dom"

const AdminArea = ()=>{

    return(
        <div className="containerDashPrAdArea">
            <MenuBar></MenuBar>
            <Routes>
            <Route path="/" element={<Navigate to = "/adminArea/principalTask"></Navigate>}></Route>
            <Route path="/principalTask" element={<DashPrincipal></DashPrincipal>}></Route>
            <Route path="/newTask" element={<NewTask></NewTask>}></Route>
            </Routes>
        </div>
    )
}

export default AdminArea