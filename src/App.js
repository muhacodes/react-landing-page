import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';

function App() {
  const [navbarPadding, setNavbarPadding] = useState('10px'); // Default value

  useEffect(() => {
    // Get the element whose offset you want to use (you can use useRef for this)
    const navbarElement = document.querySelector('#navbar');
    
    // Get the offsetTop property of the element (you can adjust this as needed)
    const navbarOffset = navbarElement.offsetHeight;
    
    // Set the --navbar-padding CSS variable to the offset value
    document.documentElement.style.setProperty('--navbar-padding', `${navbarOffset}px`);
    
    // Update the state to reflect the new value
    setNavbarPadding(`${navbarOffset}px`);

    console.log(navbarOffset);
  }, []); //
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
