import FeaturesCard from "../Features Card";


function Features() {
    return (
        <div className="mt-42 bg-customNoiseWhite w-screen h-[300px] mx-auto" id="features">
            <div className="w-[80%] m-auto" >
                <h2 className="text-center font-bold mb-10 p-4 text-2xl tracking-wide">
                    FEATURES
                </h2>

                <div className="flex gap-3">
                    <FeaturesCard logo={"message"} />
                    <FeaturesCard logo={"megaphone"} />
                    <FeaturesCard logo={"people"} />
                    <FeaturesCard logo={"magicwand"} />
                </div>
            </div>
        </div>
    )
}

export default Features;
