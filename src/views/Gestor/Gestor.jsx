import '../../styles/admin.css';
import { useState, useEffect } from 'react';

const Gestor = () => {
  const [users, setUsers] = useState([{'id':1, 'name':'Juan'}, {'id':2, 'name':'Camila'}]);

  useEffect(() => {
    // Fetch users from an API or database
    fetch('/api/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  const handleEdit = (userId) => {
    // Logic for editing a user
    console.log(`Edit user with ID: ${userId}`);
  };

  const handleAddUser = () => {
    // Logic for adding a new user
    console.log('Add new user');
  };

  return (
    <div className='adminContainer'>
      <h1>User Management</h1>
      <button onClick={handleAddUser} className='addUserButton'>Add User</button>
      <div className='userList'>
        {users.map(user => (
          <div key={user.id} className='userItem'>
            <span>{user.name}</span>
            <button onClick={() => handleEdit(user.id)}>Edit</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gestor;