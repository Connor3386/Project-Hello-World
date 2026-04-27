import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BartPhoto from '../assets/BartPhoto.png';

function HomeMap() {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const locations = [
    {
      id: 1,
      name: 'Rockridge',
      top: '28%',
      left: '47%',
      width: '100px',
      height: '30px',
      description: 'The local bart station that serves the Rockridge area.',
      details: '',
    },
    {
      id: 2,
      name: 'Orinda',
      top: '25%',
      left: '49%',
      width: '85px',
      height: '30px',
      description: 'The local bart station that serves the Orinda area.',
      details: '',
    },
     {
      id: 3,
      name: 'Lafayette',
      top: '22%',
      left: '52%',
      width: '105px',
      height: '30px',
      description: 'The local bart station that serves the Lafayette area.',
      details: '',
    },
    {
      id: 4,
      name: 'Walnut Creek',
      top: '19%',
      left: '54%',
      width: '130px',
      height: '30px',
      description: 'The local bart station that serves the Walnut Creek area.',
      details: '',
    },

    {
      id: 5,
      name: 'Pleasant Hill/ Contra Costa',
      top: '16%',
      left: '62.5%',
      width: '250px',
      height: '30px',
      description: 'The local bart station that serves the Pleasant Hill/ Contra Costa area.',
      details: '',
    },
   
   
    {
      id: 6,
      name: 'Concord',
      top: '13%',
      left: '59%',
      width: '100px',
      height: '30px',
      description: 'Concord Bart station is the bart station that serves the city of Concord.',
      details: '',
    },
    {
      id: 7,
      name: 'North Concord/ Martinez',
      top: '5%',
      left: '55%',
      width: '130px',
      height: '67px',
      description: 'North Concord/ Martinez Bart station is the bart station that serves the city of North Concord and Martinez.',
      details: '',
    },
     {
      id: 8,
      name: 'Pittsburg/ Bay Point',
      top: '5%',
      left: '65.5%',
      width: '120px',
      height: '67px',
      description: 'Pittsburg/ Bay Point Bart station is the bart station that serves the city of Pittsburg and Bay Point.',
      details: '',
    },
      {
      id: 9,
      name: 'Pittsburg Center',
      top: '5%',
      left: '75%',
      width: '120px',
      height: '67px',
      description: 'Pittsburg Centerstation is a bart station that serves the area of Pittsburg.',
      details: '',
    },
    {
      id: 10,
      name: 'Antioch',
      top: '9.7%',
      left: '81%',
      width: '110px',
      height: '30px',
      description: 'Antioch Bart station is the bart station that serves the city of Antioch.',
      details: '',
    },
     {
      id: 11,
      name: 'Macarthur',
      top: '32.5%',
      left: '45.5%',
      width: '100px',
      height: '30px',
      description: 'The local bart station that serves the Macarthur area.',
      details: '',
    },
     {
      id: 12,
      name: '19th St/ Oakland',
      top: '35.75%',
      left: '47%',
      width: '135px',
      height: '30px',
      description: 'The local bart station that serves the Downtown Oakland area.',
      details: '',
    },
     {
      id: 13,
      name: '12th St/ Oakland City Center',
      top: '39%',
      left: '50.65%',
      width: '230px',
      height: '30px',
      description: '',
      details: 'The local bart station that serves the Downtown Oakland area.',
    },
  ];

  return (
    <div style={{ minHeight: '100vh', width: '100%', margin: 0, padding: 0, background: '#f6f2ed' }}>
      <div style={{ width: '100%', padding: '24px', boxSizing: 'border-box' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '2.4rem', margin: '0 0 12px', color: '#3d322c' }}>Interactive Map</h1>
          <p style={{ marginBottom: '24px', color: '#5b4c45' }}>Click the marker to reveal location details below the map.</p>
        </div>
      </div>

      <div style={{ width: '100%', minHeight: '80vh', background: 'transparent' }}>
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          <img
            src={BartPhoto}
            alt="Interactive map background"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />

          {locations.map((location) => (
            <button
              key={location.id}
              onClick={() => setSelectedLocation(location)}
              style={{
                position: 'absolute',
                top: location.top,
                left: location.left,
                transform: 'translate(-50%, -50%)',
                background: selectedLocation?.id === location.id ? '#000000ff' : '#ffffffff',
                color: selectedLocation?.id === location.id ? '#ffffffff' : '#000000',
                height: location.height,
                width: location.width,
                border: '2px solid #fff',
                borderRadius: '999px',
                fontWeight: 700,
                cursor: 'pointer',
                boxShadow: '0 10px 24px rgba(0,0,0,0.18)',
                zIndex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              {location.name}
            </button>
          ))}
        </div>
      </div>

      <div style={{ width: '100%', padding: '24px', boxSizing: 'border-box', background: '#fff7ef' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto', borderRadius: '20px', padding: '24px', background: '#ffffff', boxShadow: '0 20px 50px rgba(88, 66, 46, 0.08)' }}>
          <h2 style={{ margin: '0 0 16px', color: '#4b3b31' }}>Location details</h2>
          {selectedLocation ? (
            <>
              <p style={{ margin: 0, fontSize: '1.2rem', fontWeight: 700, color: '#3d2d24' }}>{selectedLocation.name}</p>
              <p style={{ margin: '12px 0 8px', color: '#5a4a42' }}>{selectedLocation.description}</p>
              <p style={{ margin: 0, color: '#6c5a51' }}>{selectedLocation.details}</p>
            </>
          ) : (
            <p style={{ margin: 0, color: '#6c5a51' }}>Click a marker to reveal information about the location below.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default HomeMap;

            

            