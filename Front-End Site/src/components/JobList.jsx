import React from 'react'
import Job from './Job'
import { useSelector } from 'react-redux';
import store from '../redux/store';



const JobList = () => {
  const {allJobs} = useSelector(store => store.job)
  console.log(allJobs)
  return (
    <>
      <section className='container mx-auto pt-14 px-8'>
        <div className="section_title ">
          <h1 className='text-3xl font-lora font-semibold'>Find The Perfect Healthcare Job With Us!</h1>
          <p className='mt-3 text-lg font-nunito cursor-pointer'><a href="#">Looking for opportunity? <span className='underline ring-offset-1 text-indigo-600'>Browse all jobs.</span></a></p>
        </div>
        <div className='grid lg:grid-cols-3 grid-cols-1 gap-6 mt-6'>
          {
            allJobs.length <=0 ? <span>No job available.</span> : allJobs.slice(0, 6).map((job) =>
              <Job key={job._id} job={job}/>
            )
          }

        </div>
      </section>
    </>
  )
}

export default JobList