import React from 'react';

const DeleteUserModal = ({ user, onClose }) => {
  const handleDelete = () => {
    // lógica para eliminar usuario
    console.log('Deleting:', user);
    onClose();
  };

  return (
    <div className="modal">
      <h3>Delete User</h3>
      <p>Are you sure you want to delete {user.names}?</p>
      <button onClick={handleDelete}>Yes</button>
      <button onClick={onClose}>Not</button>
    </div>
  );
};

export default DeleteUserModal;
