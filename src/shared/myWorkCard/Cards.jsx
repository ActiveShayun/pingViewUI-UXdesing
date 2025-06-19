import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';

const Cards = ({ btnText, description, bg, colors }) => {
    return (
        <div className={`${bg ? 'bg-[#c5ff41] text-black rotate-5' : 'bg-black'} p-6 rounded-lg`}>
            <div className='flex justify-between items-center gap-2 mb-3'>
                <button className={`${colors ? 'bg-black another text-white' :
                    'bg-[#c5ffee] text-black'} py-1 px-5 rounded-full border   font-bold`}>
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