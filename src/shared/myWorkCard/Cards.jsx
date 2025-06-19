import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';

const Cards = ({ btnText, description }) => {
    return (
        <div className=' bg-black p-6 rounded-lg'>
            <div className='flex justify-between items-center gap-2 mb-3'>
                <button className='py-1 px-5 rounded-full border bg-[#c5ffee] text-black font-bold'>
                    {btnText}</button>
                <button className='flex items-center gap-2'>
                    <span><FaArrowRightLong /></span>
                    <span>Read More</span>
                </button>
            </div>
            <p>{description}</p>
        </div>
    );
};

export default Cards;