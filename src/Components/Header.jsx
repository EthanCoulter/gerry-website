import React from "react";
import Typed from "react-typed";

const Header = () => {
  return (
    <div className="flex flex-col items-center h-[100%] py-5">
      <h1 className="text-4xl font-bold pb-5">Gerald Walsh</h1>
      <h3 className=" text-sm mb-6 w-[475px]">
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

      <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
        Book Now
      </button>
    </div>
  );
};

export default Header;
