import React, { useState, useEffect } from 'react';
import RockridgePhoto1 from "../assets/RockridgePhoto1.jpeg";
import OrindaPhoto1 from "../assets/OrindaPhoto1.jpeg";
import TwelfthStPhoto1 from "../assets/TwelfthStPhoto1.jpg";
import NineteenthStPhoto1 from "../assets/NineteenthStPhoto1.jpg";
import MacarthurPhoto1 from "../assets/MacarthurPhoto1.jpeg";
import LafayettePhoto1 from "../assets/LafayettePhoto1.jpeg";
import WalnutCreekPhoto1 from "../assets/WalnutCreekPhoto1.jpeg";
import PleasantHillPhoto1 from "../assets/PleasantHillPhoto1.jpeg";
import ConcordPhoto1 from "../assets/ConcordPhoto1.jpeg";
import NorthConcordMartinezPhoto1 from "../assets/NorthConcordMartinezPhoto1.jpeg";
import PittsburgBayPointPhoto1 from "../assets/PittsburgBayPointPhoto1.jpeg";
import PittsburgCenterPhoto1 from "../assets/PittsburgCenterPhoto1.jpg";
import AntiochPhoto1 from "../assets/AntiochPhoto1.jpeg";


const List = () => {
  const getInitialLocations = () => {
    const savedData = localStorage.getItem('locationData');
    const data = savedData ? JSON.parse(savedData) : {};
    return [
      { id: 1, image: TwelfthStPhoto1, name: '12th St/ OaklandCity Center Bart', description: 'The local bart station that serves the Downtown Oakland area.', likes: data[1]?.likes || 0, dislikes: data[1]?.dislikes || 0 },
      { id: 2, image: NineteenthStPhoto1, name: '19th St/ Oakland Bart', description: 'The local bart station that serves the Downtown Oakland area.', likes: data[2]?.likes || 0, dislikes: data[2]?.dislikes || 0 },
      { id: 3, image: MacarthurPhoto1, name: 'Macarthur Bart', description: 'The local bart station that serves the Macarthur area.', likes: data[3]?.likes || 0, dislikes: data[3]?.dislikes || 0 },
      { id: 4, image: RockridgePhoto1, name: 'Rockridge Bart', description: 'The local bart station that serves the Telegraph area.', likes: data[4]?.likes || 0, dislikes: data[4]?.dislikes || 0 },
      { id: 5, image: OrindaPhoto1, name: 'Orinda Bart', description: 'The local bart station that serves the Orinda area.', likes: data[5]?.likes || 0, dislikes: data[5]?.dislikes || 0 },
      { id: 6, image: LafayettePhoto1, name: 'Lafayette Bart', description: 'The local bart station that serves the Lafayette area.', likes: data[6]?.likes || 0, dislikes: data[6]?.dislikes || 0 },
      { id: 7, image: WalnutCreekPhoto1, name: 'Walnut Creek Bart', description: 'The local bart station that serves the Walnut Creek area.', likes: data[7]?.likes || 0, dislikes: data[7]?.dislikes || 0 },
      { id: 8, image: PleasantHillPhoto1, name: 'Pleasant Hill/ Contra Costa Bart', description: 'The local bart station that serves the Pleasant Hill/ Contra Costa area.', likes: data[8]?.likes || 0, dislikes: data[8]?.dislikes || 0 },
      { id: 9, image: ConcordPhoto1, name: 'Concord Bart', description: 'The local bart station that serves the Concord area.', likes: data[9]?.likes || 0, dislikes: data[9]?.dislikes || 0 },
      { id: 10, image: NorthConcordMartinezPhoto1, name: 'North Concord/Martinez Bart', description: 'The local bart station that serves the North Concord/Martinez area.', likes: data[10]?.likes || 0, dislikes: data[10]?.dislikes || 0 },
      { id: 11, image: PittsburgBayPointPhoto1, name: 'Pittsburg/Bay Point Bart', description: 'The local bart station that serves the Pittsburg/Bay Point area.', likes: data[11]?.likes || 0, dislikes: data[11]?.dislikes || 0 },
      { id: 12, image: PittsburgCenterPhoto1, name: 'Pittsburg Center Bart', description: 'The local bart station that serves the Pittsburg Center area.', likes: data[12]?.likes || 0, dislikes: data[12]?.dislikes || 0 },
      { id: 13, image: AntiochPhoto1, name: 'Antioch Bart', description: 'The local bart station that serves the Antioch area.', likes: data[13]?.likes || 0, dislikes: data[13]?.dislikes || 0 },
    ];
  };

  const [locations, setLocations] = useState(getInitialLocations);

  useEffect(() => {
    const data = {};
    locations.forEach(location => {
      data[location.id] = { likes: location.likes, dislikes: location.dislikes };
    });
    localStorage.setItem('locationData', JSON.stringify(data));
  }, [locations]);

  const handleLike = (id) => {
    setLocations(prevLocations =>
      prevLocations.map(location =>
        location.id === id ? { ...location, likes: location.likes + 1 } : location
      )
    );
  };

  const handleDislike = (id) => {
    setLocations(prevLocations =>
      prevLocations.map(location =>
        location.id === id ? { ...location, dislikes: location.dislikes + 1 } : location
      )
    );
  };

   const [image, setImage] = useState ("");
   const [name, setName] = useState ("");
   const [description, setDescription] = useState ("");

   function handleSubmit (event){
     event.preventDefault();
        const newLocation = {
        id: Date.now(),
        image: image,
        name: name,
        description: description,
        likes: 0,
        dislikes: 0
     };
      setLocations([...locations, newLocation]);
      setImage("")
      setName("")
      setDescription("");
    }

  function handleImageChange(event){
    const file = event.target.files[0];
    setImage(URL.createObjectURL(file))
  }

  
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">List of Locations</h1>
      <ul className="space-y-4">
        {locations.map((location) => (
          <li key={location.id} className="border border-gray-300 rounded-lg p-4 shadow-sm">
            <div className="flex items-center gap-3">
              {location.image && (
                <img src={location.image} alt={`${location.name} thumbnail`} className="w-16 h-16 rounded-lg object-cover" />
              )}
              <div>
                <h2 className="text-lg font-semibold">{location.name}</h2>
                <p className="text-gray-600">{location.description}</p>
                <div className="flex items-center gap-2 mt-2">
                  <button
                    onClick={() => handleLike(location.id)}
                    className="flex items-center gap-2 bg-gray-100 hover:bg-red-100 px-4 py-2 rounded-full transition-all duration-200"
                  >
                    <span className="text-xl">👍</span>
                    <span className="font-bold text-gray-700">{location.likes}</span>
                  </button>
                  <button
                    onClick={() => handleDislike(location.id)}
                    className="flex items-center gap-2 bg-gray-100 hover:bg-blue-100 px-4 py-2 rounded-full transition-all duration-200"
                  >
                    <span className="text-xl">👎</span>
                    <span className="font-bold text-gray-700">{location.dislikes}</span>
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
        <br></br>
        <p class="mt-1 text-[18px] text-gray-600">Add additional locations here!</p>

        <br></br>

       <form onSubmit={handleSubmit}>
         <input
         className="border"
         class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 
         outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 
         focus-within:outline-indigo-600 px-3 py-1.5"
         type="text"
         placeholder="Name"
         value={name}
                  onChange={(event) => setName(event.target.value)}
         />

         <br></br><br></br>

        <input
         className="border"
         class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 
         placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
         type="text"
         placeholder="Description"
         value={description}
                  onChange={(event) => setDescription(event.target.value)}
         />

         <br></br><br></br>

         <input
         class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10"
         type="file" 
         placeholder="Image"
                  onChange={handleImageChange}
         />

         <br></br><br></br>

        <button 
        type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white 
        shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 
        focus-visible:outline-indigo-600">Submit
        </button>

         </form>


    </div>
  );
};

export default List;