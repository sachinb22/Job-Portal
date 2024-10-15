import React from 'react'
import Org1 from '../assets/org1.png'
import { useNavigate } from 'react-router-dom'


const Job = () => {

    const navigate = useNavigate();

    const jobId = "asdfghjk"

    return (
        <div className=''>
            <div className=" flex flex-col sm:flex-row gap-6 items-start border border-indigo-100 rounded-lg cursor-pointer p-4 hover:shadow-custom-card ">
                <div className="logo w-full sm:w-[100px] h-[100px] border-2 rounded border-indigo-100/50">
                    <img src={Org1} alt="" className='object-cover w-full h-full' />
                </div>
                <div className="job_info flex-1">
                    <div className="flex items-center justify-between">
                        <h1 className='font-semibold text-lg'>Medical Doctor - General Practitioner</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                        </svg>
                    </div>

                    <div className='flex flex-wrap items-center gap-2 my-4'>
                        <div className="org_name flex items-center gap-2">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                                </svg>
                            </span>
                            <p className="sm:text-sm text-xs">Public Hospital</p>
                        </div>
                        <div className="org_loc flex items-center gap-2">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                </svg>
                            </span>
                            <p className="sm:text-sm text-xs">Helsinki, Finland</p>
                        </div>
                        <div className="date flex items-center gap-2">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                            </span>
                            <p className="sm:text-sm text-xs">Posted 11 hrs. ago</p>
                        </div>
                    </div>
                    <p className="desc text-sm">MD or equivalent, board certification, and a minimum of 5 years of clinical experience.</p>

                    <button className='mt-4 text-indigo-700'onClick={()=> navigate('/description/${jobId}')} >More details <span aria-hidden="true" className="hidden text-indigo/25 sm:inline">→</span></button>

                    {/* <div class="col-start-1 row-start-4 mt-10 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                        <a class="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-slate-900 text-white hover:bg-slate-700" href="/components"><span>Browse components <span aria-hidden="true" class="hidden text-slate-400 sm:inline">→</span></span></a>
                        <a class="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-white/0 text-slate-900 ring-1 ring-slate-900/10 hover:bg-white/25 hover:ring-slate-900/15 " href="/templates"><span>Explore templates <span aria-hidden="true" class="hidden text-black/25 sm:inline">→</span></span></a>
                    </div> */}
                </div>



            </div>

        </div>
    )
}

export default Job


