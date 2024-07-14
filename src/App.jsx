import './App.css'
import Home from './Pages/Home'
import Login from './Pages/Login'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import SignUp from './Pages/SignUp'
import Footer from './components/Footer'

function App() {
  
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/login',
      element: <><Navbar/><Login /> <Footer/></>
    },
    {
      path: '/signup',
      element: <><Navbar/><SignUp /><Footer/></>
    },
  ])

  return (
    <>
      <RouterProvider router={router} />

    </>
  )
}

export default App
