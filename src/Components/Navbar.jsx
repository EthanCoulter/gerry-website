import React, {useState}  from "react";
import { CiMenuBurger, CiMenuFries } from "react-icons/ci";



const Navbar = () => {
    const [ nav, setNav ] = useState(true)

    const handleNav = () => {
        return setNav(!nav)
    };

    return (
        <div className=" flex justify-between items-center h-24 mx-auto px-4 w-full fixed text-white bg-main-brand-col">
            <h1 className="w-full drop-shadow-lg text-xl md:text-2xl lg:text-3xl font-bold text-white pointer-events-none font-serif ">G.W Counselling</h1>
            <ul className="hidden text-xl md:flex">
                <li className="p-4 hover:bg-hover-nav  rounded-full cursor-pointer ease-in-out duration-200 drop-shadow-md" ><a href="#home" >Home</a></li>
                <li className="p-4 hover:bg-hover-nav rounded-full cursor-pointer ease-in-out duration-200 drop-shadow-md"><a href="#services">Services</a></li>
                <li className="p-4 hover:bg-hover-nav rounded-full cursor-pointer ease-in-out duration-200 drop-shadow-md">Testimonials</li>
                <li className="p-4 hover:bg-hover-nav rounded-full cursor-pointer ease-in-out duration-200 drop-shadow-md"><a href="#abc">Textbook</a></li>
                <li className="p-4 hover:bg-hover-nav rounded-full cursor-pointer ease-in-out duration-200 drop-shadow-md"><a href="#contact">Contact</a></li>
            </ul>
            <div onClick={handleNav} className='block tablet:hidden'>
                {!nav ? <CiMenuFries size={20} /> : <CiMenuBurger size={20} />}

            </div>



            <div className={!nav ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500" : 'fixed left-[-100%]'}>
                <h1 className="w-full drop-shadow-mdtext-3xl font-bold  text-white m-4 pointer-events-none font-serif">G.W Counselling</h1>
                <ul className="p-4 uppercase">
                    <li className="p-4 border-b border-gray-600 hover:bg-gray-800 cursor-pointer ease-in-out duration-200" onClick={handleNav}><a href="#home" >Home</a></li>
                    <li className="p-4 border-b border-gray-600 hover:bg-gray-800 cursor-pointer ease-in-out duration-200" onClick={handleNav}><a href="#services" >Services</a></li>
                    <li className="p-4 border-b border-gray-600 hover:bg-gray-800 cursor-pointer ease-in-out duration-200" onClick={handleNav}>Testimonials</li>
                    <li className="p-4 border-b border-gray-600 hover:bg-gray-800 cursor-pointer ease-in-out duration-200" onClick={handleNav}><a href="#abc" >Textbook</a></li>
                    <li className="p-4 border-gray-600 hover:bg-gray-800 cursor-pointer ease-in-out duration-200" onClick={handleNav}><a href="#contact">Contact</a></li>
                </ul>
            </div>

        </div>
    )
}



export default Navbar