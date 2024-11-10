
const Navbar = () => {
    return (
        
        
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
    )
}

export default Navbar
