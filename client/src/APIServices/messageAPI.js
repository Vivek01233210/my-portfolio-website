import axios from "axios";

const baseUrl = import.meta.env.VITE_API_URL;


export const postMessageAPI = async (message) => {
    const response = await axios.post(`${baseUrl}/message`, message);

    return response.data;
}

export const getMessagesAPI = async () => {
    const response = await axios.get(`${baseUrl}/message`,
        { withCredentials: true }
    );

    return response.data;
}