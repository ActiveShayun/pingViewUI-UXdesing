import React from 'react';
import { FaArrowDownLong } from 'react-icons/fa6';
import ButtonDemo from '../../shared/button3/ButtonDemo';

const AboutSection = () => {
    return (
        <div>
            <div className='to-white
             rounded-lg'>
                <div className='bg-gradient-to-br from-[#caff11] pt-28 lg:px-12 px-4'>
                    <div >
                        <div className='flex items-center justify-end text-black'>
                            <span >
                                <FaArrowDownLong
                                    className='w-[44px] h-[44px] rounded-full border-2 p-2' /></span>
                            <button className='py-2 px-3 rounded-full border-2'> About</button>
                        </div>
                        {/* title */}
                        <div>
                            <h3 className='lg:text-7xl text-black text-5xl font-bold text-center mt-8'>
                                I’ve been
                                <span className='bg-black text-white rounded-xl ml-2 px-2 inline-block pb-2 my-2 lg:my-0 lg:mb-4'>
                                    Developing</span> <br className='hidden lg:block ' />
                                Websites since
                                <span className='bg-black text-white rounded-xl ml-2 px-2 inline-block pb-2 mt-2'>
                                    2013</span></h3>
                        </div>
                    </div>
                </div>

                <div>
                    <p className='text-center lg:w-3/6 mx-auto mt-4'>
                        We start every new client interaction with an in-depth discovery call where
                        we get to know each other and recommend the best course of
                        action</p>
                    <div className='grid grid-cols-1 lg:grid-cols-11 mt-16'>
                        {/* PREVIOUSLY WORKED ON */}
                        <div className='col-span-3 lg:pl-14'>
                            <h5 className='text-2xl font-bold'>
                                PREVIOUSLY <br /> WORKED ON</h5>
                        </div>
                        <div className='col-span-8'>
                            <div className='flex justify-between items-center'>
                                <div className='rotate-13 bg-black rounded-full text-white lg:ml-14'>
                                    <ButtonDemo text={'awwwards.'} />
                                </div>
                                <div className='flex justify-between flex-wrap items-center'>
                                    <div>
                                        <ButtonDemo text={'Facebook'} />
                                    </div>
                                    <div className='lg:rotate-12'>
                                        <ButtonDemo text={'Css Design Awards'} />
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center flex-wrap gap-6 mt-2'>
                                <ButtonDemo text={'Css Winner'} />
                                <div className='-rotate-4'>
                                    <ButtonDemo text={'/thoughtworks'} />
                                </div>
                                <ButtonDemo text={'AUTODESK'} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AboutSection;