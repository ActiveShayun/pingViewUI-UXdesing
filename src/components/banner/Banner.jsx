import React from 'react';
import BannerTitle from '../../shared/bannerTitle/BannerTitle';
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import { PiInstagramLogo } from 'react-icons/pi';
import ButtonBody from '../../shared/button/ButtonBody';

const Banner = () => {
    return (
        <div className='p-12 relative mb-12'>
            <div>
                <BannerTitle />
            </div>
            {/* bottom section */}
            <div className='mt-8  '>
                <div>
                    <div className='-rotate-90  w-[200px] absolute -left-8'>
                        <p className='text-lg font-medium mb-3'>@williamrey</p>
                        <div className='flex  items-center gap-3'>
                            <div className='w-[50px] border-b'></div>
                            <div className='flex  items-center'>
                                <span >
                                    <FaFacebook className='w-[27px]' />
                                </span>
                                <span>
                                    <PiInstagramLogo className='w-[27px]' />
                                </span>
                                <span>
                                    <FaTwitter className='w-[27px]' />
                                </span>
                            </div>
                        </div>
                   </div>
                </div>
                <div className='lg:ml-60 ml-20'>
                   <div>
                    <p className='mb-6 lg:w-3/5'>Building the worlds best marketing websites for over a decade. Your trusted partner for strategy, design, and dev.</p>
                    <ButtonBody text={'Schedule a Call'} />
                </div>
            </div>
        </div>

        </div >
    );
};

export default Banner;