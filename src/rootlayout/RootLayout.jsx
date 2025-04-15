import React from 'react';
import { Outlet } from 'react-router-dom';
import StickyNav from '../components/StickyNav';


const RootLayout = () => {
  return (
    <div>
    
      <main className='mt-10' >
        <Outlet /> {/* Renders child routes */}
       
      </main>
 
    </div>
  );
};

export default RootLayout;
