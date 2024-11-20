import GetInTouchForm from "../GetInTouchForm";
import { SlLocationPin } from "react-icons/sl";
import { MdOutlineMail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

const GetInTouch = () => {
    return (

        <div className="flex flex-col w-full pt-10 pr-2 pl-36 items-center gap-9 bg-gradient-to-br from-blue-500 to-indigo-300 text-white" id="contact">
            <div className="flex items-center gap-16 w-full">
                <div className="flex flex-col">

                    <h1 className="text-4xl font-bold uppercase">get in touch</h1>
                    <p className="text-lg opacity-55">Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.</p>
                    <GetInTouchForm />
                </div>

                <div className="flex flex-col items-center text-white">
                    <div className="p-8 max-w-sm">
                        <h2 className="text-2xl font-bold mb-6">Contact Info</h2>
                        <div className="space-y-4 max-w-64 flex flex-col gap-5">
                            <div>
                                <p className="flex flex-col space-x-2">
                                    <span className="flex items-center gap-2 material-icons"><SlLocationPin /> Adress</span>
                                    <span>4321 California St, San Francisco, CA 12345</span>
                                </p>
                            </div>
                            <div>
                                <p className="flex flex-col space-x-2">
                                    <span className="flex items-center gap-2 material-icons"><SlLocationPin /> Phone</span>
                                    <span>+1 123 456 1234</span>
                                </p>
                            </div>
                            <div>
                                <p className="flex flex-col space-x-2">
                                    <span className="flex items-center gap-2 material-icons"><MdOutlineMail /> Email</span>
                                    <span>info@company.com</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="w-full max-w-6xl mr-80 mt-10 ml-52 border-t border-blue-300 justify-center"></div> */}
            <div className="w-full border-t border-blue-300 mt-8"></div>

            <div className="flex gap-10 cursor-pointer pb-10">
                <div className="flex items-center justify-center w-12 h-12 border border-white rounded-full text-white hover:bg-white hover:text-blue-500 transition">

                    <FaFacebookF className="text-xl"/>

                </div>
                <div className="flex items-center justify-center w-12 h-12 border border-white rounded-full text-white hover:bg-white hover:text-blue-500 transition">

                    <FaTwitter className="text-xl"/>

                </div>
                <div className="flex items-center justify-center w-12 h-12 border border-white rounded-full text-white hover:bg-white hover:text-blue-500 transition">

                    <FaYoutube className="text-xl"/>

                </div>
            </div>

        </div>
    )
}

export default GetInTouch
