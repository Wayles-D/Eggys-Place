import Xlogo from '../assets/Xlogo.svg'
import JazzysLogo from '../assets/Jazzys Logo.svg'

const Footer = () => {
  return (
    <footer className="bg-[#190704] text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        {/* Left Side - Logo */}
        <div>
          <img src={JazzysLogo} alt="Logo" className="w-16" />
        </div>

        {/* Center - Links */}
        <nav className="flex flex-wrap justify-center gap-4 text-sm">
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Products</a>
          <a href="#" className="hover:underline">Support</a>
          <a href="#" className="hover:underline">Terms & Conditions</a>
        </nav>

        {/* Right Side - Social Icons */}
        <div className="flex items-center gap-3">
          <a href="#"><img src="icon1.png" alt="" className="w-4" /></a>
          <a href="#"><img src="icon2.png" alt="" className="w-4" /></a>
          <a href="X.com"><img src={Xlogo} alt="X" className="w-4" /></a>
          <a href="#"><img src="icon4.png" alt="" className="w-4" /></a>
          <a href="#"><img src="icon5.png" alt="" className="w-4" /></a>
        </div>
      </div>

      {/* Divider Line */}
      <div className="border-t border-gray-500 mt-4 mx-4"></div>

      {/* Bottom Text */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-xs px-4 mt-2">
        <p>TM & Copyright 2025 Jazzy Corporation. All Rights Reserved.</p>
        <a href="#" className="hover:underline">Privacy Policy</a>
      </div>
    </footer>
  );
};

export default Footer;
