import React, {useState}  from "react";
import { CiMenuBurger, CiMenuFries } from "react-icons/ci";



const Navbar = () => {
    const [ nav, setNav ] = useState(true)

    const handleNav = () => {
        return setNav(!nav)
    };
    return (
        <div className=" flex justify-between items-center h-24  mx-auto px-4 text-white bg-slate-500">
            <h1 className="w-full drop-shadow-lg text-xl md:text-2xl lg:text-3xl font-bold text-white pointer-events-none ">Gerald Walsh Consulting</h1>
            <ul className="hidden text-xl md:flex">
                <li className="p-4">Home</li>
                <li className="p-4">About</li>
                <li className="p-4">Testimonials</li>
                <li className="p-4">Contact</li>
            </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {!nav ? <CiMenuFries size={20} /> : <CiMenuBurger size={20} />}

            </div>



            <div className={!nav ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500" : 'fixed left-[-100%]'}>
                <h1 className="w-full drop-shadow-mdtext-3xl font-bold  text-white m-4 pointer-events-none">G. Walsh Consulting</h1>
                <ul className="p-4 uppercase">
                    <li className="p-4 border-b border-gray-600">Home</li>
                    <li className="p-4 border-b border-gray-600">About</li>
                    <li className="p-4 border-b border-gray-600">Testimonials</li>
                    <li className="p-4 border-gray-600">Contact</li>
                </ul>
            </div>

        </div>
    )
}



export default Navbar