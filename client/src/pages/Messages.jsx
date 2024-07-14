import { useQuery } from "@tanstack/react-query";
import { getMessagesAPI } from "../APIServices/messageAPI.js";
import { formatDate } from "../utils/formatDate.js";

export default function Messages() {
    const { data: messages, isLoading } = useQuery({
        queryKey: ["get-messages"],
        queryFn: getMessagesAPI,
    });

    return (
        <section className="pb-12 pt-28 px-2 lg:px-12 lg:mx-20">
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-6 text-center text-black">User Messages</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white">
                        <thead>
                            <tr>
                                <th className="py-2 px-4 border-b border-gray-300 text-left text-sm font-medium text-gray-700">Sr No.</th>
                                <th className="py-2 px-4 border-b border-gray-300 text-left text-sm font-medium text-gray-700">Name</th>
                                <th className="py-2 px-4 border-b border-gray-300 text-left text-sm font-medium text-gray-700">Email</th>
                                <th className="py-2 px-4 border-b border-gray-300 text-left text-sm font-medium text-gray-700">Message</th>
                                <th className="py-2 px-4 border-b border-gray-300 text-left text-sm font-medium text-gray-700">Time</th>
                            </tr>
                        </thead>
                        {isLoading && (
                            <tbody>
                                <tr>
                                    <td colSpan="5" className="py-2 px-4 border-b border-gray-300 text-sm text-gray-700 text-center">Loading...</td>
                                </tr>
                            </tbody>
                        )}
                        <tbody>
                            {messages?.length === 0 && (
                                <tr>
                                    <td colSpan="5" className="py-2 px-4 border-b border-gray-300 text-sm text-gray-700 text-center">No messages found</td>
                                </tr>
                            )}
                            {messages?.map((msg, index) => (
                                <tr key={msg._id} className="hover:bg-gray-100">
                                    <td className="py-2 px-4 border-b border-gray-300 text-sm text-gray-700">{index + 1}</td>
                                    <td className="py-2 px-4 border-b border-gray-300 text-sm text-gray-700">{msg.name}</td>
                                    <td className="py-2 px-4 border-b border-gray-300 text-sm text-gray-700">{msg.email}</td>
                                    <td className="py-2 px-4 border-b border-gray-300 text-sm text-gray-700">{msg.message}</td>
                                    <td className="py-2 px-4 border-b border-gray-300 text-sm text-gray-700">{formatDate(msg.createdAt)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}