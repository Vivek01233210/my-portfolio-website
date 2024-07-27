import { Link } from "react-router-dom";

const CERTIFICATES = [
    {
        title: 'Web-Dev Bootcamp',
        date: '17th Jan, 2024',
        platform: 'Udemy',
        instructor: 'Angela Yu',
        img: 'images/cert-imgs/web_dev_boot.jpg',
        link: 'https://www.udemy.com/certificate/UC-6e7df576-e241-4c68-9bba-28463a7adba7'
    },
    {
        title: 'Certified in JavaScript',
        date: '24th May, 2024',
        platform: 'Udemy',
        instructor: 'Jonas Schmedtmann',
        img: 'images/cert-imgs/JS.jpg',
        link: 'https://www.udemy.com/certificate/UC-753989e9-3e91-4ad3-bba4-1f8fcbeab0cd'
    },
    {
        title: 'Certified in ReactJs',
        date: '7th Feb, 2024',
        platform: 'Udemy',
        instructor: 'Maximilian Schwarzmüller',
        img: 'images/cert-imgs/react.jpg',
        link: 'https://www.udemy.com/certificate/UC-3422a384-3fc8-45ad-b8a8-93b0d3b75d1b'
    },
    {
        title: 'Certified in DSA',
        date: '18th May, 2024',
        platform: 'Udemy',
        instructor: 'Scott Barret',
        img: 'images/cert-imgs/DSA.jpg',
        link: 'https://www.udemy.com/certificate/UC-55b837fb-a613-4b7a-a542-cda75d88a6eb'
    },
    {
        title: 'Certified in SQL',
        date: '11th June, 2024',
        platform: 'Udemy',
        instructor: 'Jose Portilla',
        img: 'images/cert-imgs/SQL.jpg',
        link: 'https://www.udemy.com/certificate/UC-c09dab69-0b31-4fe8-b09e-1318799f56f9'
    },
    {
        title: 'Certified in CSS',
        date: '16th March, 2024',
        platform: 'Udemy',
        instructor: 'Jonas Schmedtmann',
        img: 'images/cert-imgs/CSS.jpg',
        link: 'https://www.udemy.com/certificate/UC-a7537ad8-b520-457f-a272-bf9077caf221'
    },
]


export default function CertificationPage() {

    return (
        <section className="mx-4 sm:mx-6 md:mx-12 py-12 sm:px-8 md:py-16 lg:px-24 xl:px-32">
            <h1 className="py-6 font-semibold text-3xl text-center">My Certifications</h1>
            <div className="my-4 flex items-center justify-center gap-4 md:gap-8 lg:gap-12 flex-wrap">
                {/* Certificate cards */}
                {CERTIFICATES.map((cert, index) => (
                    <Link
                        key={index}
                        to={cert.link}
                        target='_blank'
                        className="bg-white border-2 border-stone-700 w-72 sm:w-64 rounded-lg overflow-hidden transition duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
                    >
                        <img src={cert.img} alt="certificate-img" className="h-full object-cover w-full block" />
                        <div className="py-1 px-2">
                            <h2 className="">{cert.title}</h2>
                            <div className="text-sm mt-2 mb-1 text-stone-600">
                                <p>{cert.date}</p>
                                <p>{cert.platform}</p>
                                <p>Instructor: {cert.instructor}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    )
}