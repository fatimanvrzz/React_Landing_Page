import React, { useState } from "react";
import { LuMessagesSquare } from "react-icons/lu";
import { IoMegaphoneSharp } from "react-icons/io5";
import { BsPeopleFill } from "react-icons/bs";
import { FaWandMagicSparkles } from "react-icons/fa6";

type FeaturesData = {
    Icon: JSX.Element;
    Title: string;
    Description: string;
};

const Features: React.FC = () => {

    // featuresCard array'sindeki öğeleri tanımlıyoruz
    const featuresCard: FeaturesData[] = [
        {
            Icon: <LuMessagesSquare />,
            Title: "Lorem Ipsum",
            Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet atque ipsa voluptatibus odit amet temporibus.",
        },
        {
            Icon: <IoMegaphoneSharp />,
            Title: "Lorem Ipsum",
            Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet atque ipsa voluptatibus odit amet temporibus.",
        },
        {
            Icon: <BsPeopleFill />,
            Title: "Lorem Ipsum",
            Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet atque ipsa voluptatibus odit amet temporibus.",
        },
        {
            Icon: <FaWandMagicSparkles />,
            Title: "Lorem Ipsum",
            Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet atque ipsa voluptatibus odit amet temporibus.",
        },
    ];

    return (
        <div className=" bg-gray-100 w-screen h-auto mx-auto p-8" id="features">
            <div className="w-[80%] m-auto">
                <h2 className="text-center font-bold mb-10 text-4xl tracking-wide">
                    FEATURES
                </h2>

                <div className="flex gap-6 justify-center">

                    {featuresCard.map((feature, index) => (
                        <div key={index} className="flex flex-col items-center p-6" >
                            {/* Icon */}
                            <div className="flex items-center justify-center mb-4 p-4 text-2xl text-white rounded-full bg-gradient-to-br from-blue-500 to-indigo-500" style={{ width: "80px", height: "80px" }} >
                                {feature.Icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-semibold">{feature.Title}</h3>

                            {/* Description */}
                            <p className="mt-2 text-center text-sm">{feature.Description}</p>
                        </div>
                    ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Features;
