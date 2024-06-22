import React from 'react'
import Job from './Job'

const JobList = () => {
  return (
    <>
    <section className='container mx-auto pt-14 lg:px-8'>
        <div className="section_title ">
            <h1 className='text-3xl font-lora font-semibold'>Find The Perfect Healthcare Job With Us!</h1>
            <p className='mt-3 text-lg font-nunito cursor-pointer'><a href="#">Looking for opportunity? <span className='underline ring-offset-1 text-indigo-600'>Browse all jobs.</span></a></p>
        </div>
        <div className='grid md:grid-cols-2 gap-6 mt-6'>
            <Job />
            <Job />
            <Job />
            <Job />
        </div>
    </section>
    </>
  )
}

export default JobList