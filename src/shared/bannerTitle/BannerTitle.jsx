import React from 'react';

const BannerTitle = () => {
    return (
        <div>
            <div className='px-4'>
                <h2 className='lg:text-7xl text-black text-5xl font-bold lg:mb-6 text-left'>Trusted
                    <span className='bg-black text-white rounded-xl ml-2 px-2 inline-block pb-2'>
                        Partner</span> for </h2>
                <h2 className='text-5xl text-black lg:text-7xl font-bold'>
                    Your Website
                    <span className='bg-black text-white rounded-xl ml-2 px-2 inline-block pb-2 mt-3 lg:mt-0'>
                        Develop.</span>   </h2>
            </div>
        </div>
    );
};

export default BannerTitle;