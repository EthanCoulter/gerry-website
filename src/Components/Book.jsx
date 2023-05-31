import React from "react";
import gerryBook from "../assets/gerryBook.jpg"

const Book = () => {
    return (
        <div id="abc" className="flex flex-col-reverse justify-between items-center px-5 bg-light-shade md:flex-row">
            <div className="flex flex-col items-center">
                <div className="flex flex-col items-center max-w-[400px] pb-5 bg-gray-400 rounded-b-lg mb-5 tablet:rounded-b-none">
                <h1 className="text-3xl pb-4 font-bold underline text-white">Textbook</h1>
                    <p className="pb-5 m-2"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam eos blanditiis, perferendis nam fuga temporibus laudantium ratione consectetur ipsa possimus excepturi, error quos consequatur iusto, quasi fugiat itaque doloremque! Vel?
                        Animi quis labore, alias iste similique asperiores iure ducimus obcaecati architecto sapiente dolorem eos? Quos consectetur dolor impedit perferendis, earum adipisci doloremque! Totam, deserunt itaque dicta quae quas enim dolorum. </p>
                        <button className="bg-transparent hover:bg-dark-accent text-white font-semibold hover:text-white py-2 px-4 border border-dark-shade rounded ease-in-out duration-200"><a href="https://community.cwla.org/store/viewproduct.aspx?id=21969852" target="_blank" rel="noreferrer noopener">Purchase book</a></button>
                </div>
                
            </div>

            
                <img className="rounded-t-lg w-full tablet:rounded-t-none tablet:w-[400px]" src={gerryBook} alt="" />

        </div>
    )
}

export default Book