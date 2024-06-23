import { useState, useEffect } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Logo from '../assets/Logo.png'
import LanguageButton from './LanguageButton'


const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'Browse Jobs', href: '#jobs' },
    { name: 'Featured Employers', href: '#featured' },
    
  ]



const Navbar = () => {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [hasShadow, setHasShadow] = useState(false);
  
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

  return (
    
        <header className= {` bg-[rgba(255,255,255,0.5)] transition-shadow duration-300 backdrop-blur-custom-blur sticky top-0  ${hasShadow ? 'shadow-custom-1'  : ''}`}>
            <nav className="lg:container lg:mx-auto flex items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div className="flex lg:flex-1">
                <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only"> Company Logo</span>
                <img
                    className="h-12 w-auto"
                    src= {Logo}
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
                <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-600">
                    {item.name}
                </a>
                ))}
            </div>
            <div className="hidden lg:flex lg:items-center lg:flex-1 lg:gap-x-4 lg:justify-end">
                <a href="#login" className="text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-600">
                Log in 
                </a>
                <a href="#sign up" className="text-sm font-semibold  text-indigo-600 px-3 py-2 outline outline-1 outline-indigo-600 rounded-md  hover:bg-indigo-600 hover:text-white hover:outline-none ">
                Sign Up 
                </a>
                { <LanguageButton /> }
            </div>
            </nav>
            <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <div className="fixed inset-0 z-50" />
            <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                    <span className="sr-only">Company Logo </span>
                    <img
                    className="h-12 w-auto"
                    src= {Logo}
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
                    <a
                        href="#"
                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                        Log in
                    </a>
                    <a
                        href="#"
                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                        Sign Up
                    </a>
                    </div>
                </div>
                </div>
            </DialogPanel>
            </Dialog>
        </header>
    
  )
}

export default Navbar