import { API_URL } from "./api_url";

export async function loginApi(username,password) {
  try {
        const res = await fetch(`${API_URL}/login/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'EMAIL': username,
                'PASSWORD': password
            })
        });

        // Puedes manejar aquí si la respuesta no fue exitosa
        if (!res.ok) {
            throw new Error(`Error ${res.status}: ${res.statusText}`);
        }

        // Suponiendo que la API responde en JSON
        const data = await res.json();
        return data;
    } catch (error) {
        console.error('Error autenticando:', error);
        throw error;
    }
}
