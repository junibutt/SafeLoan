import React, { useState } from 'react'
import {faqData} from "../components/FaqQA";

const FAQSection = () => {
  const [activeSection,setActiveSection]=useState(faqData[0].id)
  const[openQuestion,setOpenQuestion]=useState({});

  const toggleQuestions=(index)=>{
    setOpenQuestion((prev)=>({
      ...prev,
      [index]:!prev[index],
    }));
  };
  const currentFaqs=faqData.find((sec)=>sec.id===activeSection);
  return (
    <div className='flex flex-col md:flex-row min-h-screen bg-gray-50 font-sans border-t pt-17' id='faqs'>
      <div className='w-full md:w-1/3 bg-white p-6 shadow-md'>
      <h2 className='text-xl font-bold mb-4 text-green-700'>FREQUENTLY ASKED QUESTIONS</h2>
      {faqData.map((section)=>(
        <div key={section.id} className={`flex items-center cursor-pointer py-2 px-3 rounded-lg transition ${
          section.id===activeSection ?
          "bg-green-100 text-green-700 font-semibold":
          "hover:bg-gray-100 text-gray-800"
        }`} onClick={()=>{setActiveSection(section.id);
          setOpenQuestion({});
        }}>
          <span className={`w-2 h-2 mr-3 rounded-full ${section.id === activeSection ? "bg-green-500" : "bg-gray-400"}`}></span>
  <span>{section.title}</span>

        </div>
      ))}
      </div>





      <div className='w-full md:w-2/3 p-6'>
      <h3 className='text-lg font-semibold mb-4 text-green-700'>{currentFaqs.title}</h3>
      {currentFaqs.faqs.map((faq,index)=>(<div key={index} className='mb-4'>
        <button onClick={()=>toggleQuestions(index)} className='w-full text-left p-4 bg-gray-100 rounded hover:bg-gray-200 transition'>{faq.question}</button>
        {openQuestion[index]&&(
          <div className='mt-2 p-4 bg-white border-l-4 border-green-500 shadow rounded'>{faq.answer}</div>
        )}
      </div>))}
      </div>
    </div>
  )
}

export default FAQSection