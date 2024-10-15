import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Slider from "react-slick";
import FilterCard from '../components/FilterCard';
import JobList from '../components/JobList';
import Job from '../components/Job';


const category = [
  "Registered Nurse",
  "Nurse Practitioner",
  "General Practitioner",
  "Pediatrician",
  "Surgeon",
  "Psychologist",
  "Pharmacist",
  "Hospital Administrator",

]

const jobArray = [1, 2, 3, 4, 5, 6, 7, 8];

const BrowseJobs = () => {


  const settings = {
    className: "slider",
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    speed: 1000,
    autoplaySpeed: 4000,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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
    <>
      <Navbar />
      <section className='browseJobs container lg:mx-auto pt-14 px-8'>

        <div className=' flex w-[40%]  border border-gray-400 pl-4 pr-2 py-2 items-center gap-4 mx-auto rounded-full hover:shadow-lg '>
          <input type="text" placeholder='Find your dream jobs' className='outline-none border-none w-full' />
          <button className='w-48 py-3 rounded-full bg-indigo-600 text-white flex items-center justify-center gap-2 text-base'> 
            Search
          </button>
        </div>

        <p className='text-center my-10'>Search by Category</p>
        <div className='w-full '>
          <Slider {...settings}>
            {category.map((cat, index) => (
              <div key={index} className='px-2'>
                <a href="#"  >
                  <button className='w-full border border-indigo-100 rounded-full bg-indigo-50 hover:bg-indigo-100 hover:shadow-md px-2 py-3 text-center whitespace-nowrap'>{cat}</button>
                </a>
              </div>



            ))}
          </Slider>
        </div>

        {/* filter and list of jobs */}
        <div className='flex my-10 gap-5'>
          <div className='w-[20%]'>

            <FilterCard />
          </div>
          {
            jobArray.length <= 0 ? <p> Job not found.</p> : (
              <div className="flex flex-col flex-1  px-3 gap-4">
                <span className='mb-3 font-semibold'>Search results ({jobArray.length})</span>
              <div className='grid lg:grid-cols-2 grid-cols-1 gap-6'>
                {
                  jobArray.map((item, index) =>
                    <Job />
                  )
                }

              </div>
              </div>
            )
          }

        </div>

      </section>
      <Footer />
    </>
  )
}

export default BrowseJobs