import React from 'react'
import EggysImg from "../assets/EggysPlaceImg.svg";
import LocationImg from "../assets/LocationImg.svg";
import DropDownImg from "../assets/DropdownImg.svg";
import CartImg from "../assets/CartImg.svg";
import LoginImg from "../assets/LoginImg.svg";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <header className='bg-[#100101]'>
        <nav className='container mx-auto px-[10px] md:px-[50px] lg:px-[100px] py-[8px] flex justify-between items-center'>

          {/* Left Section */}
          <div className='flex items-center gap-2 md:gap-4'>
            <img src={EggysImg} alt="Eggy's Logo" className='w-[50px] h-auto' />
            <div className='flex items-center gap-1 md:gap-2'>
              <img src={LocationImg} alt="Location" className='w-[16px] h-auto' />
              <h4 className='text-[#F0F0F0] text-[16px] md:text-[18px] font-[500] hidden md:block'>Location</h4>
              <div className="dropdown dropdown-center">
                <button tabIndex={0} className="m-0 p-1 bg-transparent">
                  <img src={DropDownImg} alt="Dropdown" className='w-[12px] md:w-[16px]' />
                </button>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-10 w-40 p-2 shadow-sm">
                  <li><a>Lagos</a></li>
                  <li><a>Abuja</a></li>
                  <li><a>Benin</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div className='hidden lg:block w-[280px]'>
            <form>
              <input type="text" placeholder='Search' className='w-full h-[40px] rounded-[20px] outline-none bg-[#F0F0F0] placeholder:text-gray ps-[15px] border font-[400] text-[14px]' />
            </form>
          </div>

          {/* Right Section */}
          <div className='flex items-center gap-2 md:gap-4'>
            <h2 className='font-[500] text-[14px] md:text-[16px] text-[#FBFBFB] hidden lg:block'>All Products</h2>
            <ul className='flex items-center gap-2'>
              {/* Cart Button */}
              <li className="flex items-center h-[40px] px-[15px] bg-[#B67B0F] rounded-[20px]">
                <img src={CartImg} alt="Cart" className='w-[18px] h-auto' />
                <Link className="px-2 text-[#FBFBFB] font-[500] text-[14px]">
                  <span className="hidden md:inline-block">Cart</span> 0
                </Link>
              </li>
              {/* Login Button */}
              <li className='flex items-center h-[40px] px-[15px] bg-[#F0F0F0] rounded-[20px]'>
                <img src={LoginImg} alt="Login" className='w-[16px] h-auto' />
                <Link className='ps-2 text-[#100101] font-[500] text-[14px] hidden md:inline'>Login</Link>
              </li>
            </ul>
          </div>

        </nav>
      </header>
    </>
  )
}

export default Navbar
