import React from 'react';
import { Link } from 'react-router-dom';

  return (
    <div>
      <h1>Home Map</h1>
      
      <div>
        <Link to="/list">
          <button>Go to List Page</button>
        </Link>
        <button onClick={handleRelocate}>Relocate to My Location</button>
        <Link to="/about">
          <button>Go to About Us</button>
        </Link>
      </div>
    </div>
  );


export default HomeMap;
