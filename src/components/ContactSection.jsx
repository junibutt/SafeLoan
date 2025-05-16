import React from 'react'
import { MdEmail } from "react-icons/md";
import { GiPostOffice } from "react-icons/gi";
import { FaPhoneAlt } from "react-icons/fa";
import office from "../assets/office.jpg";

const ContactSection = () => {
  return (
    <div className='relative bg-white overflow-hidden'id='contactus'>
      <div className=" hidden md:block absolute inset-0 z-0 pointer-events-none">

  <div className="absolute w-17 opacity-25 h-full bg-green-200 transform -rotate-45 left-[37rem] top-0"></div>
  <div className="absolute w-17 opacity-25 h-full bg-green-300 transform -rotate-45 left-[60rem] top-0"></div>
  <div className="absolute w-17 opacity-25 h-full bg-green-200 transform -rotate-45 left-[80rem] top-0"></div>
</div>
      <div className='relative z-10 max-w-6xl mx-auto px-4 py-16 text-center'>
        <h2 className='text-3xl font-bold text-green-700'>GET IN TOUCH</h2>
        <p className='text-gray-600 mt-2'>Our friendly team would love to hear from you.</p>

        <div className='mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center'>
          <div>
            <div className='flex justify-center mb-2'>
              <MdEmail className='text-green-700 w-8 h-8'/>
            </div>
            <h4 className='font-semibold'>Email</h4>
            <p className='text-sm text-gray-500'>Our friendly team is here to help.</p>
            <p className='text-green-700 font-medium mt-1'>safeloan@gmail.com</p>
          </div>

           <div>
            <div className='flex justify-center mb-2'>
              <GiPostOffice  className='text-green-700 w-8 h-8'/>
            </div>
            <h4 className='font-semibold'>Office</h4>
            <p className='text-sm text-gray-500'>Come say hello at our office HQ.</p>
            <p className='text-green-700 font-medium mt-1'>Bahria Town,Phase 4,Islamabad Pakistan</p>
          </div>

           <div>
            <div className='flex justify-center mb-2'>
              <FaPhoneAlt className='text-green-700 w-8 h-8'/>
            </div>
            <h4 className='font-semibold'>Phone</h4>
            <p className='text-sm text-gray-500'>Mon-Fri from 8am to 5pm.</p>
            <p className='text-green-700 font-medium mt-1'>+092 397 8096888</p>
          </div>
        </div>

        <div className='mt-12'>
          <img className='w-full rounded shadow-md max-h-[400px] object-cover' src={office}/>
        </div>

        <div className='mt-10 text-center'>
          <p className='uppercase text-sm text-green-700 tracking-widest mb-1 font-bold '>Need Quick Answer</p>
          <p className='text-gray-600 text-sm font-semibold'>You can check our FAQ's, we already answered some of your questions.</p>
          <a href='comtact' className='inline-block mt-4 px-6 py-2 bg-green-700 text-white rounded hover:bg-green-800 transition'>Contact Us</a>
        </div>
      </div>
    </div>
  )
}

export default ContactSection