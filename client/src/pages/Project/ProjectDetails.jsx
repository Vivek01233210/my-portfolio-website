import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import { Link, useParams } from 'react-router-dom'
import { FiExternalLink } from 'react-icons/fi'
import { FaLink } from 'react-icons/fa6'
import { useEffect } from 'react'
import { useQuery } from '@tanstack/react-query';
import { getProjectAPI } from '../../APIServices/projectAPI.js';
import { ImSpinner8 } from 'react-icons/im';

export default function ProjectDetails() {
    const { slug } = useParams();

    const { data: project, isLoading } = useQuery({
        queryKey: ['get-project'],
        queryFn: () => getProjectAPI(slug),
    });

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    if (isLoading) return <div className="h-[70vh] flex justify-center items-center"><ImSpinner8 className="w-20 h-20 animate-spin" /></div>

    return (
        <main className=''>
            <div className='h-16'></div>
            <section className='max-w-[50rem] mx-auto py-12 sm:px-10 lg:px-12'>
                <h1 className="text-3xl font-medium text-center mb-4">{project?.name}</h1>
                <div className=''>
                    {project?.images && <Swiper
                        key={project._id}
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
                        {project.images.map((img, index) => (
                            <SwiperSlide key={index}>
                                <img src={`/${img}`} alt="project-img" className="object-cover block w-full h-full" />
                            </SwiperSlide>
                        ))}

                    </Swiper>}
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