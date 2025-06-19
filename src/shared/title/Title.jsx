import React from 'react';

const Title = ({ text }) => {
    return (
        <div>
            <h3 className='lg:text-6xl text-5xl font-bold'>{text}</h3>
        </div>
    );
};

export default Title;