import { useState, useEffect, useRef } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Logo from '../assets/Logo.png'
import LanguageButton from './LanguageButton'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import store from '../redux/store'
import { toast } from 'react-toastify'
import { USER_API_END_POINT } from '../utils/constant'
import { setUser } from '../redux/authSlice'
import axios from 'axios'


const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Browse Jobs', href: '/browsejobs' },
    { name: 'Featured Employers', href: '/featuredemployers' },

]


const Navbar = () => {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [hasShadow, setHasShadow] = useState(false);

    const { user } = useSelector(store => store.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const [showProfile, setShowProfile] = useState(false)
    const profileRef = useRef(null)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setHasShadow(true);
            } else {
                setHasShadow(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const handleProfile = () => {
        setShowProfile(!showProfile)
    }

    // This useEffect will handle clicks outside the profile dropdown
    useEffect(()=>{
        const handleClickOutside = (e) => {
            if(profileRef.current  && !profileRef.current.contains(e.target)){
                setShowProfile(false)
            }
        }
        // Add event listener when showProfile is true
        if (showProfile) {
            document.addEventListener('mousedown', handleClickOutside)
        }
        // Cleanup event listener
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [showProfile])

    const logoutHandler = async () => {
        try {
            // Make sure the API endpoint is correct
            const res = await axios.get(`${USER_API_END_POINT}/logout`, { withCredentials: true });
            
            // Check if response and res.data exist
            if (res && res.data && res.data.success) {
                dispatch(setUser(null));  // Log out the user
                navigate("/");  // Redirect to home page
                toast.success(res.data.message);  // Show success message
            } else {
                // Handle cases where the response structure is not as expected
                console.log("Unexpected response structure:", res);
                toast.error("Unexpected error occurred during logout.");
            }
        } catch (error) {
            console.error("Logout error:", error);
    
            // Check if error response and message exist before accessing them
            if (error.response && error.response.data && error.response.data.message) {
                toast.error(error.response.data.message);
            } else {
                toast.error("An error occurred during logout.");
            }
        }
    };
    

    return (

        <header className={` bg-[rgba(255,255,255,0.5)] transition-shadow duration-300 backdrop-blur-custom-blur sticky top-0 z-10 ${hasShadow ? 'shadow-custom-1' : ''}`}>
            <nav className="lg:container lg:mx-auto flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only"> Company Logo</span>
                        <img
                            className="h-12 w-auto"
                            src={Logo}
                            alt=""
                        />

                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12 ">
                    {navigation.map((item) => (
                        <NavLink key={item.name} to={item.href} className={({ isActive }) =>
                            `text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-600 ${isActive ? 'text-indigo-600' : ''}`
                        }>
                            {item.name}
                        </NavLink>
                    ))}
                </div>
                {
                    !user ? (
                        <div className="hidden lg:flex lg:items-center lg:flex-1 lg:gap-x-4 lg:justify-end">
                            <NavLink to="/login" className={({ isActive }) =>
                                `text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-600 ${isActive ? 'text-indigo-600' : ''}`
                            }>
                                Log in
                            </NavLink>
                            <NavLink to="/signup" className={({ isActive }) => `text-sm font-semibold  text-indigo-600 px-3 py-2 outline outline-1 outline-indigo-600 rounded-md  hover:bg-indigo-600 hover:text-white hover:outline-none ${isActive ? 'bg-indigo-600 text-white' : ''}`}>
                                Sign Up
                            </NavLink>
                            {/* { <LanguageButton /> } */}
                        </div>
                    ) : (
                        <div className='lg:flex lg:items-center lg:flex-1 lg:gap-x-4 lg:justify-end ' ref={profileRef}>
                            <img src= {user?.profile?.profilePhoto} alt="Profile Image" className='w-8 h-8 rounded relative cursor-pointer' onClick={handleProfile} />

                            {showProfile && (<div className='flex flex-col gap-4 border p-4 rounded bg-white shadow-md absolute top-20'>

                                <Link className='flex gap-3' to="/profile">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    </svg>

                                    View Profile</Link>
                                <Link className='flex gap-3' onClick={logoutHandler}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
                                    </svg>
                                    Logout</Link>

                            </div>)}

                        </div>
                    )
                }

            </nav>
            <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-50" />
                <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Company Logo </span>
                            <img
                                className="h-12 w-auto"
                                src={Logo}
                                alt=""
                            />

                        </a>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                            <div className="py-6">
                                <Link
                                    to="/login"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Log in
                                </Link>
                                <Link
                                    to="/signup"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Sign Up
                                </Link>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>

    )
}

export default Navbar