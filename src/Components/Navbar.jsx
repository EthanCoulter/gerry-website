import React, {useState}  from "react";
import { CiMenuBurger, CiMenuFries } from "react-icons/ci";



const Navbar = () => {
    const [ nav, setNav ] = useState(true)

    const handleNav = () => {
        return setNav(!nav)
    };

    return (
        <div className=" flex justify-between items-center h-24 mx-auto px-4 w-full fixed text-white bg-main-brand-col">
            <h1 className="w-full drop-shadow-lg text-xl md:text-2xl lg:text-3xl font-bold text-white pointer-events-none ">G.W Consulting</h1>
            <ul className="hidden text-xl md:flex">
                <li className="p-4 hover:bg-hover-nav  rounded-full cursor-pointer ease-in-out duration-200 drop-shadow-md" >Home</li>
                <li className="p-4 hover:bg-hover-nav rounded-full cursor-pointer ease-in-out duration-200 drop-shadow-md"><a href="#about">About</a></li>
                <li className="p-4 hover:bg-hover-nav rounded-full cursor-pointer ease-in-out duration-200 drop-shadow-md">Testimonials</li>
                <li className="p-4 hover:bg-hover-nav rounded-full cursor-pointer ease-in-out duration-200 drop-shadow-md">Contact</li>
            </ul>
            <div onClick={handleNav} className='block tablet:hidden'>
                {!nav ? <CiMenuFries size={20} /> : <CiMenuBurger size={20} />}

            </div>



            <div className={!nav ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500" : 'fixed left-[-100%]'}>
                <h1 className="w-full drop-shadow-mdtext-3xl font-bold  text-white m-4 pointer-events-none">G.W Consulting</h1>
                <ul className="p-4 uppercase">
                    <li className="p-4 border-b border-gray-600 hover:bg-gray-800 cursor-pointer ease-in-out duration-200">Home</li>
                    <li className="p-4 border-b border-gray-600 hover:bg-gray-800 cursor-pointer ease-in-out duration-200">About</li>
                    <li className="p-4 border-b border-gray-600 hover:bg-gray-800 cursor-pointer ease-in-out duration-200">Testimonials</li>
                    <li className="p-4 border-gray-600 hover:bg-gray-800 cursor-pointer ease-in-out duration-200">Contact</li>
                </ul>
            </div>

        </div>
    )
}



export default Navbar