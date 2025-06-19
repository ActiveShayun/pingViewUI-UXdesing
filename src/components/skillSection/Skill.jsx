import React from 'react';
import { FaArrowDownLong, FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';
import Card from '../../shared/cards/Card';

const Skill = () => {
    return (
        <div className='bg-black p-10 rounded-lg text-white mb-16'>
            <div>
                <div className='flex items-center text-white'>
                    <span >
                        <FaArrowDownLong
                            className='w-[44px] h-[44px] rounded-full border-2 p-2' /></span>
                    <button className='py-2 px-3 rounded-full border-2'>Why Choose me</button>
                </div>
            </div>
            {/* title & description */}
            <div className='lg:flex justify-between items-center'>
                <div>
                    <h3 className='lg:text-6xl text-5xl font-bold leading-20'>My Extensive
                        <span className='block'>List of Skills</span></h3>
                </div>
                <div>
                    <p className='text-right'>
                        <span className='block'>Building the worlds best marketing Your </span>
                        <span>trusted partner for strategy, design, and dev.</span>
                    </p>
                </div>
            </div>
            {/* skill card section */}
            <div>
                <div className='flex items-center gap-3 justify-end my-6'>
                    <FaArrowLeftLong
                        className='w-[44px] h-[44px] rounded-full border-2 p-2' />
                    <FaArrowRightLong
                        className='w-[44px] h-[44px] rounded-full border-2 p-2' />
                </div>
                {/* cards */}
                <div className='lg:flex items-center justify-center  gap-4'>
                    <div className='lg:w-[430px] lg:h-[300px]'><Card /></div>
                    <div className='lg:rotate-4 lg:w-[430px] lg:h-[300px]'>
                        <Card />
                    </div>
                    <div className='lg:-rotate-4 lg:w-[430px] lg:h-[300px]'>
                        <Card />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skill;