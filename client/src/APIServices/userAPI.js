import axios from "axios";

const baseUrl = import.meta.env.VITE_API_URL;

export const loginAPI = async (userData) => {
    const response = await axios.post(`${baseUrl}/login`, {
        username: userData?.username,
        password: userData?.password,
    }, {
        withCredentials: true
    });

    return response.data;
}