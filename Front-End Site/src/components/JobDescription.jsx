import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setSingleJob } from '../redux/jobSlice'
import axios from 'axios'
import { APPLICATION_API_END_POINT, JOB_API_END_POINT } from '../utils/constant'
import { formatDistanceToNow, parseISO } from 'date-fns';
import { toast } from 'react-toastify';
import JobList from './JobList'


const JobDescription = () => {

    
    const params = useParams()
    const jobId = params.id;
    const { singleJob } = useSelector(store => store.job)
    const {user} = useSelector(store => store.auth)
    const dispatch = useDispatch()
    
    const isInitiallyApplied = singleJob?.applications?.some(application => application.applicant === user?._id) || false

    const [isApplied, setIsApplied] = useState(isInitiallyApplied)

    const applyJobHandler = async() => {
        try {
            const res  = await axios.get(`${APPLICATION_API_END_POINT}/apply/${jobId}`, { withCredentials: true })
            if(res.data.success) {
            setIsApplied(true)
            const updatedSingleJob = {...singleJob, applications: [...singleJob.applications, {applicant:user?._id}]}
            dispatch(setSingleJob(updatedSingleJob))
             toast.success(res.data.message)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        const fetchSingleJob = async () => {
            try {
                const res = await axios.get(`${JOB_API_END_POINT}/get/${jobId}`, { withCredentials: true })
                console.log(res)
                if (res.data.success) {
                    dispatch(setSingleJob(res.data.job))
                    setIsApplied(res.data.job.applications.some(application => application.applicant === user?._id))
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchSingleJob()
    }, [jobId, dispatch, user?._id])


    const getTimeSincePosted = (dateString) => {
        const jobDate = parseISO(dateString)
        return formatDistanceToNow(jobDate, { addSuffix: true })
    }

    return (
        <div className='container mx-auto pt-10 pb-10 px-8'>

            <div className="flex justify-between">
                <h1 className='font-bold text-xl'>{singleJob?.title}</h1>
                <button onClick={isApplied ? null : applyJobHandler}  className={`inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 ${isApplied ? 'bg-gray-300 cursor-not-allowed opacity-50' : ' bg-indigo-900 text-white hover:bg-indigo-700'}`} href=""><span>{isApplied ? 'Already Applied' : 'Apply Now'} </span></button>
            </div>

            <div className='flex flex-wrap items-center gap-2 my-4'>
                <div className="org_name flex items-center gap-2">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                        </svg>
                    </span>
                    <p className="sm:text-sm text-xs">{singleJob?.company?.name}</p>
                </div>
                <div className="org_loc flex items-center gap-2">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>
                    </span>
                    <p className="sm:text-sm text-xs">{singleJob?.location}</p>
                </div>
                <div className="date flex items-center gap-2">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </span>
                    <p className="sm:text-sm text-xs">Posted {singleJob?.createdAt ? getTimeSincePosted(singleJob.createdAt) : 'Date not available'}</p>
                    {/* <p className="sm:text-sm text-xs">Posted {singleJob?.createdAt.split("T"[0])}</p> */}
                </div>
            </div>

            <h2 className='border-b-2 border-b-gray-300 font-bold text-lg py-4'>{singleJob?.description}</h2>
            <div className='pt-3'>
                <p className='font-semibold text-base'>Role: <span className='text-base font-medium ml-3'>{singleJob?.title}</span></p>
                <p className='font-semibold text-base'>Location: <span className='text-base font-medium ml-3'>{singleJob?.location}</span></p>
                <p className='font-semibold text-base'>Description: <span className='text-base font-medium ml-3'>{singleJob?.description}</span></p>
                <p className='font-semibold text-base'>Experience: <span className='text-base font-medium ml-3'>{singleJob?.experienceLevel} years</span></p>
                <p className='font-semibold text-base'>Salary: <span className='text-base font-medium ml-3'>{singleJob?.salary}</span></p>
                <p className='font-semibold text-base'>Total Applicants: <span className='text-base font-medium ml-3'> {singleJob?.applications?.length}</span></p>
            </div>


        {/* View Similar jobs */}
        <div>
            {<JobList />}
        </div>
        </div>
    )
}

export default JobDescription