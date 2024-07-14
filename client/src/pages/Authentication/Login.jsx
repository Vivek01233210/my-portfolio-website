import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { loginAPI } from '../../APIServices/userAPI.js';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { isAuthenticated } from '../../redux/slices/authSlice.js';

export default function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [userData, setUserData] = useState({ email: 'vivek3553.vk@gmail.com', password: 'vivek@admin@3553.vk' });

    const loginMutation = useMutation({
        mutationKey: ["login"],
        mutationFn: loginAPI,
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        loginMutation
            .mutateAsync(userData)
            .then((data) => dispatch(isAuthenticated(data)))
            .then(() => navigate("/"))
            .catch((err) => console.log(err.response.data.error));
    };

    const { isPending, error, isError } = loginMutation;

    return (
        <section className="md:pt-16 px-6 mb-4 flex items-center justify-center min-h-screen">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
                <h2 className="text-2xl font-bold text-center">Admin Login</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email:
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={userData.email}
                            onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                            required
                            className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-stone-300"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password:
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={userData.password}
                            onChange={(e) => setUserData({ ...userData, password: e.target.value })}
                            required
                            className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-stone-300"
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={isPending}
                        className="w-full px-4 py-2 font-semibold text-white bg-black rounded-md hover:bg-white hover:text-black border-2 border-black focus:outline-none focus:ring focus:ring-stone-300"
                    >
                        {isPending ? 'Logging in...' : 'Login'}
                    </button>
                    {isError && <div className="text-center">{error?.response?.data?.error}</div>}
                </form>
            </div>
        </section>);
}