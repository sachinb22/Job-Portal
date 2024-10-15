import './App.css'
import Home from './Pages/Home'
import Login from './Pages/Login'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import SignUp from './Pages/SignUp'
import Footer from './components/Footer'
import UserDashboard from './Pages/UserDashboard'
import BrowseJobs from './Pages/BrowseJobs'
import FeaturedEmployers from './Pages/FeaturedEmployers'
import Profile from './components/Profile'
import JobDescription from './components/JobDescription'

function App() {
  
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/browsejobs',
      element: <BrowseJobs />
    },
    {
      path: '/featuredemployers',
      element: <FeaturedEmployers />
    },
    {
      path: '/login',
      element: <><Navbar/><Login /> <Footer/></>
    },
    {
      path: '/signup',
      element: <><Navbar/><SignUp /><Footer/></>
    },
    {
      path: '/dashboard',
      element: <><Navbar/><UserDashboard /><Footer/></>
    },
    {
      path: '/description/:id',
      element: <><Navbar/><JobDescription /><Footer/></>
    },
    {
      path: '/profile',
      element: <><Navbar/><Profile /><Footer/></>
    },
  ])

  return (
    <>
      <RouterProvider router={router} />

    </>
  )
}

export default App
