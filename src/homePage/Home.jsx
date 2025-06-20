import Banner from '../components/banner/Banner';
import Skill from '../components/skillSection/Skill';
import AboutSection from '../components/aboutSection/AboutSection';
import MyWork from '../components/myWorkSection/MyWork';
import Contact from '../components/contactSection/Contact';


const Home = () => {
    return (
        <div className='max-w-7xl'>
            <Banner />
            <Skill />
            <AboutSection />
            <MyWork/>
            <Contact/>
        </div>
    );
};

export default Home;