import React from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link, NavLink } from 'react-router-dom'

const Login = () => {
  return (
    <div>
      <section className='rounded container mx-auto w-full lg:w-2/5  p-10 my-10 shadow-custom-card'>
        <h2 className="mb-4 text-2xl tracking-tight font-medium text-gray-900 sm:text-4xl dark:text-black font-lora text-center">
          Login
        </h2>
        <p className="mb-8 font-light text-gray-500 md:mb-12 sm:text-lg dark:text-gray-800 text-center">
          Welcome to Sairaanhoyjat - Please enter your email and password to access your profile.
        </p>
          <form action="">
            <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  className=' '
            />
            <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  
            />
            <div className='flex items-center flex-wrap justify-between'>

            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Link to=""><p className='hover:text-indigo-600'>Forgot Password?</p></Link>
            </div>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className="!bg-indigo-600 hover:!bg-indigo-700 !my-10 !p-4 "
              
            >Login</Button>
            <Link to= "/signup"><p className='text-center'>Are you new here? <span className='text-indigo-500 underline'>Create a new account.</span></p></Link>
          </form>
      </section>
    </div>
  )
}

export default Login