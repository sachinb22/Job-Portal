import React from 'react'
import heartbeat_Icon from '../assets/heartbeat.png'
import BlogCard from './BlogCard'

const Blog = () => {
  return (
    <div className='mb-10'>
    <section className='container mx-auto pt-14 lg:px-8'>
        <div className="grid md:grid-cols-2 ">
          <div className="max-w-lg ">
            <div className="section_title ">
              <p className='text-base font-nunito text-indigo-600 relative'> <img src= {heartbeat_Icon} alt="" className='w-[36px] absolute top-1' /><span className='ml-12'>Our blogs</span> </p>
              <h1 className='mt-3 text-3xl font-lora font-semibold'>Explore Insights and Innovations in Healthcare Staffing</h1>
            </div>
            <p className=' mt-4 mb-4'>Dive into our blog section to stay informed on the latest trends, expert insights, and success stories reshaping the landscape of healthcare staffing.</p>
            <button className='bg-zinc-700 text-white p-2 rounded-lg border-2 border-slate-950'>View All</button>
          </div>
            <div className='flex items-center gap-4 md:justify-between'>
                <BlogCard />
                <BlogCard />
            </div>
        </div>     
    </section>
    </div>
  )
}

export default Blog