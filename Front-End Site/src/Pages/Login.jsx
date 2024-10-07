import React, { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik';
import * as yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';
import CircularProgress from '@mui/material/CircularProgress';



const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(6, 'Password should be of minimum 6 characters length')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/\d/, 'Password must contain at least one number')
    .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character')
    .required('Password is required'),
});

const Login = () => {

  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const rememberedEmail = localStorage.getItem('rememberedEmail');
    if (rememberedEmail) {
      formik.setFieldValue('email', rememberedEmail);
      setRememberMe(true);
    }
  }, []);

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

  const formik = useFormik ({
    initialValues: {
      email: '',
      password:'',
    },
    validationSchema: validationSchema,
    onSubmit: async(values, {resetForm}) => {

      setLoading(true);
      //API Call

      try {

        const response = await fakeLoginApiCall(values.email, values.password)

        if (response.success) {
          if (rememberMe) {
            localStorage.setItem('rememberedEmail', values.email)
          }else {
            localStorage.removeItem('rememberedEmail')
          }

          toast.success('Login successful! Redirecting to your dashboard...', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });

          navigate('/dashboard') //redirect to user profile page
          resetForm();

        }else {
          setLoading(false);

          toast.error('Invalid email or password. Please try again.', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
        
      } catch (error) {
        toast.error('An error occurred. Please try again later.', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }

    },
  })

  // Simulate an API call
  const fakeLoginApiCall = (email, password) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (email === 'user@test.com' && password === 'P@ssw0rd') {
          resolve({ success: true });
        } else {
          resolve({ success: false });
        }
      }, 1000);
    });
  };

  return (
    <div>
      <ToastContainer />
      <section className=' container mx-auto w-full lg:w-2/5  p-10 my-10 rounded shadow-custom-card'>
      
        <h2 className="mb-4 text-2xl tracking-tight font-medium text-gray-900 sm:text-4xl dark:text-black font-lora text-center">
          Login
        </h2>
        <p className="mb-8 font-light text-gray-500 md:mb-12 sm:text-lg dark:text-gray-800 text-center">
          Welcome to Sairaanhoyjat - Please enter your email and password to access your profile.
        </p>
          <form action="" onSubmit={formik.handleSubmit} noValidate>
            <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
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
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.password && Boolean(formik.errors.password)}
                  helperText={formik.touched.password && formik.errors.password}
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

            <div className='flex items-center flex-wrap justify-between'>
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
                checked= {rememberMe}
                onChange={handleRememberMeChange}
              />
              <Link to="" className='hover:text-indigo-600' onClick={handleForgotPasswordClick}>Forgot Password?</Link>
            </div>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              className="!bg-indigo-600 hover:!bg-indigo-700 !my-10 !p-4 w-full lg:!w-1/4 !flex !mx-auto"
              disabled={loading}
            >
              {loading && <CircularProgress size={24} className="absolute left-1/2 transform -translate-x-1/2" />}
              {!loading && 'Login'}
            
            </Button>
            <Link to= "/signup" > <p className='text-center'> Are you new here? <span className='text-indigo-500 underline'>Create a new account.</span></p></Link>
          </form>
      </section>
    </div>
  )
}

export default Login