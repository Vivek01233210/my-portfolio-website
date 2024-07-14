import { useNavigate } from 'react-router-dom';
import accessDenied from '../assets/access-denied.svg'
import { FaArrowLeft } from 'react-icons/fa6';

export default function AccessDenied() {
    const navigate = useNavigate();

    return (
        <div className="h-[80vh] flex items-center justify-center flex-col">
            <img className='w-72 h-72' src={accessDenied} alt="not-found-img" />
            <p className='text-xl text-gray-500'>Access Denied!</p>
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