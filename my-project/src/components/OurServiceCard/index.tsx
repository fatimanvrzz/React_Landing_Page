
import React, { useState } from "react";
import { IoBalloonSharp } from "react-icons/io5";
import { SlBasket } from "react-icons/sl";
import { IoCloudDone } from "react-icons/io5";
import { SiGoogletranslate } from "react-icons/si";
import { BiSolidPlaneAlt } from "react-icons/bi";
import { FaChartPie } from "react-icons/fa";

type OurServiceCardData = {
    Icon: JSX.Element;
    Title: string;
    Description: string;
}



const OurServiceCard: React.FC = () => {

    const [activeOurServiceCard, setActiveOurServiceCard] = useState(0);


    const ServiceCard: OurServiceCardData[] = [
        {
            Icon: <IoBalloonSharp />,
            Title: "Lorem ipsum",
            Description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum ipsa, necessitatibus aperiam quibusdam ratione illum!",
        },
        {
            Icon: <SlBasket />,
            Title: "Lorem ipsum",
            Description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum ipsa, necessitatibus aperiam quibusdam ratione illum!",
        },
        {
            Icon: <IoCloudDone />,
            Title: "Lorem ipsum",
            Description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum ipsa, necessitatibus aperiam quibusdam ratione illum!",
        },
        {
            Icon: <SiGoogletranslate />,
            Title: "Lorem ipsum",
            Description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum ipsa, necessitatibus aperiam quibusdam ratione illum!",
        },
        {
            Icon: <BiSolidPlaneAlt />,
            Title: "Lorem ipsum",
            Description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum ipsa, necessitatibus aperiam quibusdam ratione illum!",
        },
        {
            Icon: <FaChartPie />,
            Title: "Lorem ipsum",
            Description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum ipsa, necessitatibus aperiam quibusdam ratione illum!",
        },
    ];

    return (
        <div className="grid grid-cols-3 mx-20 ">
            {ServiceCard.map((service, index) => (
                <div key={index} className="flex flex-col mt-4 items-center justify-center text-center" onClick={() => setActiveOurServiceCard(index)}>

                    {/* Icon */}
                    <div className="flex items-center justify-center mb-4 p-4 text-3xl text-white rounded-full bg-gradient-to-br from-blue-500 to-indigo-300" style={{ width: "80px", height: "80px" }}>
                        {service.Icon}
                    </div>
                   
                    <div className="">
                         {/* Title */}
                        <h3 className="text-xl font-semibold">{service.Title}</h3>

                        {/* Description */}
                        <p className="mt-2 mx-[85px] text-center text-sm flex">{service.Description}</p>
                    </div>

                </div>
            ))}
        </div>
    )
}

export default OurServiceCard
