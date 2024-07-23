import { useRef, useState } from "react"
import { FaArrowDown } from "react-icons/fa6";


export default function AboutMe() {
  const sectionRef = useRef(null);

  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
    sectionRef.current.scrollIntoView({ behavior: 'auto' });
  };

  return (
    <section
      ref={sectionRef}
      className="py-12 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 mx-6 sm:mx-8 md:mx-20 lg:mx-28 xl:mx-40"
    >
      <p className='text-center mb-4 text-gray-500'>About</p>
      <h2 className='text-5xl font-bold text-center'>Me</h2>

      <div className='pt-8 lg:text-xl'>
        <div>
          <ul className="relative list-disc">
            <p className="-ml-6">
              Hi there! I'm a <b>full-stack</b> web developer with a strong foundation in the <b>MERN stack</b> (MongoDB, Express.js, React.js, Node.js).
            </p>
            <li>
              I can design and develop <b>robust RESTful APIs</b> using Node.js and Express.js with proper <b>error handling</b>(sync and async).
            </li>
            <li>
              Proficient in implementing the <b>MVC(Model-View-Controller) architecture</b> including various middlewares and security measures to build scalable and maintainable web applications.
            </li>

            {!showAll && <div className="absolute top-0 left-0 w-full h-full rounded-xl bg-gradient-to-t from-white pointer-events-none"></div>}
          </ul>
          <div className={`${showAll ? 'max-h-[1500px]' : 'max-h-0'} transition-all duration-500`} >
            {showAll && (
              <ul className="list-disc">
                <li>
                  I manage and operate a <b>VPS</b>, hosting multiple projects utilizing <b>Nginx</b> for frontend routing and <b>PM2</b> for backend process management, all with proper <b>domain configurations</b> and <b>SSL certificate(Let's Encrypt)</b>.
                </li>
                <li>
                  Experienced in implementing robust authentication systems using <b>JWT tokens, bcryptjs(sha - 256)</b> for hashing pass with salt, <b>httpOnly cookie</b> - secure session & <b>OAuth 2.0 for Google authentication</b> with <b>passport-js</b>.
                </li>
                <li>
                  Good at <b>Git</b> for version control and <b>GitHub</b> for collaboration, code reviews, and project management.Skilled in branching, committing, merging, and handling pull requests as many of my full-stack project repos are there on my github.I frequently commit changes to the code and maintain them.
                </li>
                <li>
                  Skilled in using <b>Bootstrap, Tailwind CSS</b>, and various frontend libraries to create responsive and user - friendly UIs with modern design principles and best practices.
                </li>
                <li>
                  I can easily work with In - app state - management libraries like <b>Redux(action, reducer, selector, dispatch) and context API</b>. <b>Redux Toolkit</b>(createAsyncThunk), <b>RTK Query</b> and <b>Tanstack Query / React query</b> for api - calling, caching, normalization, synchronization, refetching, mutations, optimistic updates, server - state management.
                </li>
                <li>
                  I can also integrate the application with <b>Cloudinary</b> for media storage, <b>Stripe</b> for seamless payment gateway integration, <b>Nodemailer</b> for efficient email communication with users and <b>WebSocket / Socket.io(in node)</b> for real - time data communication, enhancing user engagement and interactivity in web applications.
                </li>
                <li>
                  I have also worked with <b>RDBMS</b> like <b>SQL(PostgreSQL, MySQL)</b> to make complex queries, Nextjs framework(SSR, app - router, File - based Routing, good SEO).
                </li>
                <li>
                  I am eager to learn new and emerging technologies like <b>Gen AI, LLM, GPT</b> and to integrate in app via APIs.
                </li>
                <li>
                  I am a passionate web developer, my enthusiasm for coding is matched by my dedication to continuous learning, ensuring that I stay at the forefront of the ever - evolving tech landscape with Strong problem - solving skills.I am always eager to embrace new challenges and opportunities to expand my skill set, continuously seeking to contribute to innovative projects and drive impactful results.
                </li>
              </ul>
            )}
          </div>
        </div>
        <div className="text-center">
          <button onClick={toggleShowAll} className={`mt-4 hover:bg-stone-400 text-black p-4 rounded-full animate-bounce`}>
            <FaArrowDown className={`${showAll ? "rotate-180" : ""} transition-all`} />
          </button>
        </div>
      </div>

    </section>
  )
}



