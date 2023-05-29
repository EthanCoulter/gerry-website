import React from "react";
import Jerry from '../assets/jerry.jpg';
import clientContract from '../assets/client_contract.pdf';

const Hero = () => {
    return (

        <div id="services" className="flex flex-col justify-between py-20 bg-light-shade px-5 md:flex-row ">

            <div className="">
                <img className="w-vw h-[vh] rounded-t-lg tablet:rounded-t-none" src={Jerry} alt="Jerry" />
            </div>
            <div className="flex flex-col items-center w-vw px-5 pb-5 h-vh align-center mx-auto bg-main-brand-col rounded-b-lg tablet:rounded-b-none">
                <h1 className="text-3xl pb-4 font-bold underline text-white">Services</h1>
                <p className=" text-white pb-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum nulla eum fugit, quidem modi voluptatem quia perferendis officiis laudantium cupiditate pariatur odio quod similique mollitia earum vitae vero natus. Eveniet! Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam suscipit a excepturi in? Incidunt quas eos iusto nisi nam non, earum adipisci ratione mollitia, commodi sed. Temporibus soluta officiis repudiandae!</p>
                <button className="bg-transparent hover:bg-dark-accent text-white font-semibold hover:text-white py-2 px-4 border border-dark-shade rounded ease-in-out duration-200"> <a href={clientContract} download={clientContract} placeholder="client_contract" target="_blank" rel="noreferrer noopener">Consulting Contract</a> </button>
            </div>
        </div>
    )

}

export default Hero