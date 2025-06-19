import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';

const ButtonNav = ({ text }) => {
    return (
        <div className='w-[300px] lg:w-full'>
            <button className='flex justify-between items-center gap-2 border rounded-full pr-2 py-1 cursor-pointer'>
                <span className='border rounded-full md:p-1 font-normal'>
                    <FaArrowRightLong /></span>
                <span>{text}</span>
            </button>
        </div>
    );
};

export default ButtonNav;