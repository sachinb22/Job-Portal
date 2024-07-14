import React from 'react'
import heartbeat_Icon from '../assets/heartbeat.png'
import newsletter from '../assets/newsletter.png'

const NewsLetter = () => {
  return (
    <div>
        <section className="lg:container lg:mx-auto dark:bg-indigo-100 rounded ">
        <div className="my-16 p-8 lg:p-16 grid lg:grid-cols-2 gap-8">
            <div className="sm:text-left text-center">
            <p className='text-base uppercase font-nunito text-indigo-600 relative'>
                <img src={heartbeat_Icon} alt="" className='w-[36px] absolute top-1' />
                <span className='ml-12 uppercase'>Stay Informed, Stay Empowered</span>
            </p>
            <h2 className="mb-4 text-3xl tracking-tight font-semibold text-gray-900 sm:text-4xl dark:text-black font-lora">
                Sign up for our Newsletter!
            </h2>
            <p className="mb-8 max-w-2xl font-light text-gray-500 md:mb-12 sm:text-xl dark:text-gray-800">
                Join our community and stay ahead in healthcare staffing trends with our informative newsletter.
            </p>
            <form action="#">
                <div className="items-center mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                <div className="relative w-full">
                    <label htmlFor="email" className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                    </div>
                    <input className="block p-5 pl-10 w-full text-sm text-gray-900 bg-indigo-50 rounded-lg border border-indigo-200 focus:ring-primary-500 focus:border-primary-500 dark:placeholder-gray-900 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter your email" type="email" id="email" required="" />
                    <div className='absolute inset-y-0 right-0 flex items-center pr-3'>
                    <button type="submit" className="bg-zinc-700 p-2 rounded-lg border-2 border-slate-950 py-3 px-5 w-full text-sm font-medium text-center text-white cursor-pointer bg-primary-700 border-primary-600 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Subscribe</button>
                    </div>
                </div>
                </div>
            </form>
            </div>
            <div className='flex justify-center items-center lg:justify-end'>
            <img src={newsletter} alt="" className="w-96 " />
            </div>
        </div>
        </section>

    </div>
  )
}

export default NewsLetter