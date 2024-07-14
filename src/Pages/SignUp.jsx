import React from 'react'
import TextField from '@mui/material/TextField';


const SignUp = () => {
  return (
    <>
      <section className='rounded container mx-auto w-full lg:w-4/5  p-10 my-10 shadow-custom-card'>

        <h2 className="mb-4 text-2xl tracking-tight font-medium text-gray-900 sm:text-4xl dark:text-black font-lora text-center">
          Sign Up
        </h2>
        <p className="mb-8  font-light text-gray-500 md:mb-12 sm:text-lg dark:text-gray-800 text-center">
        Welcome to Sairaanhoyjat - To get started, please create an account by providing your information below.
        </p>

      <form action="">
        <div className="grid grid-cols-3 gap-5">

        <TextField
          autoComplete="given-name"
          name="firstName"
          required
          fullWidth
          id="firstName"
          label="First Name"
          autoFocus
        />
        <TextField
          autoComplete="city"
          name="cityName"
          required
          fullWidth
          id="cityName"
          label="City"
          
        />
        <TextField
          autoComplete=""
          name="stateName"
          required
          fullWidth
          id="stateName"
          label="State / Province"
          
        />
        <TextField
          autoComplete="postalCode"
          name="postal"
          required
          fullWidth
          id="postalCode"
          label="Postal Code"
         
        />
        <TextField
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
        />
         <TextField
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="new-password"
        />
         <TextField
          required
          fullWidth
          name="confirmPassword"
          label="Confirm Password"
          type="confirmPassword"
          id="confirmPassword"
          autoComplete="new-password"
        />
        </div>
      </form>
      </section>
    </>
  )
}

export default SignUp