import { Link } from 'react-router-dom';
import BartPhoto from "../assets/BartPhoto.png"
function Home() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Home Page</h1>
      
      <div style={{ 
        border: '1px solid #ccc', 
        borderRadius: '8px', 
        padding: '20px', 
        marginTop: '20px',
        maxWidth: '1500px'
      }}>
        
        <div style={{ 
          width: '100%', 
          height: '600px', 
          backgroundColor: '#e0e0e0', 
          borderRadius: '4px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '15px'
        }}>
         
          <img src={BartPhoto} alt="Bart Station" style={{ maxWidth: '100%', maxHeight: '100%' }} />

        </div>
        
        <div style={{ display: 'flex', gap: '10px' }}>
          <Link to="/homemap" style={{ flex: 1 }}>
            <button style={{ width: '100%', padding: '10px' }}>View Full Map</button>
          </Link>
          <Link to="/list" style={{ flex: 1 }}>
            <button style={{ width: '100%', padding: '10px' }}>View List</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
