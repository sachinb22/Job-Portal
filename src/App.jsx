import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import JobList from './components/JobList'
import About from './components/About'
import Blog from './components/Blog'
import Footer from './components/Footer'
import Testimonials from './components/Testimonials'

function App() {
  

  return (
    <>
      <Navbar />
      <HeroSection/>
      <JobList />
      <About />
      <Blog />
      <Testimonials />
      <Footer />
    </>
  )
}

export default App
