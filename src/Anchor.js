import React from 'react'
// import { Link } from 'react-router-dom';

export const Anchor = () => {
   
   
   function refreshPage() {
     window.location.reload(false);
     
   }
  return (
    
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <button className='btn' onClick={refreshPage}>
        Refresh
      </button>
      {/* <Link to={'/home'} className='btn'>
        Back to homepage
      </Link> */}
      
    </div>
  );
}
