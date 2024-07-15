import { FaGithub, FaLinkedin } from 'react-icons/fa';
import user from '../assets/user12.jpg';
import { Link } from 'react-router-dom';
import { MdEmail } from "react-icons/md";

export default function Contact() {
    return (
        <section className="pt-20 mb-8 flex flex-col items-center justify-center min-h-screen">
            {/* <h1 className="text-2xl font-semibold my-4">Contact</h1> */}
            <div className="max-w-md w-full bg-white text-black rounded-lg shadow-xl p-8">
                <div className="flex flex-col items-center">
                    <img src={user} className='w-24 h-24 rounded-full object-cover shadow-2xl bw' alt="vivek-image" />
                    <h2 className="text-2xl font-bold">Vivek Kumar</h2>
                    <p className="text-gray-700 mb-4">Fullstack Web-developer</p>
                    <div className="w-full">
                        <div className="flex items-center mb-4">
                            <MdEmail className="w-6 h-6 text-gray-700 mr-2" />
                            <a href="mailto:vivek3553.vk@gmail.com" className="text-gray-700 hover:underline">
                                vivek3553.vk@gmail.com
                            </a>
                        </div>
                        <div className="flex items-center mb-4">
                            <svg
                                className="w-6 h-6 text-gray-700 mr-2"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27 11.36 11.36 0 004.25.81 1 1 0 011 1v3.5a1 1 0 01-1 1A19 19 0 013 5a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.81 4.25 1 1 0 01-.27 1.11l-2.2 2.2z" />
                            </svg>
                            <a href="tel:+7258838790" className="text-gray-700">
                                +91 7258838790
                            </a>
                        </div>
                        <div className='flex items-center mb-4'>
                            <FaLinkedin className='w-6 h-6 mr-2 text-gray-700' />
                            <Link
                                to='https://www.linkedin.com/in/vivek-kumar-503699247'
                                target='_blank'
                                className='hover:underline'
                            >
                                LinkedIn
                            </Link>
                        </div>
                        <div className='flex items-center mb-4'>
                            <FaGithub className='w-6 h-6 mr-2 text-gray-700' />
                            <Link
                                to='https://github.com/Vivek01233210'
                                target='_blank'
                                className='hover:underline'
                            >
                                GitHub
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}