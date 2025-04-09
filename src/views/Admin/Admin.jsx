import '../../styles/admin.css';
import { useState, useEffect } from 'react';

const Admin = () => {
  const [users, setUsers] = useState([{'id':1, 'name':'Juan'}, {'id':2, 'name':'Camila'}]);

  useEffect(() => {
    // Fetch users from an API or database
    fetch('/api/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  const handleDelete = (userId) => {
    // Delete user logic
    fetch(`/api/users/${userId}`, { method: 'DELETE' })
      .then(() => {
        setUsers(users.filter(user => user.id !== userId));
      })
      .catch(error => console.error('Error deleting user:', error));
  };

  return (
    <div className='adminContainer'>
      <h1>User Administration</h1>
      <div className='userList'>
        {users.map(user => (
          <div key={user.id} className='userItem'>
            <span>{user.name}</span>
            <button onClick={() => handleDelete(user.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admin;