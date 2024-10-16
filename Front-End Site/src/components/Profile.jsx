import React, { useState } from 'react'
import Chip from '@mui/material/Chip';
import ApplliedJobTable from './ApplliedJobTable';
import UpdateProfileDailogue from './UpdateProfileDailogue';
import { useSelector } from 'react-redux';
import store from '../redux/store';


const isResume = true

const Profile = () => {

    const [open, setOpen] = useState(false)

    const { user } = useSelector(store => store.auth)

    const handleOpenDialog = () => {
        setOpen(true);
    };




    return (
        <section className='container mx-auto pt-14 px-8'>

            <div className=' flex items-start gap-4  bg-white border border-red-200 rounded-2xl p-4 my-5'>
                <div><img src={user?.profile?.profilePhoto} alt="profile image" className='w-28 rounded-lg' /></div>
                <div>
                    <h2 className='text-lg font-bold'>{user?.fullName}</h2>
                    <span>{user?.profile?.bio}</span>
                    <div className="flex gap-4">

                        <div className='flex items-center gap-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                            </svg>
                            <p>{user?.email}</p>
                        </div>
                        <div className='flex items-center gap-3'>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                            </svg>
                            <p>{user?.phoneNumber}</p>

                        </div>
                    </div>
                    <div>
                        <h3>Skills</h3>
                        <div className='flex justify-between'>
                            {
                                user?.profile?.skills.length != 0 ?
                                    user?.profile?.skills.map((item, index) => {
                                        return (


                                            <Chip key={index} label={item.replace(/['"]+/g, '')} />

                                        )
                                    }) : <span> NA</span>
                            }
                        </div>

                        <h3>Resume</h3>
                        {isResume ? <a href='https://sachinbasnet.framer.ai/' target='blank'> {user?.profile?.resume}</a> : <span> NA</span>}
                    </div>

                    <div className="border">
                        <h2>Applied Jobs</h2>
                        <ApplliedJobTable />
                    </div>

                </div>

                <div onClick={handleOpenDialog} >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                    </svg>

                </div>
            </div>
            <UpdateProfileDailogue open={open} setOpen={setOpen} />
        </section>
    )
}

export default Profile