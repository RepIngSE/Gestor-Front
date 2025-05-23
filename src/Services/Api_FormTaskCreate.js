import { API_URL } from "./api_url";

// Servicio para actualizar una tarea
export const CreateTaskApi = async (createdData) => {
  const res = await fetch(`${API_URL}/task/create`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(createdData),
  });

  if (!res.ok) {
    throw new Error('Error al actualizar la tarea');
  }

  return await res.json();
};
