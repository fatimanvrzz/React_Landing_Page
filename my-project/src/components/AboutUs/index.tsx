import { MdDone } from "react-icons/md";


const AboutUs = () => {
    return (
        <div className="flex flex-row p-10 w-screen h-auto gap-24 justify-center items-center">
            <div className="w-[500px] h-auto">
                <img src="./src/assets/about.jpg" className="w-screen" />
            </div>
            <div className="w-96 gap-5 flex flex-col">

                <h1 className="text-3xl font-bold text-gray-700">ABOUT US</h1>
                <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae reprehenderit quaerat quasi accusantium cumque harum dolor inventore molestias nihil? Dolores libero incidunt rem, eos, quod unde odit voluptate placeat laudantium provident ea vel atque quidem.</p>

                <h1 className="text-xl font-medium text-gray-700">Why Choose Us?</h1>
                <div className="w-96 pl-4">
                    <div className="">
                        <ul className="grid grid-cols-2 gap-2">
                            <li className="flex items-center gap-2 text-sm text-gray-500"><MdDone className="text-blue-500 "/>Lorem, ipsum dolor</li>
                            <li className="flex items-center gap-2 text-sm text-gray-500"><MdDone className="text-blue-500 "/>Lorem, ipsum dolor</li>
                            <li className="flex items-center gap-2 text-sm text-gray-500"><MdDone className="text-blue-500 "/>Lorem, ipsum dolor</li>
                            <li className="flex items-center gap-2 text-sm text-gray-500"><MdDone className="text-blue-500 "/>Lorem, ipsum dolor</li>
                            <li className="flex items-center gap-2 text-sm text-gray-500"><MdDone className="text-blue-500 "/>Lorem, ipsum dolor</li>
                            <li className="flex items-center gap-2 text-sm text-gray-500"><MdDone className="text-blue-500 "/>Lorem, ipsum dolor</li>
                        </ul>
                        
                    </div>
                </div>



            </div>

        </div>
    )
}

export default AboutUs
