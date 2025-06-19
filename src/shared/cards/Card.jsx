import React from 'react';
import { FaReact } from 'react-icons/fa';

const Card = ({ cardTitle, bg }) => {
    return (
        <div className={`lg:w-[400px] lg:h-[300px] w-full text-white flex flex-col justify-evenly 
        bg-[#FFFFFF14] rounded-lg p-4 border mb-4 lg:mb-0 
   `}>
            <div>
                <FaReact className='w-24 h-25' />
            </div>
            <div>
                <h4 className='text-3xl font-bold mb-4'>{cardTitle}</h4>
                <p>Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis</p>
            </div>
        </div>
    );
};

export default Card;