import React from "react";
import Typed from "react-typed";

const Header = () => {
  return (
    <div id="home" className="flex flex-col justify-center items-center h-screen   bg-main-brand-col">
      <h1 className="text-[10vw] font-serif font-bold text-white -mb-[1vh] tablet:-mb-[2vh] tablet:text-[8vw]  ">Gerald Walsh</h1>
      <span className="pb-5 text-white text-[4vw] font-serif tablet:text-[3vw] tablet:mb-10">MSW, RSW</span>
      <h3 className=" items-center text-md align-center text-center mb-6 w-[vw] mx-2  text-white tablet:text-xl laptop:text-2xl">
        Supporting clients to make the next step towards a life that is {""}
        <span className=" ">
          <Typed
            strings={[" happier", " healthier"]}
            typeSpeed={100}
            backSpeed={50}
            loop
          ></Typed>
        </span>
      </h3>
      

      <button className="bg-transparent hover:bg-dark-accent text-white font-semibold hover:text-white py-2 px-4 border border-dark-shade rounded ease-in-out duration-200">
        <a href="#contact">Book Now</a>
      </button>
    </div>
  );
};

export default Header;
