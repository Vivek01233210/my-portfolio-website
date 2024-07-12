import notFound from '../assets/not-found.svg'

export default function NotFound() {
  return (
    <div className="h-[80vh] flex items-center justify-center flex-col">
        <img className='w-80 h-80' src={notFound} alt="not-found-img" />
        <p className='text-xl text-gray-500 -mt-8'>Page not found!</p>
    </div>
  )
}