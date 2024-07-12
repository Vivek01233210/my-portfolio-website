import { TiTick } from "react-icons/ti";

export default function SkillSection() {
    return (
        <section className="py-12 px-12 mx-20">
            <p className='text-center mb-4 text-gray-500'>My</p>
            <h2 className='text-5xl font-bold text-center'>Skills</h2>

            <div className='pt-8 flex items-center justify-center flex-wrap gap-8 md:gap-12'>

                <div className='p-4 rounded-xl bg-white border-2 border-gray-400 min-w-64 max-w-72'>
                    <h3 className='text-2xl font-semibold text-gray-500 my-2 text-center'>Frontend</h3>
                    <div className='px-4 grid grid-cols-1 gap-y-2 w-36 mx-auto'>
                        <p className='flex items-center gap-1'>
                            <TiTick />
                            <span className='font-medium'>React</span>
                        </p>
                        <p className='flex items-center gap-1'>
                            <TiTick />
                            <span className='font-medium'>JavaScript</span>
                        </p>
                        <p className='flex items-center gap-1'>
                            <TiTick />
                            <span className='font-medium'>HTML</span>
                        </p>
                        <p className='flex items-center gap-1'>
                            <TiTick />
                            <span className='font-medium'>CSS</span>
                        </p>
                        <p className='flex items-center gap-1'>
                            <TiTick />
                            <span className='font-medium'>Tailwind</span>
                        </p>
                        <p className='flex items-center gap-1'>
                            <TiTick />
                            <span className='font-medium'>RESTful API</span>
                        </p>
                    </div>
                </div>




                <div className='p-4 rounded-xl bg-white border-2 border-gray-400 min-w-64 max-w-72'>
                    <h3 className='text-2xl font-semibold text-gray-500 my-2 text-center'>Backend</h3>
                    <div className='grid grid-cols-1 gap-y-2 w-36 mx-auto'>
                        <p className='flex items-center gap-1'>
                            <TiTick />
                            <span className='font-medium'>Node JS</span>
                        </p>
                        <p className='flex items-center gap-1'>
                            <TiTick />
                            <span className='font-medium'>Express JS</span>
                        </p>
                        <p className='flex items-center gap-1'>
                            <TiTick />
                            <span className='font-medium'>MongoDB</span>
                        </p>
                        <p className='flex items-center gap-1'>
                            <TiTick />
                            <span className='font-medium'>PostgreSQL</span>
                        </p>
                        <p className='flex items-center gap-1'>
                            <TiTick />
                            <span className='font-medium'>GIT</span>
                        </p>
                        <p className='flex items-center gap-1'>
                            <TiTick />
                            <span className='font-medium'>Postman</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}