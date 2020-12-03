import React from 'react';

import './App.css';



import Carddock from './components/Carddock/Carddock';

// components


function App() {
  return (
    <div>
      <div className='navbar is-primary'>
        <p className='navbar-item has-text-white'>Building Game Manager</p>
        <div className='buttons navbar-item navbar-end '>
          <button className='button is-warning has-text-white'>Signup</button>
        </div>
      </div>
      <Carddock></Carddock>

    </div>
  );
}

export default App;
