import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import JobList from './components/JobList'
import About from './components/About'
import Blog from './components/Blog'
import Footer from './components/Footer'
import Testimonials from './components/Testimonials'
import NewsLetter from './components/NewsLetter'

function App() {
  

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

export default App
