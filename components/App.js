import React, { useState } from 'react';
import Navbar from './Navbar';

const App = () => {
  const [currentNavbarView, setCurrentNavbarView] = useState('SIGN_UP');
  return (
    <div id='app-container'>
      <Navbar 
        currentNavbarView={currentNavbarView}
      />
    </div>
  );
};

export default App;
