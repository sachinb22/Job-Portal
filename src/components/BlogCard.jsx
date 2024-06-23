import React from 'react'
import Img1 from '../assets/blog1.png'
const BlogCard = () => {
  return (
    <div>
        <article className='max-w-sm w-full bg-blogCard cursor-pointer block transition-all duration-[0.4s] ease-in-out overflow-hidden rounded-xl shadow-blog-card group '>
            <figure className='w-full h-56 overflow-hidden'><img src= {Img1} alt="successful-medical-team" className='size-full overflow-hidden object-cover aspect-video transition-transform duration-[0.4s] ease-in-out origin-center group-hover:scale-150' /></figure>
            <div className="article-preview p-4">
                <h2 className='text-lg font-lora font-semibold'>Navigating Healthcare Hiring Challenges</h2>
                <p className='my-3'>Uncover the complexities of healthcare hiring and gain valuable insights on overcoming challenges. This blog offers a detailed guide for both healthcare facilities and professionals...</p>
                <button className='text-indigo-600 cursor-pointer'>Read More <span aria-hidden="true">→</span></button>
            </div>
        </article>
    </div>
  )
}

export default BlogCard