import { API_URL } from "./api_url";

export const getProfileApi = async (documento) => {
  const res = await fetch(`${API_URL}/user/view/${documento}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!res.ok) {
    throw new Error('No se pudo obtener el perfil');
  }

  return await res.json();
};
