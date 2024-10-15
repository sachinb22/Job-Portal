import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import axios from 'axios';
import { USER_API_END_POINT } from '../utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import store from '../redux/store';
import { setLoading } from '../redux/authSlice';
import { CircularProgress } from '@mui/material';


const SignUp = () => {

  const [input, setInput] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "",
    file: ""
  })

  const {loading} = useSelector(store => store.auth)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const changeEventHandler = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }
  const changeFileHandler = (e) => {
    setInput({
      ...input,
      file: e.target.files?.[0]
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append("fullName", input.fullName)
    formData.append("email", input.email)
    formData.append("phoneNumber", input.phoneNumber)
    formData.append("password", input.password)
    formData.append("role", input.role)
    if (input.file) {
      formData.append("file", input.file)
    }
    try {
       dispatch(setLoading(true))
      const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        },
        withCredentials: true
      })

      if(res.data.success) {
        navigate("/login")
        toast.success(res.data.message) // Show success message
      }

    } catch (error) {
      console.log(error)
      toast.error(error.response.data.message) // Show error message
    } finally {
      dispatch(setLoading(false))
    }
  }

  return (
    <>
      <section className='rounded container mx-auto w-full lg:w-4/5  p-10 my-10 shadow-custom-card'>

        <h2 className="mb-4 text-2xl tracking-tight font-medium text-gray-900 sm:text-4xl dark:text-black font-lora text-center">
          Sign Up
        </h2>
        <p className="mb-8  font-light text-gray-500 md:mb-12 sm:text-lg dark:text-gray-800 text-center">
          Welcome to Sairaanhoyjat - To get started, please create an account by providing your information below.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-3 gap-5">

            <TextField
              autoComplete="given-name"
              name="fullName"
              value={input.fullName}
              onChange={changeEventHandler}
              required
              fullWidth
              id="fullName"
              label="Full Name"
              autoFocus
            />

            <TextField
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              value={input.email}
              onChange={changeEventHandler}
              autoComplete="email"
            />
            <TextField
              required
              fullWidth
              id="phoneNumber"
              label="Phone Number"
              name="phoneNumber"
              value={input.phoneNumber}
              onChange={changeEventHandler}
           
            />
            <TextField
              required
              fullWidth
              name="password"
              value={input.password}
              onChange={changeEventHandler}
              label="Password"
              type="password"
              id="password"
              autoComplete="new-password"
            />


            <div className="flex flex-col  gap-2">
              <FormLabel id="demo-row-radio-buttons-group-label">Upload Profile Picture</FormLabel>
              <input type="file" accept='image/*' onChange={changeFileHandler} className='cursor-pointer' required />
            </div>
            <div className=''>
              <FormLabel id="demo-row-radio-buttons-group-label" > Select Role</FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group" 
              >
                <FormControlLabel name='role' checked={input.role === 'seeker'} onChange={changeEventHandler} value="seeker" control={<Radio />} label="Job Seeker"  />
                <FormControlLabel name='role' checked={input.role === 'recruiter'} onChange={changeEventHandler} value="recruiter" control={<Radio />} label="Recruiter" />


              </RadioGroup>
            </div>
          </div>
          <div className="flex flex-col mt-8">

            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="I agree to the terms of use and privacy policy."
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Subscribe me to the Sairaanhoitajat.com newsletter."
            />
          </div>


    {
      loading ? <Button  variant="contained" className='!bg-indigo-600  !my-10 !p-4 w-full lg:!w-1/3 !flex !mx-auto'><CircularProgress size={24} sx={{ color: '#fff'}}  className=" transform -translate-x-1/2" /> Please wait</Button> :
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className="!bg-indigo-600 hover:!bg-indigo-700 !my-10 !p-4 w-full lg:!w-1/3 !flex !mx-auto"
          >
            Create Account
          </Button>
    }


          <Link to="/login"><p className='text-center'>Already have an account?  <span className='text-indigo-500 underline'>Login.</span></p></Link>

        </form>
      </section>
    </>
  )
}

export default SignUp