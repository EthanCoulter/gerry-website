import React from "react";
import Jerry from '../assets/jerry.jpg';

const Hero = () => {
    return (
        <div className="flex flex-col justify-between py-20 bg-light-shade px-2 md:flex-row ">
            <div className="">
                <img className="w-vw " src={Jerry} alt="Jerry" />
            </div>
            <div className="flex flex-col items-center max-w-[600px] align-center mx-auto px-2 bg-slate-500 tablet:max-h-[269.23px]">
                <h1 className="text-3xl pb-4 font-bold underline text-white">About Gerald</h1>
                <p className=" text-white pb-10">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum nulla eum fugit, quidem modi voluptatem quia perferendis officiis laudantium cupiditate pariatur odio quod similique mollitia earum vitae vero natus. Eveniet! Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam suscipit a excepturi in? Incidunt quas eos iusto nisi nam non, earum adipisci ratione mollitia, commodi sed. Temporibus soluta officiis repudiandae!</p>
                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"> <a href="https://www.thestar.com/news/canada/2014/12/12/through_the_eyes_of_a_cas_frontline_worker.html" target="_blank" rel="noreferrer noopener">Link to Article</a> </button>
            </div>

        </div>
    )

}

export default Hero