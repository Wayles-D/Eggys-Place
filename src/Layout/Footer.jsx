import Xlogo from '../assets/Xlogo.svg'
import EggysLogo from '../assets/EggysPlaceImg.svg'
import FacebookImg from '../assets/FacebookImg.svg'
import TwitterImg from '../assets/TwitterImg.svg'
import YoutubeImg from '../assets/YoutubeImg.svg'
import InstagramImg from '../assets/InstagramImg.svg'

const Footer = () => {
  return (
    <footer className="bg-[#190704] text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        {/* Left Side - Logo */}
        <div>
          <img src={EggysLogo} alt="Logo" className="w-16" />
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
          <a href="https://x.com"><img src={Xlogo} alt="X-Icon" className="w-4" /></a>
          <a href="https://www.facebook.com"><img src={FacebookImg} alt="Facebook-icon" className="w-4" /></a>
          <a href="https://x.com"><img src={TwitterImg} alt="Twitter-Icon" className="w-4" /></a>
          <a href="https://www.instagram.com"><img src={InstagramImg} alt="Instagram-Icon" className="w-4" /></a>
          <a href="https://www.youtube.com"><img src={YoutubeImg} alt="Youtube-Icon" className="w-4" /></a>
        </div>
      </div>

      {/* Divider Line */}
      <div className="border-t border-gray-500 mt-4 mx-4"></div>

      {/* Bottom Text */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-xs px-4 mt-2">
        <p>TM & Copyright 2025 Eggys Corporation. All Rights Reserved.</p>
        <a href="#" className="hover:underline">Privacy Policy</a>
      </div>
    </footer>
  );
};

export default Footer;
