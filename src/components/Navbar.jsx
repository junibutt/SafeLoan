import React, { useState } from "react";
import logo from "../assets/logo-transparent.png";
import { IoIosMenu } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { useModal } from "./ModalContext";

const Navbar = () => {
  const{setOpen}=useModal();
  const [menuOpen, setmenuOpen] = useState(false);
  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 ">
            <img className="h-14 w-auto object-contain" src={logo} />
          </div>
          <div className="hidden md:flex space-x-10 items-center">
            <a href="#home" className="text-green-600 hover:text-green-900 text-lg">Home</a>
            <a href="#faqs" className="text-green-600 hover:text-green-900 text-lg">FAQ'S</a>
            <a href="#contactus" className="text-green-600 hover:text-green-900 text-lg">Contact us</a>
          </div>
          <div className="hidden md:flex">
            <button onClick={()=>{setOpen(true)}} className="px-3 py-2  rounded-md bg-green-600 text-white hover:bg-green-700 ">Apply for loan</button>
          </div>

          <div className="md:hidden">
            <button onClick={()=>setmenuOpen(!menuOpen)}>
              {menuOpen?<MdClose className="text-green-600 hover:text-green-900" size={24}/>:<IoIosMenu className="text-green-600 hover:text-green-900" size={24}/>}
            </button>
          </div>
        </div>
      </div>

      {menuOpen&&(
        <div className="md:hidden bg-white h-[100%] px-4 pt-4 pb-9 space-y-8 text-left shadow-lg">
          <a href="#home" className=" block text-green-600 hover:text-green-900 text-lg border-b pt-5">Home</a>
            <a href="#faqs" className="block text-green-600 hover:text-green-900 text-lg border-b">FAQ'S</a>
            <a href="#contactus" className="block text-green-600 hover:text-green-900 text-lg border-b">Contact us</a>
            <button onClick={()=>setOpen(true)} className=" block w-full px-3 py-2  bg-green-600 text-white hover:bg-green-700 ">Apply for loan</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
