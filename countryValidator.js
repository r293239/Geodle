// countryValidator.js - Integration logic for Geodle game
import { isValidCountry, getOfficialCountryName, normalizeCountryName } from './countries.js';

export class CountryValidator {
  constructor() {
    this.lastError = null;
  }

  // Main validation function for the game
  validateGuess(userInput) {
    this.lastError = null;
    
    // Check if input is empty
    if (!userInput || !userInput.trim()) {
      this.lastError = "Please enter a country name";
      return { isValid: false, countryName: null };
    }

    // Clean the input
    const cleanInput = userInput.trim();
    
    // Check if country exists
    if (!isValidCountry(cleanInput)) {
      this.lastError = `"${cleanInput}" is not a recognized country name. Please try again.`;
      return { isValid: false, countryName: null };
    }

    // Get the official name
    const officialName = getOfficialCountryName(cleanInput);
    
    return { 
      isValid: true, 
      countryName: officialName,
      originalInput: cleanInput
    };
  }

  // Get the last validation error
  getLastError() {
    return this.lastError;
  }

  // Function to show suggestions for close matches (optional enhancement)
  getSuggestions(userInput, maxSuggestions = 3) {
    if (!userInput || userInput.length < 2) return [];
    
    const normalizedInput = normalizeCountryName(userInput);
    const suggestions = [];
    
    // Import the countries list here to avoid circular imports
    import('./countries.js').then(({ VALID_COUNTRIES, COUNTRY_ALIASES }) => {
      // Check for partial matches in country names
      VALID_COUNTRIES.forEach(country => {
        const normalizedCountry = normalizeCountryName(country);
        if (normalizedCountry.includes(normalizedInput) || 
            normalizedInput.includes(normalizedCountry)) {
          suggestions.push(country);
        }
      });

      // Check aliases too
      Object.keys(COUNTRY_ALIASES).forEach(alias => {
        const normalizedAlias = normalizeCountryName(alias);
        if (normalizedAlias.includes(normalizedInput) || 
            normalizedInput.includes(normalizedAlias)) {
          suggestions.push(COUNTRY_ALIASES[alias]);
        }
      });
    });
    
    // Remove duplicates and limit results
    return [...new Set(suggestions)].slice(0, maxSuggestions);
  }
}

// Example usage for integration into your existing game code:
export function integrateWithGameLogic() {
  const validator = new CountryValidator();
  
  // Example of how to modify your existing guess submission function
  function handleGuessSubmission(userInput) {
    const validation = validator.validateGuess(userInput);
    
    if (!validation.isValid) {
      // Show error message to user
      displayError(validator.getLastError());
      return false; // Don't process the guess
    }
    
    // If valid, proceed with your existing game logic
    processValidGuess(validation.countryName);
    return true;
  }
  
  // Example error display function
  function displayError(errorMessage) {
    // You can customize this to match your game's UI
    const errorElement = document.getElementById('error-message') || createErrorElement();
    errorElement.textContent = errorMessage;
    errorElement.style.display = 'block';
    
    // Auto-hide error after 3 seconds
    setTimeout(() => {
      errorElement.style.display = 'none';
    }, 3000);
  }
  
  function createErrorElement() {
    const errorDiv = document.createElement('div');
    errorDiv.id = 'error-message';
    errorDiv.style.cssText = `
      color: #e74c3c;
      background-color: #fdf2f2;
      border: 1px solid #e74c3c;
      border-radius: 4px;
      padding: 10px;
      margin: 10px 0;
      display: none;
      font-size: 14px;
    `;
    
    // Insert after the guess input field
    const guessInput = document.querySelector('input[type="text"]') || document.querySelector('input');
    if (guessInput && guessInput.parentNode) {
      guessInput.parentNode.insertBefore(errorDiv, guessInput.nextSibling);
    }
    
    return errorDiv;
  }
  
  return { handleGuessSubmission, displayError, validator };
}

// Export the main functions for easy integration
export { CountryValidator as default };
