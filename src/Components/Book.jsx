import React from "react";
import gerryBook from "../assets/gerryBook.jpg"

const Book = () => {
    return (
        <div className="flex flex-col-reverse py-10 justify-between items-center mx-2 md:flex-row">
            <div className="flex flex-col items-center">
                <div className="flex flex-col items-center max-w-[400px] pb-10 bg-gray-400">
                    <p className="pb-5 m-2"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam eos blanditiis, perferendis nam fuga temporibus laudantium ratione consectetur ipsa possimus excepturi, error quos consequatur iusto, quasi fugiat itaque doloremque! Vel?
                        Animi quis labore, alias iste similique asperiores iure ducimus obcaecati architecto sapiente dolorem eos? Quos consectetur dolor impedit perferendis, earum adipisci doloremque! Totam, deserunt itaque dicta quae quas enim dolorum. </p>
                        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"><a href="https://community.cwla.org/store/viewproduct.aspx?id=21969852" target="_blank" rel="noreferrer noopener">Purchase book</a></button>
                </div>
                
            </div>

            <div>
                <img className="pb-5" src={gerryBook} alt="" />
            </div>

        </div>
    )
}

export default Book