import React from "react";
import Typed from "react-typed";

const Header = () => {
  return (
    <div id="home" className="flex flex-col justify-center items-center h-screen  bg-main-brand-col">
      <h1 className="text-[10vw] font-bold text-white -mb-[1vh] ">Gerald Walsh</h1>
      <span className="pb-5 text-white text-[4vw] mt-0">MSW, RSW</span>
      <h3 className=" items-center text-md align-center text-center mb-6 w-[vw] mx-2 text-white tablet:text-xl laptop:text-2xl">
        Supporting clients to make the next step towards a life that is{""}
        <span className="uppercase font-bold">
          <Typed
            strings={[" Happier", " Healthier"]}
            typeSpeed={100}
            backSpeed={50}
            loop
          ></Typed>
        </span>
      </h3>
      

      <button className="bg-transparent hover:bg-dark-accent text-white font-semibold hover:text-white py-2 px-4 border border-dark-shade rounded ease-in-out duration-200">
        Book Now
      </button>
    </div>
  );
};

export default Header;
