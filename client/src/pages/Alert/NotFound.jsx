import { FaArrowLeft } from 'react-icons/fa6'
import notFound from '../../assets/not-found.svg'
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="h-[80vh] flex items-center justify-center flex-col">
      <img className='w-80 h-80' src={notFound} alt="not-found-img" />
      <p className='text-xl text-gray-500 -mt-8'>Page you are looking for doesn't exist!</p>
      <button
        onClick={() => navigate(-1)}
        className="h-10 mt-3 px-4 font-medium border-2 border-black rounded-full hover:bg-black hover:text-white transition-all flex items-center justify-center gap-2"
      >
        <FaArrowLeft />
        Go Back
      </button>
    </div>
  )
}