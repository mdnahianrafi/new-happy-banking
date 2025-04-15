import React from 'react';
import { Outlet } from 'react-router-dom';
import StickyNav from '../components/StickyNav';


const RootLayout = () => {
  return (
    <div>
    
      <main className='' >
        <Outlet /> {/* Renders child routes */}
       
      </main>
 
    </div>
  );
};

export default RootLayout;
