import React from 'react';
import logo from './logo.svg';

import Links from "./components/Links"
import LinkForm from './components/LinkForm';
import {ToastContainer} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";


function App() {
  return (
    <div className="container p-4">
      <div className="row">
          <Links />
      </div>
      <ToastContainer/>
    </div>

  );
}

export default App;
