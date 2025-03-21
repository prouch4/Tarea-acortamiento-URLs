import './App.css';
import UrlShortener from "./components/url_shortener";
import React, { useState, useEffect } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <div className="container">
      <div className="switch-container">
        <input 
          type="checkbox" 
          id="theme-toggle" 
          className="theme-toggle-checkbox" 
          checked={darkMode}
          onChange={toggleDarkMode} 
        />
        <label htmlFor="theme-toggle" className="theme-toggle-label">
          <span className="fa-icon">
            {darkMode ? (
              <i className="fa-solid fa-sun icon-color"></i>
            ) : (
              <i className="fa-solid fa-moon icon-color"></i>
            )}
          </span>
        </label>
      </div>
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <UrlShortener />
      </div>
    </div>
  );
}

export default App;

