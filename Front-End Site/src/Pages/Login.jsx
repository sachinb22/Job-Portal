import React, { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios';
import { USER_API_END_POINT } from '../utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading, setUser } from '../redux/authSlice';
import store from '../redux/store';



const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    // .min(6, 'Password should be of minimum 6 characters length')
    // .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    // .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    // .matches(/\d/, 'Password must contain at least one number')
    // .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character')
    .required('Password is required'),
});

const Login = () => {

  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false);

  const { loading } = useSelector(store => store.auth)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const rememberedEmail = localStorage.getItem('rememberedEmail');
  //   if (rememberedEmail) {
  //     formik.setFieldValue('email', rememberedEmail);
  //     setRememberMe(true);
  //   }
  // }, []);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleRememberMeChange = (event) => {
    setRememberMe(event.target.checked);
  };

  const handleForgotPasswordClick = () => {
    navigate('/forgot-password');
  };


  const [input, setInput] = useState({
    email: "",
    password: "",
    role: ""
  })

  const changeEventHandler = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      dispatch(setLoading(true))
      const res = await axios.post(`${USER_API_END_POINT}/login`, input, {
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true,
      })
      if (res.data.success) {
        dispatch(setUser(res.data.user))
        navigate("/dashboard")
        toast.success(res.data.message) // Show success message
      }
    } catch (error) {
      console.log(error)
      // Handle errors where a response is returned from the server
      if (error.response) {
        const { message } = error.response.data;
        toast.error(message); // Show backend error message
      } else if (error.request) {
        // No response received (e.g., network error)
        toast.error("No response from server. Please check your connection.");
      } else {
        // Other errors (unexpected errors)
        toast.error("An unexpected error occurred.");
      }
    }
    finally {
      dispatch(setLoading(false))
    }

  }

  return (
    <div>

      <section className=' container mx-auto w-full lg:w-2/5  p-10 my-10 rounded shadow-custom-card'>

        <h2 className="mb-4 text-2xl tracking-tight font-medium text-gray-900 sm:text-4xl dark:text-black font-lora text-center">
          Login
        </h2>
        <p className="mb-8 font-light text-gray-500 md:mb-12 sm:text-lg dark:text-gray-800 text-center">
          Welcome to Sairaanhoyjat - Please enter your email and password to access your profile.
        </p>
        <form onSubmit={handleSubmit} noValidate>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={input.email}
            onChange={changeEventHandler}

          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type={showPassword ? 'text' : 'password'}
            id="password"
            autoComplete="current-password"
            value={input.password}
            onChange={changeEventHandler}

            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <EyeSlashIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <div className=''>
            <FormLabel id="demo-row-radio-buttons-group-label">Select Role</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel name='role' checked={input.role === 'seeker'} value="seeker" onChange={changeEventHandler} control={<Radio />} label="Job Seeker" />
              <FormControlLabel name='role' checked={input.role === 'recruiter'} value="recruiter" onChange={changeEventHandler} control={<Radio />} label="Recruiter" />


            </RadioGroup>
          </div>

          <div className='flex items-center flex-wrap justify-between'>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
              checked={rememberMe}
              onChange={handleRememberMeChange}
            />
            <Link to="" className='hover:text-indigo-600' onClick={handleForgotPasswordClick}>Forgot Password?</Link>
          </div>

          {
            loading ? <Button  variant="contained" className='!bg-indigo-600 hover:!bg-indigo-700 !my-10 !p-4 w-full lg:!w-1/3 !flex !mx-auto'><CircularProgress size={24} sx={{ color: '#fff'}}  className=" transform -translate-x-1/2" /> Please wait</Button> : <Button
              type="submit"
              
              variant="contained"
              className="!bg-indigo-600 hover:!bg-indigo-700 !my-10 !p-4 w-full lg:!w-1/3 !flex !mx-auto"
            >
              Login

            </Button>
          }



          <Link to="/signup" > <p className='text-center'> Are you new here? <span className='text-indigo-500 underline'>Create a new account.</span></p></Link>
        </form>
      </section>
    </div>
  )
}

export default Login