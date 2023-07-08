import React from "react";
import gerryBook from "../assets/gerryBook.jpg"

const Book = () => {
    return (
        <div id="abc" className="flex flex-col-reverse   px-5 bg-light-shade tablet:flex-row tablet:justify-center">
            <div className="flex flex-col-reverse items-center bg-light-accent  rounded-xl mb-5 tablet:drop-shadow-lg tablet:p-16 tablet:flex-row tablet:justify-center ">
                <div className="flex flex-col items-center pr-0 tablet:w-[700px] tablet:pr-5">
                    <div className="flex flex-col items-center px-5 pb-5 bg-main-brand-col rounded-b-lg  tablet:rounded-lg ">
                        <h1 className="text-4xl pb-4 font-serif pt-3 tablet:pt-3 text-white">Textbook</h1>
                        <p className="pb-5 text-center text-white"> This manual is an essential addition to child protection, offering comprehensive research and expertly assembled content that illuminates the intricacies of sexual abuse investigations. It serves as both a training manual and a valuable resource for new and experienced child protection workers, equipping them with foundational knowledge, practical tools, and immediate implementation skills. This resource deepens understanding of sexual abuse, covering topics such as abuser motivations, secrecy factors, disclosure dynamics, personal biases, and their influence on investigations. It provides tangible steps and tools for planning investigations, conducting interviews, and evaluating evidence with confidence. By laying a strong foundation, this manual supports the ongoing journey of children and families towards survival and resilience despite the challenges they have faced. </p>
                        <button className="bg-transparent hover:bg-dark-accent text-white font-semibold hover:text-white py-2 px-4 border border-dark-shade rounded ease-in-out duration-200"><a href="https://community.cwla.org/store/viewproduct.aspx?id=21969852" target="_blank" rel="noreferrer noopener">Purchase book</a></button>
                    </div>

                </div>


                <img className="rounded-t-lg w-full tablet:rounded-t-none tablet:w-[400px]" src={gerryBook} alt="" />

            </div>
        </div>
    )
}

export default Book