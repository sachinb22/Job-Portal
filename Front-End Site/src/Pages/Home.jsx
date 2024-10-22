import React from 'react'
import HeroSection from '../components/HeroSection'
import JobList from '../components/JobList'
import About from '../components/About'
import Blog from '../components/Blog'
import Testimonials from '../components/Testimonials'
import NewsLetter from '../components/NewsLetter'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import useGetAllJobs from '../hooks/useGetAllJobs'

const Home = () => {
  useGetAllJobs()
  return (
    <>
        <Navbar />
        <HeroSection/>
        <JobList />
        <About />
        <Blog />
        <Testimonials />
        <NewsLetter />
        <Footer />
    </>
  )
}

export default Home