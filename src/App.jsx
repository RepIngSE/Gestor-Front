import Login from './views/Login/Login.jsx';
import { Navigate, Route, Routes } from "react-router-dom";
import Principal from './views/Panel_Principal/Principal.jsx';
import Gestor from './views/Gestor/Gestor.jsx';
import Admin from './views/Admin/Admin.jsx';
import AdminArea from './views/Admin_Area/AdminArea.jsx';
import ManageUser from './views/Gestor/ManageUser.jsx';
import AddUserForm from './views/Gestor/AddUserForm.jsx';
import UpdateUserForm from './views/Gestor/UpdateUserForm.jsx';
import DeleteUserModal from './views/Gestor/DeleteUserModal.jsx';
import Profile from './views/Gestor/Profile.jsx';
import ApplicantDashboard from './views/Gestor/ApplicantDashboard.jsx';
import AdminCompany from './views/Admin_Company/AdminCompany.jsx'
import Applicant from './views/Applicant/Applicant.jsx'
import Troubleshooter from './views/Troubleshooter/Troubleshooter.jsx'


function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login"></Navigate>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/home" element={<Principal></Principal>}></Route>
      <Route path="/gestor" element={<Gestor></Gestor>}></Route>
      <Route path="/admin" element={<Admin></Admin>}></Route>
      <Route path="/adminArea/*" element={<AdminArea></AdminArea>}></Route>
      <Route path="/gestor/manageUser" element={<ManageUser></ManageUser>}></Route>
      <Route path="/gestor/addUser" element={<AddUserForm></AddUserForm>}></Route>
      <Route path="/gestor/updateUser" element={<UpdateUserForm></UpdateUserForm>}></Route>
      <Route path="/gestor/deleteUser" element={<DeleteUserModal></DeleteUserModal>}></Route>
      <Route path="/gestor/profile" element={<Profile></Profile>}></Route>
      <Route path="/gestor/applicantDashboard" element={<ApplicantDashboard></ApplicantDashboard>}></Route>
      <Route path ="/adminArea/*" element ={<AdminArea></AdminArea>}></Route>
      <Route path ="/adminCompany/*" element ={<AdminCompany></AdminCompany>}></Route>
      <Route path ="/applicant/*" element ={<Applicant></Applicant>}></Route>
      <Route path ="/troubleshooter/*" element ={<Troubleshooter></Troubleshooter>}></Route>

    </Routes>
  );
}

export default App;
