import React from 'react';

function Rankings() {
  const mapRankings = [
    { id: 1, location: 'Rockridge Bart', score: 4.8 }
  ]


  return (
    <div style={{ padding: '24px', maxWidth: '760px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '18px' }}>Map Location Rankings</h1>
      <p style={{ marginBottom: '18px', color: '#444' }}>
        These locations are ranked by popularity and user rating.
      </p>
      <ul style={{ listStyle: 'none', padding: '0', margin: '0' }}>
        {mapRankings.map(item => (
          <li key={item.id} style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            border: '1px solid #e2e8f0',
            borderRadius: '8px',
            padding: '12px 16px',
            marginBottom: '10px',
            background: '#fff'
          }}>
            <div>
              <strong>{item.location}</strong>
              <div style={{ color: '#666' }}>#{item.id}</div>
            </div>
            <span style={{ fontWeight: '600' }}>{item.score}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Rankings;
