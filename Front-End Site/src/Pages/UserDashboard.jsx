import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserDashboard = () => {
    const location = useLocation();

    useEffect(() => {
      if (location.state && location.state.fromLogin) {
        toast.success('Welcome to your profile!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    }, [location.state]);
  return (
    <> 
    <ToastContainer />       
     <section>

        This is user Dashboard. 
     </section>
    
    </>
  )
}

export default UserDashboard