import React, { useEffect, useState } from 'react';
import TwelfthStPhoto1 from '../assets/TwelfthStPhoto1.jpg';
import NineteenthStPhoto1 from '../assets/NineteenthStPhoto1.jpg';
import MacarthurPhoto1 from '../assets/MacarthurPhoto1.jpeg';
import RockridgePhoto1 from '../assets/RockridgePhoto1.jpeg';
import OrindaPhoto1 from '../assets/OrindaPhoto1.jpeg';
import LafayettePhoto1 from '../assets/LafayettePhoto1.jpeg';
import WalnutCreekPhoto1 from '../assets/WalnutCreekPhoto1.jpeg';
import PleasantHillPhoto1 from '../assets/PleasantHillPhoto1.jpeg';
import ConcordPhoto1 from '../assets/ConcordPhoto1.jpeg';
import NorthConcordMartinezPhoto1 from '../assets/NorthConcordMartinezPhoto1.jpeg';
import PittsburgBayPointPhoto1 from '../assets/PittsburgBayPointPhoto1.jpeg';
import PittsburgCenterPhoto1 from '../assets/PittsburgCenterPhoto1.jpg';
import AntiochPhoto1 from '../assets/AntiochPhoto1.jpeg';

function Rankings() {
  const [rankings, setRankings] = useState([]);

  useEffect(() => {
    const savedData = localStorage.getItem('locationData');
    const storedLocations = savedData ? JSON.parse(savedData) : {};

    const defaultLocations = [
      { id: 1, location: '12th St/ Oakland City Center Bart', image: TwelfthStPhoto1 },
      { id: 2, location: '19th St/ Oakland Bart', image: NineteenthStPhoto1 },
      { id: 3, location: 'Macarthur Bart', image: MacarthurPhoto1 },
      { id: 4, location: 'Rockridge Bart', image: RockridgePhoto1 },
      { id: 5, location: 'Orinda Bart', image: OrindaPhoto1 },
      { id: 6, location: 'Lafayette Bart', image: LafayettePhoto1 },
      { id: 7, location: 'Walnut Creek Bart', image: WalnutCreekPhoto1 },
      { id: 8, location: 'Pleasant Hill/Contra Costa Bart', image: PleasantHillPhoto1 },
      { id: 9, location: 'Concord Bart', image: ConcordPhoto1 },
      { id: 10, location: 'North Concord/Martinez Bart', image: NorthConcordMartinezPhoto1 },
      { id: 11, location: 'Pittsburg/Bay Point Bart', image: PittsburgBayPointPhoto1 },
      { id: 12, location: 'Pittsburg Center Bart', image: PittsburgCenterPhoto1 },
      { id: 13, location: 'Antioch Bart', image: AntiochPhoto1 },
    ];

    const loaded = defaultLocations.map((location) => {
      const entry = storedLocations[location.id] || { likes: 0, dislikes: 0 };
      return {
        ...location,
        likes: entry.likes || 0,
        dislikes: entry.dislikes || 0,
        score: (entry.likes || 0) - (entry.dislikes || 0),
      };
    });

    loaded.sort((a, b) => b.score - a.score || b.likes - a.likes || a.location.localeCompare(b.location));
    setRankings(loaded);
  }, []);

  return (
    <div style={{ padding: '24px', maxWidth: '960px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '18px' }}>Map Location Rankings</h1>
      <p style={{ marginBottom: '18px', color: '#444' }}>
        Locations are ranked by net popularity (likes minus dislikes). Thumbnails show each location.
      </p>
      <ul style={{ listStyle: 'none', padding: '0', margin: '0' }}>
        {rankings.map((item, index) => (
          <li
            key={item.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '16px',
              border: '1px solid #e2e8f0',
              borderRadius: '8px',
              padding: '12px 16px',
              marginBottom: '12px',
              background: '#fff',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <img src={item.image} alt={`${item.location} thumbnail`} style={{ width: '72px', height: '72px', objectFit: 'cover', borderRadius: '8px' }} />
              <div>
                <strong style={{ display: 'block', marginBottom: '6px' }}>{index + 1}. {item.location}</strong>
                <div style={{ color: '#666' }}>
                  Likes: {item.likes} · Dislikes: {item.dislikes}
                </div>
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <span style={{ display: 'block', fontSize: '1rem', fontWeight: 700, color: item.score >= 0 ? '#2563eb' : '#dc2626' }}>
                {item.score >= 0 ? '+' : ''}{item.score}
              </span>
              <span style={{ color: '#999', fontSize: '0.95rem' }}>Net score</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Rankings;
