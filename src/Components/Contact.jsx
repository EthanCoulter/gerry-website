import React from "react";

const Contact = () => {
    return (
            <div className="bg-light-shade py-5">
            <div className="flex flex-col justify-start w-vw mx-5 my-5 px-3 pb-5 h-vh bg-main-brand-col rounded-lg tablet:rounded-none">
                <h1 className="text-3xl pb-4 font-bold underline text-center text-white">Contact Me</h1>
                <div className="flex flex-col justify-start">
                    {/* <form className="flex flex-col" action=""> */}
                        <div className="flex flex-col   py-2">
                            <label htmlFor="" className="mb-2 text-white text-lg font-bold">Your name:</label>
                            <input type="text" className="rounded-md" placeholder="Your Name"/>
                        </div>
                        <div className="flex flex-col py-5">
                        <label htmlFor="" className="mb-2 text-white text-lg font-bold">Your email:</label>
                            <input type="text" className="rounded-md" placeholder="Your Email"/>
                        </div>
                        <div className="flex flex-col py-2">
                        <label htmlFor="" className="mb-2 text-white text-lg font-bold">Your Message:</label>
                            <input type="text" className="rounded-md h-[100px]" placeholder="Your Message"/>
                        </div>

                        <button className="bg-transparent hover:bg-dark-accent text-white font-semibold mt-3 justify-center hover:text-white py-2 px-4 border border-dark-shade rounded ease-in-out duration-200">Send Email</button>

                    {/* </form> */}
                </div>
            </div>
            </div>
    )

}

export default Contact