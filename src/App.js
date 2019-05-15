import React from 'react';
import Contact from './components/Contact';
import Header from './components/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header branding="Contact Manager" />
      <Contact name="John Doe" 
      email="jdoe@gmail.com" phone="555-555-5555" />
      <Contact name="Pam Beasley" 
      email="pam@office.com" phone="111-111-1111" /> 
    </div>
  );
}

export default App;
