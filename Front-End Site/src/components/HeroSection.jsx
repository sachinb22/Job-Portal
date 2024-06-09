import React from 'react'
import HeroImage from '../assets/HeroImage.png'
import org1 from '../assets/org1.png'
import org2 from '../assets/org2.png'
import org3 from '../assets/org3.png'
import org4 from '../assets/org4.png'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const trustedCompy = [
    {
        id: 1,
        name: `org1`,
        img: org1
    },
    {
        id: 2,
        name: `org2`,
        img: org2
    },
    {
        id: 3,
        name: `org3`,
        img: org3
    },
    {
        id: 4,
        name: `org4`,
        img: org4
    },
]

function HeroSection() {
    const settings = {
        className: "slider variable-width",
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1
                }
            }
        ]
  
      };
    return (
        <section className="bg-gradient">
            <div className="container mx-auto  pt-14 lg:px-8">
                <div className="flex flex-col items-center justify-center  mx-auto sm:py-12 lg:py-15 lg:flex-row lg:justify-between">
                    <div className="flex flex-col justify-center text-left w-2/4">
                        <h1 className="text-5xl font-semibold font-lora  text-gray-900 sm:text-6xl">
                            Your Trusted Partner in Healthcare Staffing Solutions
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-800 font-medium font-nunito">
                            Our platform serves as a seamless bridge, connecting private clinics and public hospitals with skilled healthcare workers.
                        </p>
                        <div className="mt-10 flex items-center justify-start gap-x-6">
                        <a
                            href="#"
                            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Get started <span aria-hidden="true">→</span>
                        </a>
                    
                        </div>
                        <div className="mt-10">
                            <h6 className='text-lg text-indigo-400 font-nunito'>Trusted By:</h6>
                            <div>
                                <Slider {...settings}>
                                    {trustedCompy.map((item) => (
                                        <div className='w-36 h-12' key={item.id}>
                                            <a href="#" className="m-1 p-1">                                        
                                                <img
                                                    className="object-contain h-12"
                                                    src={item.img}
                                                    alt={item.name}
                                                />
                                            </a>
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </div>
                    </div>

                    <div className="h-72 sm:h-80 lg:h-[34rem] xl:h-112 2xl:h-128 ">
                        <img src={HeroImage} alt="" className="object-cover h-72 sm:h-80 lg:h-[34rem] xl:h-112 2xl:h-128" />
                    </div>
                </div> 
            </div>
        </section>
    )
}

export default HeroSection
