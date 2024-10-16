import React, { useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import DialogTitle from '@mui/material/DialogTitle';
import { CircularProgress } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { USER_API_END_POINT } from '../utils/constant';
import { setUser } from '../redux/authSlice';
import { toast } from 'react-toastify';
import store from '../redux/store';

const UpdateProfileDailogue = ({ open, setOpen }) => {

    const [loading, setLoading] = useState(false)

    const handleCloseDialog = () => {
        setOpen(false);
    };

    const { user } = useSelector(store => store.auth)
    const dispatch = useDispatch()

    const [input, setInput] = useState({
        fullName: user?.fullName || '',
        email: user?.email || '',
        phoneNumber: user?.phoneNumber || '',
        bio: user?.profile?.bio || '',
        skills: user?.profile?.skills?.map(skill => skill) || [],
        file: user?.profile?.resume || null
    });


    const changeEventHandler = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const changeFileHandler = (e) => {
        const file = e.target.files?.[0]
        setInput({
            ...input,
            file
        })
    }

    const submitHandler = async (event) => {
        event.preventDefault()
        setLoading(true) // Start loading spinner
        const formData = new FormData()
        formData.append("fullName", input.fullName)
        formData.append("email", input.email)
        formData.append("phoneNumber", input.phoneNumber)
        formData.append("bio", input.bio)

        // Append skills properly (stringify if it's an array)
        formData.append("skills", JSON.stringify(input.skills))

        if (input.file) {
            formData.append("file", input.file)
        }

        try {
            const res = await axios.post(`${USER_API_END_POINT}/profile/update`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                withCredentials: true
            })

            if (res.data.success) {
                dispatch(setUser(res.data.user))
                toast.success(res.data.message)
            }

        } catch (error) {
            console.log(error)
            toast.error(error.response.data.message || "Something went wrong")
        } finally {
            setLoading(false) // Stop loading spinner
        }

        setOpen(false) // Close the dialog after submission
        console.log(input)
    }

    return (
        <>


            <Dialog
                open={open}
                onClose={handleCloseDialog}
            >
                <DialogTitle>Update Profile</DialogTitle>

                {/* Close button */}
                <IconButton
                    aria-label="close"
                    onClick={handleCloseDialog}
                    sx={(theme) => ({
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: theme.palette.grey[500],
                    })}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </IconButton>
                <form onSubmit={submitHandler}>
                    <DialogContent>

                        <TextField
                            autoFocus
                            required
                            margin="dense"
                            id="fullName"
                            name="fullName"
                            value={input.fullName}
                            onChange={changeEventHandler}
                            label="Name"
                            type="text"
                            fullWidth
                            variant="standard"
                        />
                        <TextField
                            required
                            margin="dense"
                            id="email"
                            name="email"
                            value={input.email}
                            onChange={changeEventHandler}
                            label="Email"
                            type="email"
                            fullWidth
                            variant="standard"
                        />
                        <TextField
                            required
                            margin="dense"
                            id="phoneNumber"
                            name="phoneNumber"
                            value={input.phoneNumber}
                            onChange={changeEventHandler}
                            label="Phone Number"
                            type="text"
                            fullWidth
                            variant="standard"
                        />
                        <TextField
                            required
                            margin="dense"
                            id="bio"
                            name="bio"
                            value={input.bio}
                            onChange={changeEventHandler}
                            label="Bio"
                            type="text"
                            fullWidth
                            variant="standard"
                        />
                        <TextField
                            required
                            margin="dense"
                            id="skills"
                            name="skills"
                            value={input.skills}
                            onChange={changeEventHandler}
                            label="Skills"
                            type="text"
                            fullWidth
                            variant="standard"
                        />
                        <TextField
                            margin="dense"
                            id="file"
                            name="file"
                            onChange={changeFileHandler}
                            label="File"
                            type="file"
                            fullWidth
                            variant="standard"
                            inputProps={{
                                accept: 'application/pdf' // Restrict file type
                            }}
                        />
                    </DialogContent>

                    <DialogActions>
                        {
                            loading ? (
                                <Button variant="contained" disabled>
                                    <CircularProgress size={24} sx={{ color: '#fff' }} />
                                    Please wait
                                </Button>
                            ) : (
                                <Button
                                    type="submit"
                                    variant="contained"
                                    className="!bg-indigo-600 hover:!bg-indigo-700 !p-4 w-full lg:!w-1/3 !flex !mx-auto"
                                >
                                    Update
                                </Button>
                            )
                        }
                    </DialogActions>
                </form>
            </Dialog>

        </>
    )
}

export default UpdateProfileDailogue;
