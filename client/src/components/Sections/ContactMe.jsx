import { useRef } from 'react';
import { messageAPI } from '../../APIServices/userAPI.js';
import { useMutation } from '@tanstack/react-query';

export default function ContactMe() {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const messageRef = useRef(null);

    const messageMutation = useMutation({
        mutationKey: ["message"],
        mutationFn: messageAPI,
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const message = messageRef.current.value;

        const clientMessage = { name, email, message };
        console.log(clientMessage)

        messageMutation.mutateAsync(clientMessage)
            .then(() => console.log("Message sent"))
            // .catch(() => console.log("Something went wrong while sending the message. Try again later!"));
            .catch((err) => console.log(err));

        // Clear the form fields
        // nameRef.current.value = '';
        // emailRef.current.value = '';
        // messageRef.current.value = '';
    };

    return (
        <section className='py-12 px-8 sm:px-10 lg:px-12 sm:mx-12 lg:mx-20'>
            <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-6 text-center text-black">Get in Touch</h2>
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            ref={nameRef}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black sm:text-sm"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email*(optional):</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            ref={emailRef}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black sm:text-sm"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Leave your message here:</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            ref={messageRef}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black sm:text-sm"
                            required
                        ></textarea>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full flex justify-center py-2 px-4 border-2 border-black rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-white hover:text-black focus:outline-none focus:ring-2  focus:ring-stone-300"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}