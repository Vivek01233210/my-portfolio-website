import { useEffect, useRef, useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import user from '../assets/user12.jpg';
// import { NAV_ITEMS } from "../Constants.js";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/slices/authSlice.js";
import { logoutAPI } from "../APIServices/userAPI.js";
import { useMutation } from "@tanstack/react-query";


export default function Navbar() {
  const NAV_ITEMS = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    // { name: 'Edit', path: '/edit-projects' },
    // { name: 'About', path: '/about' },
    // { name: 'Admin', path: '/login' },
  ]
  const sidebarRef = useRef();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isTop, setIsTop] = useState(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.auth);

  const logoutMutation = useMutation({
    mutationKey: ["logout"],
    mutationFn: logoutAPI,
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY < 10); // Adjust 50 to the threshold you prefer
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      // Close the sidebar if click is outside
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) { setIsSidebarOpen(false) }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebarRef]);

  useEffect(() => {
    if (isSidebarOpen) {
      // Disable scrolling
      document.body.style.overflow = 'hidden';
    } else {
      // Enable scrolling
      document.body.style.overflow = 'visible';
    }
  }, [isSidebarOpen]);

  if (isAuthenticated) {
    NAV_ITEMS.push({ name: 'Edit', path: '/projects/edit-projects' });
    NAV_ITEMS.push({ name: 'Create', path: '/projects/create-project' });
  } else {
    NAV_ITEMS.push({ name: 'Admin', path: '/login' });
  }

  const handleLogout = () => {
    logoutMutation
      .mutateAsync()
      .then(() => dispatch(logout()))
      .then(() => navigate('/'))
      .catch((e) => console.log(e));
  }

  return (
    <nav className={`fixed z-10 w-full h-16 flex justify-between items-center ${isTop ? '' : 'shadow-md backdrop-blur-lg'} transition-all`}>
      <IoMenu onClick={() => setIsSidebarOpen(true)} className="w-12 h-12 p-2 ml-4 hover:bg-gray-200 rounded-md cursor-pointer md:hidden" />

      {/* Sidebar position fixed */}
      <div
        ref={sidebarRef}
        className={`fixed ${isSidebarOpen ? 'left-0' : '-left-60'} top-0 h-screen w-60 bg-white sidebar z-20 shadow-2xl rounded-r-xl flex flex-col`}>
        <div className="py-8 mt-8 flex flex-col items-center justify-center gap-2 border-b-[1px] border-gray-300">
          <img src={user} alt="user-img"
            className="w-28 h-28 rounded-full object-cover shadow-2xl bw" />
          <p className="text-2xl font-medium tracking-wide">Vivek Kumar</p>
        </div>
        <ul className="flex flex-col items-start gap-4 py-8 px-2">
          {NAV_ITEMS.map((item, index) => (
            <Link
              to={item.path}
              key={index}
              onClick={() => setIsSidebarOpen(false)}
              className="p-4 w-full text-center text-xl cursor-pointer active:bg-stone-300 rounded-lg" >
              {item.name}
            </Link>
          ))}
        </ul>
        <div className="mt-auto p-4 text-center font-mono font-thin text-xs text-gray-500">Copyright &copy; 2024</div>

        {isSidebarOpen && (
          <IoClose onClick={() => setIsSidebarOpen(false)} className="absolute z-20 left-4 top-3 w-11 h-11 p-2
           hover:bg-gray-100 rounded-full cursor-pointer text-4xl md:hidden" />
        )}
      </div>

      {/* Background Overlay(position fixed) */}
      {isSidebarOpen && (
        <div className="fixed top-0 left-0 z-10 w-screen h-screen opacity-50 bg-black"></div>
      )}

      <p className="order-1 mr-12 md:mr-28 md:ml-12 lg:ml-20 text-2xl md:text-3xl lg:text-4xl font-medium">
        Vivek Kumar
      </p>

      <div className="hidden md:block order-1">
        <ul className="flex gap-8 lg:gap-16  md:text-lg lg:text-xl mr-16 lg:mr-20">
          {NAV_ITEMS.map((item, index) => (
            <Link
              to={item.path}
              key={index}
              className="cursor-pointer underline-offset-4 hover:underline"
            >
              {item.name}
            </Link>
          ))}
          {isAuthenticated && (
            <button onClick={handleLogout} 
            className="cursor-pointer underline-offset-4 hover:underline">
              Logout
            </button>
          )}
        </ul>
      </div>
    </nav>
  );
}