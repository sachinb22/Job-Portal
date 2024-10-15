import React from 'react'
import Job from './Job'

const randomJobs = [1, 2, 3, 4, 5, 6, 7, 8];

const JobList = () => {
  return (
    <>
      <section className='container mx-auto pt-14 px-8'>
        <div className="section_title ">
          <h1 className='text-3xl font-lora font-semibold'>Find The Perfect Healthcare Job With Us!</h1>
          <p className='mt-3 text-lg font-nunito cursor-pointer'><a href="#">Looking for opportunity? <span className='underline ring-offset-1 text-indigo-600'>Browse all jobs.</span></a></p>
        </div>
        <div className='grid lg:grid-cols-3 grid-cols-1 gap-6 mt-6'>
          {
            randomJobs.slice(0, 6).map((item, index) =>
              <Job key={index}/>
            )
          }

        </div>
      </section>
    </>
  )
}

export default JobList