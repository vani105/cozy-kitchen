// src/pages/HomePage.js
import React from 'react';
import Hero from '../components/Hero';
import RecipeList from '../components/RecipeList';

function HomePage() {
  return (
    <main>
      <Hero />
      <RecipeList />
    </main>
  );
}

export default HomePage;