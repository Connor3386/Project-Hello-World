import ConnorPhoto from "./assets/ConnorPhoto.jpeg"
import { useState } from "react";
import Card from "./Card.jsx";
import LikeButton from "./components/LikeButton.jsx"


function Header(){
  const [isOpen, setIsOpen] = useState(false);

  return(
    <div>
    <header className="bg-gray-900 text-white px-6 py-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">YourBrandName</h1>

        <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-2xl">
          {isOpen ? "x" : "☰"}
        </button>

        <LikeButton/>
      </div>

      {isOpen&& (
        <nav className="mt-4">
          <ul className="flex flex-col gap-2">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      )}
    </header>


    </div>
  );

}

export default Header;