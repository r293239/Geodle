// countries.js - Complete list of valid countries for Geodle game
export const VALID_COUNTRIES = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda",
  "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain",
  "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan",
  "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria",
  "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada",
  "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros",
  "Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Czechia",
  "Democratic Republic of the Congo", "Denmark", "Djibouti", "Dominica", "Dominican Republic",
  "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia",
  "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia",
  "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau",
  "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran",
  "Iraq", "Ireland", "Israel", "Italy", "Ivory Coast", "Jamaica", "Japan", "Jordan",
  "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan", "Laos", "Latvia",
  "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg",
  "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands",
  "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia",
  "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal",
  "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea",
  "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama",
  "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal",
  "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia",
  "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe",
  "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore",
  "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea",
  "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland",
  "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo",
  "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu",
  "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States",
  "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam",
  "Yemen", "Zambia", "Zimbabwe"
];

// Alternative names and common variations
export const COUNTRY_ALIASES = {
  "USA": "United States",
  "US": "United States",
  "America": "United States",
  "UK": "United Kingdom",
  "Britain": "United Kingdom",
  "Great Britain": "United Kingdom",
  "England": "United Kingdom",
  "Scotland": "United Kingdom",
  "Wales": "United Kingdom",
  "Northern Ireland": "United Kingdom",
  "UAE": "United Arab Emirates",
  "Congo Republic": "Congo",
  "Republic of the Congo": "Congo",
  "DRC": "Democratic Republic of the Congo",
  "Congo-Kinshasa": "Democratic Republic of the Congo",
  "Congo-Brazzaville": "Congo",
  "Czech": "Czech Republic",
  "Macedonia": "North Macedonia",
  "Burma": "Myanmar",
  "Swaziland": "Eswatini",
  "Cape Verde": "Cabo Verde",
  "East Timor": "Timor-Leste",
  "North Korea": "North Korea",
  "South Korea": "South Korea"
};

// Function to normalize country names for comparison
export function normalizeCountryName(name) {
  return name.trim()
    .toLowerCase()
    .replace(/[^\w\s]/g, '') // Remove special characters
    .replace(/\s+/g, ' '); // Normalize whitespace
}

// Function to validate if a country exists
export function isValidCountry(inputCountry) {
  if (!inputCountry || typeof inputCountry !== 'string') {
    return false;
  }
  
  const normalizedInput = normalizeCountryName(inputCountry);
  
  // Check direct matches in valid countries
  const directMatch = VALID_COUNTRIES.some(country => 
    normalizeCountryName(country) === normalizedInput
  );
  
  if (directMatch) return true;
  
  // Check aliases
  const aliasMatch = Object.keys(COUNTRY_ALIASES).some(alias => 
    normalizeCountryName(alias) === normalizedInput
  );
  
  return aliasMatch;
}

// Function to get the official country name (handles aliases)
export function getOfficialCountryName(inputCountry) {
  if (!inputCountry || typeof inputCountry !== 'string') {
    return null;
  }
  
  const normalizedInput = normalizeCountryName(inputCountry);
  
  // Check direct matches first
  const directMatch = VALID_COUNTRIES.find(country => 
    normalizeCountryName(country) === normalizedInput
  );
  
  if (directMatch) return directMatch;
  
  // Check aliases
  const aliasKey = Object.keys(COUNTRY_ALIASES).find(alias => 
    normalizeCountryName(alias) === normalizedInput
  );
  
  if (aliasKey) {
    return COUNTRY_ALIASES[aliasKey];
  }
  
  return null;
}
