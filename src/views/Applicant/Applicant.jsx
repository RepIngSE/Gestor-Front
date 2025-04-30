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
            <Route path="/" element={<Navigate to = "/applicant/principalTask"></Navigate>}></Route>
            <Route path="/principalTask" element={<DashPrincipal></DashPrincipal>}></Route>
            <Route path="/describeTask/:param" element={<DescribeTask></DescribeTask>}></Route>
            </Routes>
        </div>
    )
}

export default  Applicant
