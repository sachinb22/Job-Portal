import React from 'react'
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';

const filterData = [
    {
        filterType: "Location",
        arry: ["Helsinki", "Espoo", "Joensuu", "Kuopio"]
    },
    {
        filterType: "Industry",
        arry: [" Nurse", "Doctor", "Surgeon", "Pharmacist"]
    },
    {
        filterType: "Salary",
        arry: ["0-40k", "42-1lakh", "1lakh- 5lakh"]
    },
]

const FilterCard = () => {
    return (
        <section className='w-full bg-white p-3 rounded-md border'>
            <h1 className='font-bold text-lg'>Filter Jobs</h1>
            <hr className='my-2'/>
            <RadioGroup
          
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group" 
            >
                {
                    filterData.map((data, index) => (
                        <div key={index}>
                            <h3 className='text-lg font-bold'>{data.filterType}</h3>
                            
                     
                                {
                                    data.arry.map((item, idx) => (
                                        <div className='flex '>

                                            <FormControlLabel 
                                                key={idx}
                                                value={item} 
                                                control={<Radio />} 
                                                label={item} 
                                                
                                            />
                                        </div>
                                    ))
                                }
                         
                           
                        </div>
                    ))
                }
            </RadioGroup>
        </section>
    )
}

export default FilterCard;
