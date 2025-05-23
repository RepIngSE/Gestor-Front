import { API_URL } from "./api_url";

// Servicio para actualizar una tarea
export const updateTaskApi = async (taskId, updatedData) => {
  const res = await fetch(`${API_URL}/task/update/${taskId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedData),
  });

  if (!res.ok) {
    throw new Error('Error al actualizar la tarea');
  }

  return await res.json();
};

// Servicio para obtener usuarios por rol (si quieres usarlo en la misma card)
export const getUsersForRol = async (document) => {
  const res = await fetch(`${API_URL}/user/area-role4/${document}`,{
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
}); 
  if (!res.ok) {
    throw new Error('Error al obtener usuarios por rol');
  }
  return await res.json();
};
