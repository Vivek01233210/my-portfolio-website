import { FaGithub, FaLinkedin } from 'react-icons/fa';
import user from '../assets/user12.jpg';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


export default function Footer() {

  const {isAuthenticated} = useSelector(state => state.auth);

  return (
    <footer className="bg-svg2 px-8 pt-4">
      <div className='flex justify-center gap-12 flex-wrap'>

        <div className="flex flex-col items-center justify-center ">
          <img src={user} className='w-20 h-20 rounded-full object-cover shadow-2xl bw' alt="vivek-image" />
          <h4>Vivek Kumar</h4>
        </div>
        <div className='flex flex-col items-center justify-center gap-2 '>
          <button className='px-2 py-1 text-sm border-2 border-black rounded-full hover:bg-black hover:text-white transition-all'>
            Download CV
          </button>
          <div className='flex justify-center gap-4 '>
            <Link>
              <FaLinkedin className='w-6 h-6 cursor-pointer' />
            </Link>
            <Link>
              <FaGithub className='w-6 h-6 cursor-pointer' />
            </Link>
          </div>
        </div>
        <div className='flex gap-8 justify-center items-center'>
          <Link className='hover:underline' to='/'>Home</Link>
          <Link className='hover:underline' to='/projects'>Projects</Link>
          <Link className='hover:underline' to='/contact'>Contact</Link>
          {!isAuthenticated && <Link className='hover:underline' to='/login'>Admin</Link>}
          {isAuthenticated && <Link className='hover:underline' to='/projects/edit-projects'>Edit</Link>}
          {isAuthenticated && <Link className='hover:underline' to='/projects/create-project'>Create</Link>}
          {isAuthenticated && <Link className='hover:underline' to='/messages'>Message</Link>}
        </div>
      </div>
      <div className="text-center my-2 text-stone-500">
        Website Designed & Developed by Vivek Kumar | © 2024 All Rights Reserved.
      </div>

    </footer>
  )
}