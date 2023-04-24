import React from "react";
import Jerry from '../assets/jerry.jpg';

const Hero = () => {
    return (
        <div className="flex flex-col justify-between py-20 w-full bg-slate-400 px-2 md:flex-row ">
            <div className="">
                <img className=" w-400 max-w-[600px] mx-auto" src={Jerry} alt="Jerry" />
            </div>
            <div className="max-w-[600px] align-center mx-auto px-2 bg-slate-500">
                <h1 className="text-3xl text-center pb-4 font-bold underline text-white">About Gerald</h1>
                <p className="text-center text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum nulla eum fugit, quidem modi voluptatem quia perferendis officiis laudantium cupiditate pariatur odio quod similique mollitia earum vitae vero natus. Eveniet! Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam suscipit a excepturi in? Incidunt quas eos iusto nisi nam non, earum adipisci ratione mollitia, commodi sed. Temporibus soluta officiis repudiandae!</p>
                <form action="">
                    <button className="rounded-full">Link to Article</button>
                </form>
            </div>

        </div>
    )

}

export default Hero