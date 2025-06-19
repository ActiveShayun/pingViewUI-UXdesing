import Banner from '../components/banner/Banner';
import Skill from '../components/skillSection/Skill';
import AboutSection from '../components/aboutSection/AboutSection';
import MyWork from '../components/myWorkSection/MyWork';


const Home = () => {
    return (
        <div className='max-w-7xl'>
            <Banner />
            <Skill />
            <AboutSection />
            <MyWork/>
        </div>
    );
};

export default Home;