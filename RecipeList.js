// src/components/RecipeList.js
import React from 'react';
import RecipeCard from './RecipeCard';

// Mock data based on your video
const recipes = [
  { id: 1, title: 'Mexican Street Tacos', img: 'https://via.placeholder.com/300x200.png?text=Tacos' },
  { id: 2, title: 'Japanese Sushi Platter', img: 'https://via.placeholder.com/300x200.png?text=Sushi' },
  { id: 3, title: 'French Croissants', img: 'https://via.placeholder.com/300x200.png?text=Croissants' },
  { id: 4, title: 'Indian Chicken Biryani', img: 'https://via.placeholder.com/300x200.png?text=Biryani' },
  { id: 5, title: 'Gourmet Burger', img: 'https://via.placeholder.com/300x200.png?text=Burger' },
  { id: 6, title: 'Thai Green Curry', img: 'https://via.placeholder.com/300x200.png?text=Curry' },
];

function RecipeList() {
  return (
    <div className="recipe-list-container">
      <div className="recipe-grid">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}

export default RecipeList;