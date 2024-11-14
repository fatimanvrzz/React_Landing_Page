import backgroundImageUrl from '../assets/intro-bg.jpg';
import AboutUs from '../components/AboutUs';
import ClientComment from '../components/ClientComment';
import Features from "../components/Features";
import Gallery from '../components/Gallery';
import GetInTouch from '../components/Get In Touch';
import MeetTheTeam from '../components/MeetTheTeam';
import Navbar from '../components/Navbar';
import OurService from '../components/OurService';


const IndexPage: React.FC = () => {

    return (
        <div className="w-screen">

            <Navbar />

            {/* Background Section */}
            <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
                <div className="absolute inset-0 bg-black opacity-20"></div>

                <div className="absolute w-screen h-screen flex flex-col items-center justify-center text-center text-white">
                    <div className="font-serif font-bold text-wrap text-6xl w-[600px]">
                        WE ARE A LANDING PAGE
                    </div>
                    <div className="mt-2 text-2xl w-[600px]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit pariatur minima mollitia nam.
                    </div>

                    <button
                        type="button"
                        className="w-40 h-12 mt-10 flex justify-center items-center uppercase
                        text-white bg-gradient-to-br from-blue-500 to-indigo-500 
                        hover:bg-gradient-to-br hover:from-blue-600 hover:to-indigo-400
                        font-medium rounded-full text-sm p-3.5 me-2 mb-2 
                        transition-shadow duration-1000 ease-in">
                        Learn More
                    </button>
                </div>
            </div>

            <Features />
            <AboutUs />
            <OurService />
            <Gallery />
            <ClientComment />
            <MeetTheTeam />
            <GetInTouch/>

        </div>
    );

};

export default IndexPage;
