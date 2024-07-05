import React from 'react'
import heartbeat_Icon from '../assets/heartbeat.png'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const feedbacks = [
    {
        id: 0,
        dec: `The platform made it incredibly easy for me to explore opportunities globally. The process was smooth, and the support from their team was exceptional. I found my ideal position, and I couldn't be happier!`,
        name: `Dr. David H. Hansson`,
        designation: `Cardiologist`,
        img:"https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww"
    },
    {
        id: 1,
        dec:`The platform's innovative approach to healthcare staffing allowed us to quickly identify qualified candidates, streamlining our hiring process. The team's responsiveness and commitment to quality matches set them apart in the industry.`,
        name: `Emily Rodriguez`,
        designation: `Nurse`,
        img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D"

    },
    {
        id: 2,
        dec:`I am so grateful for the opportunities Sairaanhoyjat has provided. The platform not only connected me with a facility that aligns with my values but also ensured a smooth transition.`,
        name: `Anna Morian`, 
        designation: `Medical Student`,
        img: "https://images.unsplash.com/photo-1587272114422-ec88be13ab1a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1lZGljYWwlMjBzdHVkZW50fGVufDB8fDB8fHww"
    },
    {
        id: 3,
        dec:`Utilizing this platform revolutionized my job search experience. The interface was user-friendly, and I quickly connected with employers that matched my expertise. Their support team was with me every step of the way, making the transition effortless.`,
        name: `Dr. Olivia Martinez`, 
        designation: `Dermatologist`,
        img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YXZhdGFyfGVufDB8fDB8fHww://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },


]

const Testimonials = () => {
    const settings = {
        className: "slider ",
        accessibility:true,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 800,
        cssEase: "linear",
        responsive: [

            {
                breakpoint: 1200,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
                }
            },
            {
                breakpoint: 991,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1
                }
            }
        ]
  
      };
  return (
    <section className='testimonials container mx-auto pt-14 px-8 mb-12'>
        <div className="section_title flex flex-col justify-center items-center ">
            <p className='text-base uppercase font-nunito text-indigo-600 relative'> <img src= {heartbeat_Icon} alt="" className='w-[36px] absolute top-1 ' /><span className='ml-12'>Success Stories</span> </p>
            <h1 className='mt-3 text-3xl font-lora font-semibold'>What Healthcare Pros & Facilities Say About Us</h1>
        </div>
        <div className="pt-12 " >
            <Slider {...settings}>
                {feedbacks.map((i) => (
                    
                    <div className="group rounded-lg border-2 border-gray-600  p-10 min-h-[200px] bg-white text-gray-700 leading-snug flex flex-col justify-between cursor-pointer relative transition-transform duration-300 ease-in-out transform hover:-translate-y-2 hover:border-b-4 hover:border-r-4 " key={i.id}>
                        <div className="-ml-4">
                            <svg className="w-8 opacity-25 text-indigo-500" xmlns="http://www.w3.org/2000/svg"
                            shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality"
                            fillRule="evenodd" clipRule="evenodd" viewBox="0 0 640 640" fill="currentColor">
                            <path d="M557.133 561.704H442.128c-44.256 0-80.458-36.19-80.458-80.446 0-165.58-42.32-347.485 160.656-399.418 91.95-23.516 115.915 77.753 18.119 84.745-59.647 4.276-71.293 42.804-73.147 101.068h92.269c44.256 0 80.458 36.201 80.458 80.458v130.702c0 45.591-37.3 82.89-82.891 82.89zm-358.032 0H84.096c-44.256 0-80.446-36.19-80.446-80.446 0-165.58-42.331-347.485 160.644-399.418 91.95-23.516 115.915 77.753 18.118 84.745-59.646 4.276-71.292 42.804-73.146 101.068h92.269c44.256 0 80.457 36.201 80.457 80.458v130.702c0 45.591-37.3 82.89-82.89 82.89z"/>
                            </svg>
                        </div>
                        <div className="my-6">
                            {i.dec}
                        </div>
                        <div className="flex items-center">
                            <div className='w-16 h-16 rounded-full border-2 border-indigo-400'>
                            <img className="object-cover w-full h-full rounded-full" src= {i.img} />
                            </div>
                            <div className="ml-4">
                            <div className="font-bold">{i.name}</div>
                            <div className="text-sm text-gray-600 mt-1"><a href="">{i.designation}</a></div>
                            </div>
                        </div>
            {/* <div className="absolute inset-0 rounded-lg border-b-4  border-transparent group-hover:border-gray-900 transition-all duration-300 ease-in-out pointer-events-none"></div> */}
                    </div>
                
                ))}
            </Slider>
        </div>   

    </section>
  )
}

export default Testimonials