import axios from "axios";

const baseUrl = import.meta.env.VITE_API_URL;

export const createProjectAPI = async (projectData) => {
    const response = await axios.post(`${baseUrl}/projects/create`, projectData, {
        withCredentials: true
    });
    return response.data;
}

export const getAllProjectsAPI = async () => {
    const response = await axios.get(`${baseUrl}/projects`)
    return response.data;
}

export const getProjectAPI = async (slug) => {
    const response = await axios.get(`${baseUrl}/projects/${slug}`, {
        withCredentials: true
    })
    return response.data;
}

export const updateProjectAPI = async (slug, projectData) => {
    const response = await axios.put(`${baseUrl}/projects/edit-project/${slug}`, projectData, {
        withCredentials: true
    })
    return response.data;
}