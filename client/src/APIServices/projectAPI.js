import axios from "axios";

const baseUrl = import.meta.env.VITE_API_URL;

export const getAllProjects = async () => {
    const response = await axios.get(`${baseUrl}/projects`)
    return response.data;
}

export const getProjectAPI = async (slug) => {
    const response = await axios.get(`${baseUrl}/projects/${slug}`, {
        withCredentials: true
    })
    return response.data;
}