import { FaArrowDownLong } from 'react-icons/fa6';
import Title from '../../shared/title/Title';
import Cards from '../../shared/myWorkCard/Cards';

const MyWork = () => {
    return (
        <div className='mt-24 bg-[#141414] text-white p-4 lg:p-10 rounded-lg'>
            <div className='lg:flex items-center gap-8 mb-4'>'
                <div>
                    <div className='flex items-center mb-2'>
                        <span >
                            <FaArrowDownLong
                                className='w-[44px] h-[44px] rounded-full border-2 p-2' /></span>
                        <button className='py-2 px-3 rounded-full border-2'> Choose me</button>
                    </div>
                </div>
                <div>
                    <Title text={'My Work Process'} />
                </div>
            </div>
            {/* cards */}
            <div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mt-12'>
                    <Cards btnText={'Discovery'} description="We start every new client interaction
                    with an in-depth discovery call where
                     we get to know each other, discuss
                     current and future objectives,
                      and recommend the best course of
                                    action."
                    />
                    <Cards colors={true} bg={true} btnText={'Strategy'} description="Every end-to-end project of ours
                    begins with a tEspoke pre-build
                    strateu. From brand ID consultation
                    to in-depth ccxle reviews we're here
                    to set the stage for success."/>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2  gap-4 mt-6'>
                    <Cards btnText={'Design'} description="After we have a comprehensive
                    understanding of your brand, we'll be
                    ready to move onto design. Each page
                    or will be designed, reviewed,
                    and given your stamp of approval."
                    />
                    <Cards btnText={'Build'} description="Whether we've just finished
                    designing your new site or you're
                    handing off finished designs for us to
                    develop in Webflow, we're here to
                    apply our trusted development
                    process to your project."/>
                </div>

            </div>
        </div>
    );
};

export default MyWork;