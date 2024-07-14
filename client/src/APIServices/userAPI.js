import axios from "axios";

const baseUrl = import.meta.env.VITE_API_URL;

export const loginAPI = async (userData) => {
    const response = await axios.post(`${baseUrl}/user/login`, {
        email: userData?.email,
        password: userData?.password,
    }, {
        withCredentials: true
    });

    return response.data;
}

export const logoutAPI = async () => {
    const response = await axios.post(`${baseUrl}/user/logout`, {}, {
        withCredentials: true
    });

    return response.data;
};


export const checkUserAPI = async () => {
    const response = await axios.get(`${baseUrl}/user/check-user`, {
        withCredentials: true
    });

    return response.data;
};

export const messageAPI = async (message) => {
    const response = await axios.post(`${baseUrl}/user/message`, message);

    return response.data;
}