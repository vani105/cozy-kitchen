import React, { useState, useEffect } from 'react';
import axios from 'axios';
// We don't need to import the CSS file here if you combined it into App.css

const IngredientSearch = () => {
  const [ingredients, setIngredients] = useState([]);
  const [currentInput, setCurrentInput] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  // --- Main Search Function ---
  // This function will be called whenever the ingredient list changes
  const searchForRecipes = (currentIngredientList) => {
    // For now, we'll just log it.
    // Later, this will call the Spoonacular "Search by Ingredients" API.
    if (currentIngredientList.length > 0) {
      console.log('SEARCHING FOR RECIPES WITH:', currentIngredientList.join(', '));
      // --- Example API call you would add later ---
      // const ingredientString = currentIngredientList.join(',');
      // const response = await axios.get('https://api.spoonacular.com/recipes/findByIngredients', {
      //   params: {
      //     apiKey: process.env.REACT_APP_SPOONACULAR_API_KEY,
      //     ingredients: ingredientString,
      //     number: 10
      //   }
      // });
      // console.log(response.data);
    } else {
      console.log('No ingredients to search for.');
    }
  };

  // --- Autocomplete Suggestions ---
  useEffect(() => {
    if (currentInput.trim().length < 2) {
      setSuggestions([]);
      return;
    }
    const delayDebounceFn = setTimeout(() => {
      fetchSuggestions(currentInput);
    }, 300);
    return () => clearTimeout(delayDebounceFn);
  }, [currentInput]);

  const fetchSuggestions = async (query) => {
    try {
      const response = await axios.get('https://api.spoonacular.com/food/ingredients/autocomplete', {
        params: {
          apiKey: process.env.REACT_APP_SPOONACULAR_API_KEY,
          query: query,
          number: 10
        }
      });
      setSuggestions(response.data);
    } catch (error) {
      console.error('Error fetching ingredient suggestions:', error);
    }
  };

  // --- Helper Functions for adding/removing ingredients ---

  const addIngredient = (name) => {
    const formattedName = name.toLowerCase().trim();
    if (formattedName && !ingredients.includes(formattedName)) {
      const newIngredients = [...ingredients, formattedName];
      setIngredients(newIngredients);
      searchForRecipes(newIngredients); // Trigger search
    }
    setCurrentInput('');
    setSuggestions([]);
  };

  const removeIngredient = (indexToRemove) => {
    const newIngredients = ingredients.filter((_, index) => index !== indexToRemove);
    setIngredients(newIngredients);
    searchForRecipes(newIngredients); // Trigger search
  };

  // --- Event Handlers ---
  const handleKeyDown = (e) => {
    // If Enter is pressed and there's text in the input
    if (e.key === 'Enter' && currentInput.trim()) {
      e.preventDefault(); // Stop the form from submitting
      
      // Check if there are any suggestions from the server
      if (suggestions.length > 0) {
        // If there are suggestions, add the *first one* from the list
        addIngredient(suggestions[0].name); 
      }
      // If there are no suggestions (e.g., you typed "asdfg"),
      // it will do nothing, preventing the "mistaken ingredient"
    }
  };

  

  const onSuggestionClick = (name) => {
    addIngredient(name);
  };

  return (
    <div className="ingredient-search-container">
      <label>To begin, enter the ingredients you have nearby.</label>
      
      <div className="ingredient-input-wrapper">
        {/* --- REPLACE THE OLD INPUT BOX WITH THIS --- */}
        <div className="ingredient-input-box">
          {/* This new wrapper holds the tags and the text input */}
          <div className="tags-input-wrapper">
            {ingredients.map((ingredient, index) => (
              <div key={index} className="ingredient-tag">
                {ingredient}
                <button
                  type="button"
                  className="remove-tag-button"
                  onClick={() => removeIngredient(index)}
                >
                  &times;
                </button>
              </div>
            ))}
            <input
              type="text"
              className="ingredient-input-field"
              value={currentInput}
              onChange={(e) => setCurrentInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Add an ingredient..."
              autoComplete="off"
            />
          </div>

          {/* This is the vertical separator line */}
          <div className="search-separator"></div>

          {/* This is the search button, now outside the wrapper */}
          <button 
            type="button" 
            className="ingredient-search-button"
            onClick={() => searchForRecipes(ingredients)}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
            </svg>
          </button>
        </div>
        {/* --- END OF REPLACEMENT --- */}

        {suggestions.length > 0 && (
          <ul className="suggestions-list">
            {suggestions.map((suggestion) => (
              <li
                key={suggestion.id}
                onClick={() => onSuggestionClick(suggestion.name)}
              >
                {suggestion.name}
              </li>
            ))}
          </ul>
        )}

      </div>
    </div>
  );
};

export default IngredientSearch;