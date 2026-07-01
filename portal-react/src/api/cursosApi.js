import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "https://jsonplaceholder.typicode.com";

export const obtenerCursos = async () => {
    try {
        const { data } = await axios.get(`${API_URL}/posts?_limit=6`);
        return data.map(item => ({
            id: item.id,
            titulo: item.title,
            descripcion: item.body
        }));
    } catch (error) {
        throw new Error("Error al obtener el catálogo de cursos");
    }
};

export const obtenerCursoPorId = async (id) => {
    try {
        const { data } = await axios.get(`${API_URL}/posts/${id}`);
        return {
            id: data.id,
            titulo: data.title,
            descripcion: data.body
        };
    } catch (error) {
        throw new Error("Error al obtener el detalle del curso");
    }
};