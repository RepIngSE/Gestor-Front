import '../../styles/AdminArea.css'
import MenuBar from "../Components/MenuBar/MenuBar.jsx"
import DescribeTask from "../Components/Describe_Task/DescribeTask.jsx"
import DashPrincipal from "../Components/Dash_Task/DashPrincipal.jsx"
import User from '../User/User.jsx'
import Profile from '../User/Profile.jsx'
import { Navigate, Route, Routes } from "react-router-dom"

const AdminCompany = ()=>{

    return(
        <div className="containerDashPrAdArea">
            <MenuBar></MenuBar>
            <Routes>
            <Route path="/" element={<Navigate to = "/adminCompany/principalTask"></Navigate>}></Route>
            <Route path="/principalTask" element={<DashPrincipal vista = "/adminCompany/describeTask"></DashPrincipal>}></Route>
            <Route path="/manageArea" element={<DashPrincipal vista = "/adminCompany/describeTaskCompany"></DashPrincipal>}></Route>
            <Route path="/manageUser" element={<User></User>}></Route>
            <Route path="/describeTask/:param" element={<DescribeTask typeview = "Dash Principal"></DescribeTask>}></Route>
            <Route path="/describeTaskCompany/:param" element={<DescribeTask typeview = "Manage Area"></DescribeTask>}></Route>
            <Route path ="/profile" element ={<Profile></Profile>}></Route>  
            </Routes>
        </div>
    )
}

export default  AdminCompany
