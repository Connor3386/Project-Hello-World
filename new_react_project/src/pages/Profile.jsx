import React from 'react';

function Profile() {
  const user = {
    name: 'Example Name',
    email: 'example.email@example.com',
    location: 'Example Location',
    bio: 'Example bio for the user.',

  };

  return (
    <div style={{ maxWidth: '520px', margin: '30px auto', padding: '20px', border: '1px solid #ddd', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ width: '100px', height: '100px', borderRadius: '50%', backgroundColor: '#f2f2f2', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px', marginBottom: '12px' }}>
          EX
        </div>
        <h1 style={{ margin: '0 0 8px' }}>{user.name}</h1>
        <p style={{ margin: '0 0 5px', color: '#666' }}>{user.location}</p>
      </div>

      <div style={{ marginTop: '18px' }}>
        <div style={{ marginBottom: '8px' }}>
          <strong>Email:</strong> {user.email}
        </div>
        <div style={{ marginBottom: '8px' }}>
          <strong>Bio:</strong> {user.bio}
        </div>
        
      </div>
    </div>
  );
}

export default Profile;
