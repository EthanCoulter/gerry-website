import React from "react";
import Jerry from '../assets/jerry.jpg';
import clientContract from '../assets/client_contract.pdf';

const Hero = () => {
    return (
        <div id="services" className="flex flex-col justify-center py-10 bg-light-shade px-5  tablet:flex-row tablet:h-[vh]">

            <div className="">
                <img className=" rounded-t-lg tablet:rounded-t-none tablet:w-[600px] tablet:h-[1.6 * w] tablet:pr-5 " src={Jerry} alt="Jerry" />
            </div>
            <div className="flex flex-col items-center  px-5 pb-5 text-center align-center bg-main-brand-col rounded-b-lg tablet:w-[500px] tablet:h-[1.6 * w] tablet:rounded-b-none ">
                <h1 className="text-3xl pb-4 font-serif text-white  tablet:pt-3">Services</h1>
                <p className=" text-white pb-5 tablet:pb-10">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum nulla eum fugit, quidem modi voluptatem quia perferendis officiis laudantium cupiditate pariatur odio quod similique mollitia earum vitae vero natus. Eveniet! Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam suscipit a excepturi in? Incidunt quas eos iusto nisi nam non, earum adipisci ratione mollitia, commodi sed. Temporibus soluta officiis repudiandae!</p>
                <button className="bg-transparent py-2 px-4 border border-dark-shade rounded ease-in-out duration-200 hover:bg-dark-accent text-white font-semibold hover:text-white "> <a href={clientContract} download={clientContract} placeholder="client_contract" target="_blank" rel="noreferrer noopener">Consulting Contract</a> </button>
            </div>
        </div>
    )

}

export default Hero