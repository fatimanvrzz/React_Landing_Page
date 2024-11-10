import React, { ReactElement, useState } from "react";
import backgroundImageUrl from '../assets/intro-bg.jpg';
import Features from "../components/Features";


const IndexPage: React.FC = () => {

    return (
        <div className="w-screen overflow-x-hidden">
            {/* Navbar */}
            <div className="flex flex-row items-center gap-20 justify-between h-20 m-0 p-0 text-base border-2 border-white">
                <h1 className="ml-36 text-2xl font-bold">REACT LANDING PAGE</h1>

                <ul className="flex items-center justify-between text-lg cursor-pointer text-gray-500 gap-14 mr-36">
                    <li>Features</li>
                    <li>About</li>
                    <li>Service</li>
                    <li>Gallery</li>
                    <li>Testimonials</li>
                    <li>Team</li>
                    <li>Contact</li>
                </ul>
            </div>

            {/* Background Section */}
            <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
                <div className="absolute inset-0 bg-black opacity-40"></div>

                <div className="absolute w-screen h-screen flex flex-col items-center justify-center text-center text-white">
                    <div className="font-serif font-bold text-wrap text-6xl w-[600px]">
                        WE ARE A LANDING PAGE
                    </div>
                    <div className="mt-2 text-2xl w-[600px]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit pariatur minima mollitia nam.
                    </div>

                    <button
                        type="button"
                        className="w-28 h-12 mt-14 flex justify-center items-center uppercase
                        text-white bg-gradient-to-br from-blue-500 to-indigo-500 
                        hover:bg-gradient-to-br hover:from-blue-600 hover:to-indigo-400
                        font-medium rounded-3xl text-[13px] p-3.5 me-2 mb-2 
                        focus:outline-none focus:ring-4 focus:ring-blue-300 
                        transition-all duration-1000 ease-in-out">
                        Learn More
                    </button>
                </div>
            </div>
            <Features />
        </div>
    );

};

export default IndexPage;
