import React from 'react';

import './error-indicator.css';

const ErrorIndicator = () => {
  return (
      <div className="error-indicator">
          <img src="/gifs/angry_cat.gif"
               alt="angry-cat"
               className="main-gif"/>
      </div>
      );
};

export default ErrorIndicator;
