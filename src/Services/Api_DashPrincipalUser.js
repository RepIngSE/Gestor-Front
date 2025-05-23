import { API_URL } from "./api_url";

export async function DashPrincipalApiUser(document) {
  try {
        const res = await fetch(`${API_URL}/task/user/${(document)}/status-summary`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
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
