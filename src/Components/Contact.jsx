import React, { useRef } from "react";
import emailjs from "@emailjs/browser";


export const Contact = () => {
    const form = useRef();

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('gmail', 'contact_form', form.current, 'EZQx9W3ClPfJqHRHo')
            .then((result) => {
                console.log(result.text);
                if (result.status === 200) {
                    alert('Email sent successfully')
                }

            }, (error) => {
                console.log(error.text);
            });
        form.current.reset()
    }

    return (
        <div id="contact" className=" bg-light-shade py-5 tablet:justify-center tablet:flex pt-5">
            <div className="flex flex-col justify-start mx-5 my-0 py-5 px-3 bg-main-brand-col rounded-lg tablet:w-[500px]">
                <h1 className="text-3xl pb-4 font-serif text-center text-white">Contact Me</h1>
                <div className="flex flex-col justify-start">
                    <form className="flex flex-col" ref={form} onSubmit={sendEmail}>
                        <div className="flex flex-col   py-2">
                            <label htmlFor="" className="mb-2 text-white text-lg font-bold">Your name:</label>
                            <input type="text" className="rounded-md h-[30px] pl-2" name="name" placeholder="Your Name (First and Last)" required />
                        </div>
                        <div className="flex flex-col py-5">
                            <label htmlFor="" className="mb-2 text-white text-lg font-bold">Your email:</label>
                            <input type="text" className="rounded-md h-[30px] pl-2" name="email" placeholder="Your Email" required />
                        </div>
                        <div className="flex flex-col py-2">
                            <label htmlFor="" className="mb-2 text-white text-lg font-bold">Your Message:</label>
                            <input type="text" className="rounded-md h-[70px] text-clip pl-2" name="message" placeholder="Your Message" required />
                        </div>

                        <button className="bg-transparent hover:bg-dark-accent text-white font-semibold mt-3 justify-center hover:text-white py-2 px-4 border border-dark-shade rounded ease-in-out duration-200">Send Email</button>

                    </form>
                </div>
            </div>
        </div>
    )

}

export default Contact