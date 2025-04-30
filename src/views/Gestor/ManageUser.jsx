import React, { useState } from 'react';
import AddUserForm from './AddUserForm';
import UpdateUserForm from './UpdateUserForm';
import DeleteUserModal from './DeleteUserModal';

const ManageUser = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [mode, setMode] = useState(null); // "add", "edit", "delete"

  const handleAdd = () => setMode("add");
  const handleEdit = (user) => { setSelectedUser(user); setMode("edit"); };
  const handleDelete = (user) => { setSelectedUser(user); setMode("delete"); };

  return (
    <div>
      <h2>Users</h2>
      <button onClick={handleAdd}>Add User</button>
      <table>
        <thead>
          <tr>
            <th>Document</th><th>Names</th><th>Email</th><th>Phone</th><th>Area</th><th>Rol</th><th>Update</th><th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.document}</td><td>{user.names}</td><td>{user.email}</td><td>{user.phone}</td>
              <td>{user.area}</td><td>{user.rol}</td>
              <td><button onClick={() => handleEdit(user)}>Edit</button></td>
              <td><button onClick={() => handleDelete(user)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>

      {mode === "add" && <AddUserForm onClose={() => setMode(null)} />}
      {mode === "edit" && <UpdateUserForm user={selectedUser} onClose={() => setMode(null)} />}
      {mode === "delete" && <DeleteUserModal user={selectedUser} onClose={() => setMode(null)} />}
    </div>
  );
};

export default ManageUser;