// client/src/components/Hero.js
import React from 'react';
// 1. Import your new component
import IngredientSearch from './IngredientSearch';

function Hero() {
  // 2. We no longer need useState or handleSearch here

  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1>Discover Your Next Favorite Recipe</h1>
        <p>Explore delicious recipes from around the world</p>
        
        {/* 3. Replace the entire <form> block with this one line */}
        <IngredientSearch />
        
      </div>
    </div>
  );
}

export default Hero;