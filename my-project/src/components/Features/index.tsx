import React, { useState } from "react";
import { IoChatbubblesOutline } from "react-icons/io5";

type FeaturesData = {
    Icon: JSX.Element;
    Title: string;
    Description: string;
};

const Features: React.FC = () => {
    const [activeServiceFeatures, setActiveServiceFeatures] = useState(0);

    // featuresCard array'sindeki öğeleri tanımlıyoruz
    const featuresCard: FeaturesData[] = [
        {
            Icon: <IoChatbubblesOutline />,
            Title: "Lorem Ipsum",
            Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet atque ipsa voluptatibus odit amet temporibus.",
        },
        {
            Icon: <IoChatbubblesOutline />,
            Title: "Lorem Ipsum",
            Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet atque ipsa voluptatibus odit amet temporibus.",
        },
        {
            Icon: <IoChatbubblesOutline />,
            Title: "Lorem Ipsum",
            Description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet atque ipsa voluptatibus odit amet temporibus.",
        },
        {
            Icon: <IoChatbubblesOutline />,
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
                        <div key={index} className="flex flex-col items-center p-6 border-2 rounded-lg" onClick={() => setActiveServiceFeatures(index)} >
                            {/* Icon */}
                            <div className="flex items-center justify-center mb-4 p-4 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500" style={{ width: "80px", height: "80px" }} >
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
