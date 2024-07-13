import { FaLink } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";
import { IoArrowForward } from "react-icons/io5";
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useQuery } from "@tanstack/react-query";
import { getAllProjectsAPI } from "../../APIServices/projectAPI.js";


export default function AllProjects() {

    const { data } = useQuery({
        queryKey: ["get-projects"],
        queryFn: () => getAllProjectsAPI(),
    });

    return (
        <section className="py-24 sm:px-10 lg:px-12 sm:mx-12 lg:mx-20">
            <h1 className="text-3xl font-medium text-center">ALL PROJECTS</h1>
            {/* Project-Card */}
            <div className='grid grid-col-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-8 place-items-center'>
                {data?.projects?.map(project => (
                    <div
                        key={project.slug}
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
            </div>
        </section>
    )
}