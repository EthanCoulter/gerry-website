import React from "react";
import gerryBook from "../assets/gerryBook.jpg"

const Book = () => {
    return (
        <div className=" flex justify-between mx-2">
            <div>
                <div className="max-w-[400px]">
                    <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam eos blanditiis, perferendis nam fuga temporibus laudantium ratione consectetur ipsa possimus excepturi, error quos consequatur iusto, quasi fugiat itaque doloremque! Vel?
                        Animi quis labore, alias iste similique asperiores iure ducimus obcaecati architecto sapiente dolorem eos? Quos consectetur dolor impedit perferendis, earum adipisci doloremque! Totam, deserunt itaque dicta quae quas enim dolorum. </p>
                </div>
                <form action="https://community.cwla.org/store/viewproduct.aspx?id=21969852">
                    <button className="rounded-full bg-[#254966]">Purchase Book</button>
                </form>

            </div>

            <div>
                <img src={gerryBook} alt="" />
            </div>

        </div>
    )
}

export default Book