import MenuBar from '../Components/MenuBar/MenuBar';
import '../../styles/Principal.css';
import { useState } from 'react';
import { FiEdit, FiTrash2 } from 'react-icons/fi';

const User = () => {
  const [users, setUsers] = useState([
    { id: 1, document: '1', name: 'Name 1', email: 'Email 1', phone: '# 1', area: 'Area 1', rol: 'Rol 1' },
    { id: 2, document: '2', name: 'Name 2', email: 'Email 2', phone: '# 2', area: 'Area 2', rol: 'Rol 2' },
    { id: 3, document: '3', name: 'Name 3', email: 'Email 3', phone: '# 3', area: 'Area 3', rol: 'Rol 3' },
  ]);

  const [selectedUser, setSelectedUser] = useState(null);

  const handleEdit = (user) => {
    setSelectedUser(user);
  };

  const handleDelete = (id) => {
    const user = users.find((u) => u.id === id);
    if (window.confirm(`Are you sure you want to delete user '${user?.name}'?`)) {
      setUsers(users.filter((user) => user.id !== id));
      if (selectedUser?.id === id) setSelectedUser(null);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedUser({ ...selectedUser, [name]: value });
  };

  const handleUpdate = () => {
    setUsers(users.map((u) => (u.id === selectedUser.id ? selectedUser : u)));
    setSelectedUser(null);
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', width: '100vw' }}>
      <div style={{ height: '100vh' }}>
        <MenuBar />
      </div>
      <div className='user-content' style={{ flex: 1, background: '#f4f6fa', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', padding: 24 }}>
        <div style={{ width: '100%', maxWidth: 1100, background: '#fff', borderRadius: 16, boxShadow: '0 2px 16px rgba(0,0,0,0.07)', padding: 24, display: 'flex', gap: 24 }}>
          {/* Tabla de usuarios */}
          <div style={{ flex: 1, overflowX: 'auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
              <h2 style={{ fontSize: 20 }}>Users</h2>
              <button
                style={{
                  backgroundColor: '#0a3871',
                  color: 'white',
                  border: 'none',
                  borderRadius: 6,
                  padding: '8px 18px',
                  fontWeight: 'bold',
                  fontSize: 16,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8
                }}
                onClick={() => window.location.href = '/user/add'}
              >
                <span style={{ fontSize: 20, fontWeight: 'bold' }}>+</span> Add User
              </button>
            </div>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: '#e9f0fb', color: '#000' }}>
                  {['Document', 'Names', 'Email', 'Phone', 'Area', 'Rol', 'Update', 'Delete'].map((header) => (
                    <th key={header} style={{ padding: 10, border: '1px solid #dee2e6' }}>{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td style={tdStyle}>{user.document}</td>
                    <td style={tdStyle}>{user.name}</td>
                    <td style={tdStyle}>{user.email}</td>
                    <td style={tdStyle}>{user.phone}</td>
                    <td style={tdStyle}>{user.area}</td>
                    <td style={tdStyle}>{user.rol}</td>
                    <td style={tdStyle}>
                      <button onClick={() => handleEdit(user)} style={iconBtnStyle}><FiEdit /></button>
                    </td>
                    <td style={tdStyle}>
                      <button onClick={() => handleDelete(user.id)} style={iconBtnStyle}><FiTrash2 /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Panel de edición */}
          <div style={{ flex: 0.8 }}>
            <h2 style={{ fontSize: 20, marginBottom: 16 }}>User Options</h2>
            {selectedUser ? (
              <form style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {['document', 'name', 'email', 'phone', 'area', 'rol'].map((field) => (
                  <div key={field} style={{ display: 'flex', flexDirection: 'column' }}>
                    <label style={{ fontWeight: 500 }}>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
                    <input
                      type='text'
                      name={field}
                      value={selectedUser[field]}
                      onChange={handleChange}
                      style={{
                        border: '1px solid #0a3871',
                        borderRadius: 4,
                        padding: 8,
                      }}
                    />
                  </div>
                ))}
                <button
                  onClick={handleUpdate}
                  type='button'
                  style={{
                    backgroundColor: '#0a3871',
                    color: 'white',
                    padding: 10,
                    border: 'none',
                    borderRadius: 6,
                    marginTop: 10,
                    fontWeight: 'bold',
                  }}
                >
                  Update User
                </button>
              </form>
            ) : (
              <p>Select a user to update.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const tdStyle = {
  padding: 10,
  border: '1px solid #dee2e6',
  textAlign: 'center',
};

const iconBtnStyle = {
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  fontSize: 18,
  color: '#0a3871',
};

export default User;
