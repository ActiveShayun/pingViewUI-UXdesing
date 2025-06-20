import React from 'react';
import { FaArrowDownLong } from 'react-icons/fa6';
import ButtonBody from '../../shared/button/ButtonBody';
import { SlEnvolopeLetter } from 'react-icons/sl';
import Form from '../form/Form';

const Contact = () => {
    return (

        <div className='lg:py-10 px-4 py-8  grid lg:grid-cols-5 grid-cols-1 justify-between items-center bg-gradient-to-bl from-[#caff0f] to-white'>
            <div className='col-span-3'>
                <div>
                    <div className='flex items-center mb-2'>
                        <span >
                            <FaArrowDownLong
                                className='w-[44px] h-[44px] rounded-full border-2 p-2' /></span>
                        <button className='py-2 px-3 rounded-full border-2'>
                            Contact</button>
                    </div>
                </div>
                <div>
                    <h2 className='mb-2 text-5xl lg:text-6xl font-bold'>
                        Interested in
                        <br className='hidden lg:block' />
                        <span className='my-4 inline-block'>
                            <span className='bg-black inline-block text-white px-2 rounded-xl'>
                                work
                            </span>
                            together?
                        </span>
                    </h2>
                    <p className='lg:w-4/5 mb-5'>We start every new client interaction with an in-depth discovery call where
                        we get to know each other</p>
                    <ButtonBody text={'Schedule a Call'} />
                </div>
            </div>
            {/* form section */}
            <div className='w-full col-span-2'>
                <Form />
            </div>
        </div >
    );
};

export default Contact;