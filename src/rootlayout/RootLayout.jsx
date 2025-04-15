import React from 'react';
import { Outlet } from 'react-router-dom';
import StickyNav from '../components/StickyNav';


const RootLayout = () => {
  return (
    <div>
    
      <main>
        <Outlet /> {/* Renders child routes */}
       
      </main>
 
    </div>
  );
};

export default RootLayout;
