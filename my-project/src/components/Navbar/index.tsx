import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-white shadow-md z-50 flex flex-row items-center gap-20 justify-between h-14 m-0 p-0 text-base border-b-2 border-white">
      <h1 className="ml-36 text-2xl font-bold">REACT LANDING PAGE</h1>

      <ul className="flex items-center justify-between text-lg cursor-pointer text-gray-500 gap-14 mr-36">
        <Link to="features" smooth={true} duration={500}>
          <li>Features</li>
        </Link>
        <Link to="aboutUs" smooth={true} duration={500}>
          <li>About</li>
        </Link>
        <Link to="service" smooth={true} duration={500}>
          <li>Service</li>
        </Link>
        <Link to="gallery" smooth={true} duration={500}>
          <li>Gallery</li>
        </Link>
        <Link to="testimonials" smooth={true} duration={500}>
          <li>Testimonials</li>
        </Link>
        <Link to="team" smooth={true} duration={500}>
          <li>Team</li>
        </Link>
        <Link to="contact" smooth={true} duration={500}>
          <li>Contact</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
