import OurServiceCard from "../OurServiceCard"

const OurService = () => {
    return (
        <div className="flex flex-col items-center justify-center  p-[66px] h-auto w-auto bg-gradient-to-br from-blue-500 to-indigo-500 text-white">
            <div className="flex flex-col items-center justify-center gap-5">
                <h1 className="text-4xl font-bold">OUR SERVICE</h1>
                <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.</p>

                <OurServiceCard/>
            </div>
        </div>
    )
}

export default OurService
