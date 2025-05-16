import React from 'react'
import { SiGnuprivacyguard } from "react-icons/si";
import { TbHelpHexagonFilled } from "react-icons/tb";
import { TbZoomQuestionFilled } from "react-icons/tb";

const LoanSection = () => {
  return (
    <div className='w-full bg-white text-black font-sans'>
      <div className='relative px-6 py-12 md:px-20 bg-gray-100'>
        <div className='absolute top-6 right-6 grid grid-cols-3 gap-1'>
          {[...Array(9)].map((_,i)=>(
            <div key={i} className='w-2.5 h-2.5 bg-green-700 clip-triangle'></div>
          ))}
        </div>
        <h1 className='text-3xl md:text-4xl  font-bold mb-2'>
          NEED <span className='text-green-700'>CASH</span> URGENTLY TO <br/>HANDLE A <span className='text-green-700'>PRESSING ISSUE?</span>
        </h1>
        <p className='text-lg text-gray-700 mb-10'> we have got you covered. Fund your financial needs instatntly with SafeLoan</p>


        <div className='grid md:grid-cols-3 gap-6'>
          {[
            {
              title:"PAYLOAD LOAN",
              maxAmount:"PKR 500,000.0",
              tenure:"1-2 Months",
              note:"Get up to RS500,000 for a period of 1-6 months. Quick loan for salary earners."
            },
             {
              title:"INSTANT LOAN",
              maxAmount:"PKR 50,000.0",
              tenure:"7-30 Days",
              note:"Get up to RS50,000 for a period of 7-30 days. Quick loan in 5 minutes."
            },
             {
              title:"INSTATNT LOAN MONTHLY",
              maxAmount:"PKR 100,000.0",
              tenure:"2-6 Months",
              note:"Get up to R100,000 for a period of 2-6 months. Quick loan in 5 minutes."
            },
          ].map((loan,idx)=>(
            <div key={idx} className='bg-white shadow-md p-6 border rounded-md'>
              <h2 className='text-xl font-semibold mb-4 text-green-700'>{loan.title}</h2>
              <div className='bg-gray-200 p-2'>
              <p className='border-b pb-3'><strong>Maximum Amount:</strong><br/>{loan.maxAmount}</p>
              <p className='border-b pb-3 mt-3'><strong>Interest</strong><br/>18%</p>
              <p className=' pb-3 mt-3'><strong>Tenure</strong><br/>{loan.tenure}</p>
              </div>
              <p className='text-sm text-gray-600 mt-3 '>{loan.note}</p>
              <button className='mt-4 bg-green-700 hover:bg-green-800 text-white py-2 px-4 rounded block w-full'>GET THIS LOAN</button>
            </div>
          ))}
        </div>
      </div>


      <div className='bg-white py-14 px-6 md:px-20 border-t'>
        <h2 className='text-2xl md:text-3xl font-bold mb-8'>SUPPORTING YOUR EVERY STEP<br/><span className='text-green-700'>OF THIS WAY</span> </h2>
        <p>We've got your back,helping you stay on track and move forward with confidence.</p>
        <div className='grid md:grid-cols-3 gap-10 text-center'>
          {[
            {title:<>WE PROTECT<br/> YOUR PRIVACY</>,icon:<SiGnuprivacyguard />},
            {title:<>REAL HELP FROM<br/> REAL PEOPLE</>,icon:<TbHelpHexagonFilled />},
            {title:<>ANSWER TO<br/> YOUR QUESTIONS</>,icon:<TbZoomQuestionFilled />},
          ].map((items,indx)=>(<div className='flex flex-col items-center mt-10' key={indx}>
            <p className='font-bold text-xl md:text-2xl text-green-700'>{items.title}</p>
            <div className='text-9xl md:text-6xl mb-4 text-green-700 mt-7'>{items.icon}</div>
          </div>))}
        </div>
      </div>
    </div>
  )
}

export default LoanSection