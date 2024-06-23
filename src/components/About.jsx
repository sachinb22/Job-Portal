import React from 'react'
import heartbeat_Icon from '../assets/heartbeat.png'
import about from '../assets/about.png'

const About = () => {
  return (
    <div className=''>
      <section className='container mx-auto pt-14 lg:px-8'>
        <div className="grid md:grid-cols-2 place-items-center">
          <div className="mx-auto w-[300px] h-auto">
            <img src={about} alt="" className='object-cover size-full' />
          </div>
          <div className="">
            <div className="section_title ">
              <p className='text-base font-nunito text-indigo-600 relative'> <img src= {heartbeat_Icon} alt="" className='w-[36px] absolute top-1' /><span className='ml-12'>Why Choose Us</span> </p>
              <h1 className='mt-3 text-3xl font-lora font-semibold'>Empowering Healthcare Excellence</h1>
            </div>
            <p className=' mt-4 mb-4'>We stand at the forefront of healthcare staffing innovation. Choose us as your trusted partner, and experience a transformative approach to connecting healthcare facilities with top-tier professionals. We take pride in revolutionizing the healthcare staffing landscape. As your dedicated partner, we offer a distinctive approach that goes beyond traditional staffing solutions. Discover the reasons why Sairaanhoyjat is the premier choice for those seeking excellence in healthcare staffing.</p>
            <button className='bg-zinc-700 text-white p-3 rounded-lg border-2 border-slate-950'>Discover More</button>
          </div>
        </div>     
      </section>
    </div>
  )
}

export default About