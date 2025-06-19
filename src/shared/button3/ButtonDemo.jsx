import React from 'react';

const ButtonDemo = ({ text }) => {
    return (
        <div>
            <button className='lg:w-[276px] border rounded-full lx:px-10 px-4 py-2 cursor-pointer'>
                {text}
            </button>
        </div >
    );
};

export default ButtonDemo;