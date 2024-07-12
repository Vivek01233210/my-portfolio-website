import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import { Link, useParams } from 'react-router-dom'
import NotFound from '../NotFound.jsx'
import { FiExternalLink } from 'react-icons/fi'
import { FaLink } from 'react-icons/fa6'
import { useEffect, useState } from 'react'
import axios from 'axios'

const baseURL = import.meta.env.VITE_API_URL;

export default function ProjectDetails() {
    const [project, setProject] = useState(null);
    const { slug } = useParams();

    const fetchProject = async () => {
        try {
            const response = await axios.get(`${baseURL}/projects/${slug}`);
            setProject(response.data);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        fetchProject();
    }, []);


    return (
        <main className=''>
            <div className='h-16'></div>
            <section className='max-w-[50rem] mx-auto py-12 sm:px-10 lg:px-12'>
                <div className=''>
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
                        className="h-72 lg:h-96 border-2 border-stone-400 rounded-xl"
                    >
                        {project?.images?.map((img, index) => (
                            <SwiperSlide key={index}>
                                <img src={`/${img}`} alt="project-img" className="object-cover block w-full h-full" />
                            </SwiperSlide>
                        ))}

                    </Swiper>
                    <div className='my-4 pt-4 flex gap-4 justify-center'>
                        <Link
                            to={project?.liveUrl}
                            target='_blank'
                            className='h-8 px-4 border-2 border-black rounded-full hover:bg-black hover:text-white transition-all flex items-center justify-center gap-1'>
                            <FaLink className='w-4 h-4 cursor-pointer' />
                            Live Demo
                        </Link>
                        <Link
                            to={project?.githubUrl}
                            target='_blank'
                            className='h-8 px-4 border-2 border-black rounded-full hover:bg-black hover:text-white transition-all flex items-center justify-center gap-1'>
                            <FiExternalLink className='w-4 h-4 cursor-pointer' />
                            GitHub Repo
                        </Link>
                    </div>
                    <div
                        className="rendered-html-content"
                        dangerouslySetInnerHTML={{ __html: project?.description }}
                    />
                </div>
            </section>
        </main>
    )
}