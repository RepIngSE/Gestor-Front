import React, { useState } from 'react';

const AddUserForm = ({ onClose }) => {
  const [form, setForm] = useState({ document: '', names: '', email: '', phone: '', area: '', rol: '' });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = () => {
    // Aquí va tu lógica para enviar al backend
    console.log('Adding user:', form);
    onClose();
  };

  return (
    <div className="modal">
      <h3>Add User</h3>
      {['document', 'names', 'email', 'phone', 'area', 'rol'].map((field) => (
        <input key={field} name={field} placeholder={field} onChange={handleChange} />
      ))}
      <button onClick={handleSubmit}>Add</button>
      <button onClick={onClose}>Exit</button>
    </div>
  );
};

export default AddUserForm;
