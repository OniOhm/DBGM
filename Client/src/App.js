import React from 'react';

import './App.css';

import Login from './components/loginin';
import Deckbox from './components/Deckbox';
import Carddock from './components/Carddock';

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
