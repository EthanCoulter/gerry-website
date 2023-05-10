import React from "react";
import Typed from "react-typed";

const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen  bg-main-brand-col">
      <h1 className="text-5xl font-bold pb-5 text-white tablet:text-6xl laptop:text-8xl">Gerald Walsh</h1>
      <h3 className=" items-center text-md align-center text-center mb-6 w-[vw] mx-2 text-white tablet:text-xl laptop:text-2xl">
        Supporting clients to make the next step towards a life that is{" "}
        <span className="uppercase font-bold">
          <Typed
            strings={[" Happier", " Healthier"]}
            typeSpeed={100}
            backSpeed={50}
            loop
          ></Typed>
        </span>
      </h3>

      <button className="bg-dark-accent hover:bg-dark-shades text-white font-semibold hover:text-white py-2 px-4 border border-dark-shade rounded">
        Book Now
      </button>
    </div>
  );
};

export default Header;
