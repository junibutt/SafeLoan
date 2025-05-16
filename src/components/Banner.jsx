import React from "react";
import girl from "../assets/girl.png";

const Banner = () => {
  return (
    <div className="w-full "id="home" >
      <div className="bg-green-700 text-white py-16 px-6 md:px-20">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="max-w-xl mb-10 md:mb-0">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 mt-25">
              FAST  FLEXIBLE
              <br /> LOAN FOR YOUR <br />
              FINANCIAL NEEDS.
            </h1>
            <p className="mb-6">
              Get the fund you need quickly and securely. Check your loan
              options today with no impact on your credit score.
            </p>
            <button className="bg-white text-green-700 px-6 py-2 font-semibold rounded shadow cursor-pointer hover:text-green-800">
              GET STARTED
            </button>
          </div>

          <div className="relative">
            <img className="relative z-10 w-150 md:w-120 mt-10" src={girl} />
            <div className="absolute top-10 right-10 w-40 h-40  bg-white opacity-30 rounded-full z-0"></div>
          </div>
        </div>
      </div>

      <div className="relative h-14 bg-transparent -mt-5 z-20 ">
        <div className="absolute top-0 left-1 h-10 w-2.5 bg-yellow-400 -rotate-30"></div>
        <div className="absolute top-0 left-6 h-10 w-2.5 bg-yellow-400 -rotate-30"></div>
        <div className="absolute top-0 left-11 h-10 w-2.5 bg-yellow-400 -rotate-30"></div>
        <div className="absolute top-0 left-16 h-10 w-2.5 bg-yellow-400 -rotate-30"></div>
      </div>

      <div className="bg-white text-black py-16 px-6 md:px-20">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          GET STARTED IN JUST A<br /> FEW EASY STEPS!
        </h2>
        <p className="mb-10 text-base md:text-lg">
          Applying for a loan has been easier, no long wait times, no hidden
          fees. It's fast, secure and designed to fit your needs.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="relative bg-white p-6 rounded shadow-md border">
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-bold flex justify-center items-center ">
                APPLY
              </h3>
              <p className="text-sm md:text-base">
                Start your loan journey by completing our simple online
                application. Provide basic personal, financial, and employment
                details. The process is quick, secure, and designed to save you
                time. Apply anytime from anywhere and take the first step toward
                achieving your financial goals.
              </p>
            </div>
            <div className="absolute -top-5 -right-5 w-10 h-10 bg-yellow-300 opacity-85 text-black font-bold rounded-full flex items-center justify-center shadow-lg">
              1
            </div>
          </div>

           <div className="relative bg-white p-6 rounded shadow-md border">
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-bold flex justify-center items-center ">
                Get Approved
              </h3>
              <p className="text-sm md:text-base">
                Once your application is submitted, our team quickly reviews your details. We use secure and intelligent verification to determine your eligibility. Most applicants receive approval within minutes. No lengthy paperwork—just a fast, transparent approval process tailored to your needs and credit profile.
              </p>
            </div>
            <div className="absolute -top-5 -right-5 w-10 h-10 bg-yellow-300 opacity-85 text-black font-bold rounded-full flex items-center justify-center shadow-lg">
              2
            </div>
          </div>

           <div className="relative bg-white p-6 rounded shadow-md border">
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-bold flex justify-center items-center ">
                Receive Loan
              </h3>
              <p className="text-sm md:text-base">
                After approval, your funds are processed and sent directly to your bank account. Many customers receive their loan on the same day. Enjoy fast access to funds with no delays, so you can confidently manage your goals, emergencies, or planned purchases right away.
              </p>
            </div>
            <div className="absolute -top-5 -right-5 w-10 h-10 bg-yellow-300 opacity-85 text-black font-bold rounded-full flex items-center justify-center shadow-lg">
              3
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
