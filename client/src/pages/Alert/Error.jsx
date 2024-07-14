import errorSVG from '../../assets/error.svg'

export default function Error() {
  return (
    <div className="h-[80vh] flex items-center justify-center flex-col">
        <img className='w-80 h-80' src={errorSVG} alt="error SVG" />
        <p className='text-xl text-gray-500 -mt-8'>Something Went Wrong!</p>
    </div>
  )
}