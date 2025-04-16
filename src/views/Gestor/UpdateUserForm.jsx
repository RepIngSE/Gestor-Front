import React, { useState } from 'react';

const UpdateUserForm = ({ user, onClose }) => {
  const [form, setForm] = useState(user);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = () => {
    // Lógica para actualizar al usuario
    console.log('Updating user:', form);
    onClose();
  };

  return (
    <div className="modal">
      <h3>Update User</h3>
      {['document', 'names', 'email', 'phone', 'area', 'rol'].map((field) => (
        <input key={field} name={field} value={form[field]} onChange={handleChange} />
      ))}
      <button onClick={handleSubmit}>Update</button>
      <button onClick={onClose}>Exit</button>
    </div>
  );
};

export default UpdateUserForm;
