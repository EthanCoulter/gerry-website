import React from "react";
import Jerry from '../assets/jerry.jpg';
import clientContract from '../assets/client_contract.pdf';

const Hero = () => {
    return (

        <div id="services" className="flex flex-col justify-center py-10 bg-light-shade px-5  tablet:flex-row tablet:h-[vh]">
            <div className="flex flex-col justify-center tablet:items-center bg-light-accent tablet:drop-shadow-lg rounded-xl tablet:p-16  tablet:flex-row tablet:h-[vh]">
                <div className="">
                    <img className=" rounded-t-lg tablet:rounded-t-none tablet:w-[600px] tablet:h-[1.6 * w] tablet:pr-5 " src={Jerry} alt="Jerry" />
                </div>
                <div className="flex flex-col items-center  px-5 pb-5 text-center align-center bg-main-brand-col rounded-b-lg tablet:rounded-lg tablet:w-[500px] tablet:h-[1.6 * w]  ">
                    <h1 className="text-4xl pb-4 font-serif text-white pt-3  tablet:pt-5">Services</h1>
                    <p className=" text-white pb-5 tablet:pb-5">I specialize in family counseling, focusing on issues like domestic conflict, violence, divorce, child well-being, and parenting dynamics. With years of experience in co-facilitating domestic violence groups and parenting programs, as well as a background in child welfare investigations, I offer valuable insights into how family challenges impact both parents and children. I can provide guidance on co-parenting and cooperation, unless safety concerns arise. My opinions have been sought and accepted by courts for their prudence and persuasiveness. If you need a counselor specializing in family issues, please contact me via email for further assistance. <div className="font-bold"> For more information on my services, please click the button below.</div> </p>
                    <button className="bg-transparent py-2 px-4 border border-dark-shade rounded ease-in-out duration-200 hover:bg-dark-accent text-white font-semibold hover:text-white "> <a href={clientContract} download={clientContract} placeholder="client_contract" target="_blank" rel="noreferrer noopener">Consulting Contract</a> </button>
                </div>
            </div>

        </div>
    )

}

export default Hero