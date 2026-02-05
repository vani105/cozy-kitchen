// src/components/RecipeCard.js
import React from 'react';

function RecipeCard({ recipe }) {
  return (
    <div className="recipe-card">
      <img src={recipe.img} alt={recipe.title} className="recipe-card-image" />
      <div className="recipe-card-content">
        <h3>{recipe.title}</h3>
        {/* You can add more info like time, rating, etc. here */}
      </div>
    </div>
  );
}

export default RecipeCard;