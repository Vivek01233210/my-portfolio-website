import { useEffect, useState } from 'react';
import user from '../../assets/user12.jpg';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function HeroSection() {
    const roles = ['Full Stack', 'MERN Stack', 'Backend', 'Frontend'];
    const [roleIndex, setRoleIndex] = useState(0);
    const [role, setRole] = useState(roles[0]);
    const [animation, setAnimation] = useState('animate-enter');

    useEffect(() => {
        const interval = setInterval(() => {
            setAnimation('animate-exit');
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    const handleAnimationEnd = () => {
        if (animation === 'animate-exit') {
            setRoleIndex(prevIndex => {
                const newIndex = prevIndex + 1 === roles.length ? 0 : prevIndex + 1;
                // Immediately update role based on the new index
                setRole(roles[newIndex]);
                return newIndex;
            });
            setAnimation('animate-enter');
        }
    };

    return (
        <section className="mx:24 py-12 px-8 md:py-16 lg:px-24 xl:px-32 flex items-center justify-center gap-4 md:gap-8 lg:gap-12 flex-wrap">
            <div className='flex items-center justify-center'>
                <img src={user} alt="user"
                    className='w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full object-cover shadow-2xl bw'
                />
            </div>
            <div className='flex flex-col items-center p-4 mt-8 md:mt-0'>
                <span className='text-gray-500'>Hello I&apos;m</span>
                <h1 className='text-3xl sm:text-4xl font-semibold'>Vivek Kumar</h1>
                <p className='flex gap-2'>
                    <span className={`my-2 text-gray-700 text-md sm:text-xl ${animation}`} onAnimationEnd={handleAnimationEnd}>
                        {role}
                    </span>
                    <span className='my-2 text-gray-700 text-md sm:text-xl'>Developer</span>
                </p>
                <a
                    href="Vivek_Resume.pdf"
                    target='_blank'
                    // download='Vivek_Resume.pdf'
                    className='mt-3 py-2 px-4 border-2 border-black rounded-full hover:bg-black hover:text-white transition-all cursor-pointer'>
                    Download CV
                </a>
                <div className='mt-4 flex gap-4 md:gap-6'>
                    <Link
                        to='https://www.linkedin.com/in/vivek-kumar-503699247'
                        target='_blank'
                        className='h-10 mt-3 px-4 border-2 border-black rounded-full hover:bg-black hover:text-white transition-all flex items-center justify-center gap-2'>
                        <FaLinkedin className='w-6 h-6 cursor-pointer' />
                        LinkedIn
                    </Link>
                    <Link
                        to='https://github.com/Vivek01233210'
                        target='_blank'
                        className='h-10 mt-3 px-4 border-2 border-black rounded-full hover:bg-black hover:text-white transition-all flex items-center justify-center gap-2'>
                        <FaGithub className='w-6 h-6 cursor-pointer' />
                        GitHub
                    </Link>
                </div>
            </div>
        </section>
    )
}