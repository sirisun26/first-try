import React from 'react';
import { RouterProvider } from 'react-router-dom';

import router from './router';

//import logo from './logo.svg';
import './App.css';
//import MyButton from './MyButton';


function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}


export default App;



{/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn react
        </a>
        <MyButton/>
      </header> */}
