import { useState, useEffect } from 'react';
import '../../styles/gestor.css'; // Asegúrate de tener este archivo

const Gestor = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch('/api/tasks')
      .then(response => response.json())
      .then(data => setTasks(data))
      .catch(error => console.error('Error fetching tasks:', error));
  }, []);

  const handleEdit = (taskId) => {
    console.log(`Edit task with ID: ${taskId}`);
  };

  const handleDelete = (taskId) => {
    fetch(`/api/tasks/${taskId}`, { method: 'DELETE' })
      .then(() => {
        setTasks(tasks.filter(task => task.id !== taskId));
      })
      .catch(error => console.error('Error deleting task:', error));
  };

  return (
    <div className="gestor-container">
      <div className="gestor-card">
        <h1 className="gestor-title">Task Manager</h1>
        <div className="gestor-table-wrapper">
          <table className="gestor-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Description</th>
                <th>Priority</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {tasks.length === 0 ? (
                <tr>
                  <td colSpan="5" className="no-tasks">No tasks available</td>
                </tr>
              ) : (
                tasks.map(task => (
                  <tr key={task.id}>
                    <td>{task.id}</td>
                    <td>{task.title}</td>
                    <td>{task.description}</td>
                    <td>
                      <span className={`priority ${task.priority.toLowerCase()}`}>
                        {task.priority}
                      </span>
                    </td>
                    <td>
                      <button className="edit-btn" onClick={() => handleEdit(task.id)}>Edit</button>
                      <button className="delete-btn" onClick={() => handleDelete(task.id)}>Delete</button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Gestor;
