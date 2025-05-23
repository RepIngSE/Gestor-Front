import '../../styles/AdminArea.css'
import MenuBar from "../Components/MenuBar/MenuBar.jsx"
import DescribeTask from "../Components/Describe_Task/DescribeTask.jsx"
import DashPrincipal from "../Components/Dash_Task/DashPrincipal.jsx"
import { Navigate, Route, Routes } from "react-router-dom"

const Applicant = ()=>{

    return(
        <div className="containerDashPrAdArea">
            <MenuBar></MenuBar>
            <Routes>
            <Route path="/" element={<Navigate to = "/dashboardApplicant/principalTask"></Navigate>}></Route>
            <Route path="/principalTask" element={<DashPrincipal vista = "/dashboardApplicant/describeTask"></DashPrincipal>}></Route>
            <Route path="/describeTask/:param" element={<DescribeTask typeview = "tres"></DescribeTask>}></Route>
            </Routes>
        </div>
    )
}

export default  Applicant
