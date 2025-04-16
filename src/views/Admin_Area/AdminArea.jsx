import '../../styles/AdminArea.css'
import MenuBar from "../Components/MenuBar/MenuBar.jsx"
import DescribeTask from "../Components/Describe_Task/DescribeTask.jsx"
import DashPrincipal from "../Components/Dash_Task/DashPrincipal.jsx"
import FormTask from '../Components/Form_Task/FormTask.jsx'
import { Navigate, Route, Routes } from "react-router-dom"

const AdminArea = ()=>{

    return(
        <div className="containerDashPrAdArea">
            <MenuBar></MenuBar>
            <Routes>
            <Route path="/" element={<Navigate to = "/adminArea/principalTask"></Navigate>}></Route>
            <Route path="/principalTask" element={<DashPrincipal></DashPrincipal>}></Route>
            <Route path="/describeTask/:param" element={<DescribeTask></DescribeTask>}></Route>
            <Route path="/createTask" element={<FormTask></FormTask>}></Route>
            </Routes>
        </div>
    )
}

export default AdminArea