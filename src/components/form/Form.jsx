import React from 'react';
import { SlEnvolopeLetter } from 'react-icons/sl';

const Form = () => {
    return (
        <div className='w-full mt-8 lg:mt-0'>
            <div className='bg-black p-4 col-span-2 rounded-lg w-full'>
                <form action="" className='space-y-4'>
                    <input type="text" placeholder='Enter your name'
                        className='text-white border-b border-white p-3 block w-full' />
                    <input type="email" placeholder='Your email address'
                        className='text-white border-b border-white p-3 block w-full' />
                    <input type="text" placeholder='Describe your project'
                        className='text-white border-b border-white p-3 block w-full' />
                    <div className='flex items-center gap-3.5 mt-8'>
                        <button className='py-1 px-4 rounded-full border border-white text-white'>Send</button>
                        <span className='text-white'> or</span>
                        <button className='py-1 pr-4 rounded-full border border-white text-white flex gap-2 items-center justify-center'>
                            <span className='border p-2 rounded-full'><SlEnvolopeLetter /></span>Contact me</button>
                    </div>
                </form>
            </div >
        </div>
    );
};

export default Form;