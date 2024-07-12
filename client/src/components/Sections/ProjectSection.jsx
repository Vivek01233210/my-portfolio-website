import bondify1 from '../../assets/Bondify-imgs/img1.png'
import bondify2 from '../../assets/Bondify-imgs/img2.png'
import bondify3 from '../../assets/Bondify-imgs/img3.png'
import bondify4 from '../../assets/Bondify-imgs/img4.png'
import bondify5 from '../../assets/Bondify-imgs/img5.png'
import bondify6 from '../../assets/Bondify-imgs/img6.png'
import bondify7 from '../../assets/Bondify-imgs/img7.png'
import bondify8 from '../../assets/Bondify-imgs/img8.png'
import bondify9 from '../../assets/Bondify-imgs/img9.png'
import bondify10 from '../../assets/Bondify-imgs/img10.png'
import bondify11 from '../../assets/Bondify-imgs/img11.png'
import bondify12 from '../../assets/Bondify-imgs/img12.png'
import bondify13 from '../../assets/Bondify-imgs/img13.png'
import bondify14 from '../../assets/Bondify-imgs/img14.png'
import bondify15 from '../../assets/Bondify-imgs/img15.png'
import bondify16 from '../../assets/Bondify-imgs/img16.png'
import jobify1 from '../../assets/Jobify-imgs/img1.png';
import jobify2 from '../../assets/Jobify-imgs/img2.png';
import jobify3 from '../../assets/Jobify-imgs/img3.png';
import jobify4 from '../../assets/Jobify-imgs/img4.png';
import jobify5 from '../../assets/Jobify-imgs/img5.png';
import jobify6 from '../../assets/Jobify-imgs/img6.png';
import jobify7 from '../../assets/Jobify-imgs/img7.png';
import ecom1 from '../../assets/Ecommerce-imgs/img1.png';
import ecom2 from '../../assets/Ecommerce-imgs/img2.png';
import ecom3 from '../../assets/Ecommerce-imgs/img3.png';
import ecom4 from '../../assets/Ecommerce-imgs/img4.png';
import ecom5 from '../../assets/Ecommerce-imgs/img5.png';
import ecom6 from '../../assets/Ecommerce-imgs/img6.png';
import ecom7 from '../../assets/Ecommerce-imgs/img7.png';
import ecom8 from '../../assets/Ecommerce-imgs/img8.png';

import { FaLink } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";
import { IoArrowForward } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react'
import axios from 'axios'

const baseURL = import.meta.env.VITE_API_URL;

export default function ProjectSection() {
    const [allProjects, setAllProjects] = useState(null);
    const fetchAllProjects = async () => {
        try {
            const response = await axios.get(`${baseURL}/projects`);
            console.log(response.data.projects)
            setAllProjects(response.data.projects);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        fetchAllProjects();
    }, []);

    return (
        <section className='py-12 sm:px-10 lg:px-12 sm:mx-12 lg:mx-20'>
            <p className='text-center mb-4 text-gray-500'>My Work</p>
            <h2 className='text-5xl font-bold text-center'>Projects</h2>

            {/* Project-Card */}
            <div className='grid grid-col-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-8 place-items-center'>
                {allProjects?.slice(0, 3).map(project => (
                    <div
                        key={project._id}
                        className='rounded-xl border-2 border-gray-400 md:w-72 w-[22rem] overflow-hidden bg-white transition duration-300 hover:scale-105 hover:shadow-xl'>
                        <div className="slider-wrapper">
                            <Swiper
                                spaceBetween={30}
                                centeredSlides={true}
                                loop={true}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                pagination={{
                                    clickable: true,
                                }}
                                // navigation={true}
                                modules={[Autoplay, Pagination, Navigation]}
                                className="h-52 lg:h-44"
                            >
                                {project.images.map((img, index) => (
                                    <SwiperSlide key={index}>
                                        <img src={img} alt="project-img" className="object-cover block w-full h-full" />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                        <div className='p-4'>
                            <h3 className='pb-2 text-2xl font-semibold text-black text-center'>{project.name}</h3>
                            <p className='text-gray-600 overflow-hidden multi-line-ellipsis'>{project.cardDescription}</p>
                            <div className='py-4 flex gap-2 justify-center'>
                                <Link
                                    to={`/projects/${project.slug}`}
                                    className='h-8 px-2 border-2 border-black rounded-full hover:bg-black hover:text-white transition-all flex items-center justify-center gap-1'>
                                    Details
                                    <IoArrowForward className='w-4 h-4 cursor-pointer' />
                                </Link>
                                <Link
                                    to={project.githubUrl}
                                    target='_blank'
                                    className='h-8 px-2 border-2 border-black rounded-full hover:bg-black hover:text-white transition-all flex items-center justify-center gap-1'>
                                    <FiExternalLink className='w-4 h-4 cursor-pointer' />
                                    GitHub Repo
                                </Link>
                            </div>
                            <Link
                                to={project.liveUrl}
                                target='_blank'
                                className='h-8 w-36 mx-auto px-4 border-2 border-black rounded-full hover:bg-black hover:text-white transition-all flex items-center justify-center gap-1'>
                                <FaLink className='w-4 h-4 cursor-pointer' />
                                Live Demo
                            </Link>
                        </div>
                    </div>
                ))}

                <div className='xl:col-span-3 text-xl lg:text-2xl p-2.5 cursor-pointer transition-transform duration-300 rounded-md hover:scale-110 hover:animate-pulse underline underline-offset-8'>
                    <Link
                        to='/projects'
                        className='flex items-center gap-3'>
                        More Projects
                        <FaArrowRightLong className='w-4 lg:w-5' />
                    </Link>
                </div>
            </div>
        </section>
    )
}