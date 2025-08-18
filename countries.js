const countryData = [
    // Major World Powers
    {
        name: "United States",
        continent: "North America",
        population: "Large (300M+)",
        gdp: "Very High",
        language: "English",
        climate: "Varied",
        info: "Federal republic consisting of 50 states, world's largest economy and military superpower."
    },
    {
        name: "China",
        continent: "Asia",
        population: "Very Large (1B+)",
        gdp: "Very High",
        language: "Chinese",
        climate: "Varied",
        info: "Most populous country in the world, second-largest economy, and major global power."
    },
    {
        name: "Russia",
        continent: "Europe/Asia",
        population: "Large (100M+)",
        gdp: "High",
        language: "Russian",
        climate: "Cold/Temperate",
        info: "World's largest country by land area, spanning eleven time zones across two continents."
    },
    {
        name: "India",
        continent: "Asia",
        population: "Very Large (1B+)",
        gdp: "High",
        language: "Hindi/English",
        climate: "Tropical/Subtropical",
        info: "World's largest democracy and most populous country, known for its diverse culture and rapid economic growth."
    },
    {
        name: "Japan",
        continent: "Asia",
        population: "Large (100M+)",
        gdp: "Very High",
        language: "Japanese",
        climate: "Temperate",
        info: "Island nation known for advanced technology, unique culture, and being the world's third-largest economy."
    },

    // European Countries
    {
        name: "Germany",
        continent: "Europe",
        population: "Large (80M+)",
        gdp: "Very High",
        language: "German",
        climate: "Temperate",
        info: "Economic powerhouse of Europe, known for engineering, automotive industry, and central role in EU."
    },
    {
        name: "France",
        continent: "Europe",
        population: "Medium (60M+)",
        gdp: "Very High",
        language: "French",
        climate: "Temperate",
        info: "Known for culture, cuisine, fashion, and as a founding member of the European Union."
    },
    {
        name: "United Kingdom",
        continent: "Europe",
        population: "Medium (60M+)",
        gdp: "Very High",
        language: "English",
        climate: "Temperate/Oceanic",
        info: "Island nation comprising England, Scotland, Wales, and Northern Ireland. Former global empire."
    },
    {
        name: "Italy",
        continent: "Europe",
        population: "Medium (60M+)",
        gdp: "High",
        language: "Italian",
        climate: "Mediterranean",
        info: "Boot-shaped peninsula known for art, history, cuisine, and fashion. Home to Vatican City."
    },
    {
        name: "Spain",
        continent: "Europe",
        population: "Medium (40M+)",
        gdp: "High",
        language: "Spanish",
        climate: "Mediterranean",
        info: "Located on Iberian Peninsula, known for flamenco, bullfighting, and colonial history in Americas."
    },
    {
        name: "Netherlands",
        continent: "Europe",
        population: "Small (17M+)",
        gdp: "Very High",
        language: "Dutch",
        climate: "Temperate/Oceanic",
        info: "Low-lying country famous for tulips, windmills, canals, and progressive social policies."
    },
    {
        name: "Sweden",
        continent: "Europe",
        population: "Small (10M+)",
        gdp: "Very High",
        language: "Swedish",
        climate: "Cold/Temperate",
        info: "Scandinavian country known for social welfare system, IKEA, and environmental consciousness."
    },
    {
        name: "Norway",
        continent: "Europe",
        population: "Small (5M+)",
        gdp: "Very High",
        language: "Norwegian",
        climate: "Cold/Temperate",
        info: "Oil-rich Scandinavian country known for fjords, Northern Lights, and high standard of living."
    },
    {
        name: "Switzerland",
        continent: "Europe",
        population: "Small (8M+)",
        gdp: "Very High",
        language: "German/French/Italian",
        climate: "Alpine",
        info: "Landlocked Alpine country famous for banking, chocolate, watches, and political neutrality."
    },

    // Middle East & North Africa
    {
        name: "Saudi Arabia",
        continent: "Asia",
        population: "Medium (30M+)",
        gdp: "High",
        language: "Arabic",
        climate: "Desert",
        info: "Oil-rich kingdom home to Islam's holiest sites, Mecca and Medina."
    },
    {
        name: "Turkey",
        continent: "Europe/Asia",
        population: "Large (80M+)",
        gdp: "High",
        language: "Turkish",
        climate: "Mediterranean/Continental",
        info: "Transcontinental country bridging Europe and Asia, rich in history and culture."
    },
    {
        name: "Iran",
        continent: "Asia",
        population: "Large (80M+)",
        gdp: "Medium",
        language: "Persian",
        climate: "Desert/Mountain",
        info: "Ancient Persian civilization with significant oil reserves and regional influence."
    },
    {
        name: "Israel",
        continent: "Asia",
        population: "Small (9M+)",
        gdp: "High",
        language: "Hebrew/Arabic",
        climate: "Mediterranean/Desert",
        info: "Small Middle Eastern country, center of three major religions, known for technology sector."
    },
    {
        name: "Egypt",
        continent: "Africa",
        population: "Large (100M+)",
        gdp: "Medium",
        language: "Arabic",
        climate: "Desert",
        info: "Ancient civilization along the Nile River, famous for pyramids and Suez Canal."
    },

    // Africa
    {
        name: "Nigeria",
        continent: "Africa",
        population: "Very Large (200M+)",
        gdp: "Medium",
        language: "English",
        climate: "Tropical",
        info: "Most populous African country and largest economy on the continent, oil-rich nation."
    },
    {
        name: "South Africa",
        continent: "Africa",
        population: "Medium (50M+)",
        gdp: "Medium",
        language: "Multiple",
        climate: "Subtropical",
        info: "Southern African country known for its history of apartheid, diverse culture, and natural resources."
    },
    {
        name: "Ethiopia",
        continent: "Africa",
        population: "Large (100M+)",
        gdp: "Low",
        language: "Amharic",
        climate: "Highland/Desert",
        info: "Landlocked East African country, considered the birthplace of coffee and humanity."
    },
    {
        name: "Kenya",
        continent: "Africa",
        population: "Medium (50M+)",
        gdp: "Medium",
        language: "English/Swahili",
        climate: "Tropical/Savanna",
        info: "East African country famous for wildlife safaris and long-distance runners."
    },
    {
        name: "Morocco",
        continent: "Africa",
        population: "Medium (35M+)",
        gdp: "Medium",
        language: "Arabic/Berber",
        climate: "Mediterranean/Desert",
        info: "Northwest African kingdom known for vibrant markets, Atlas Mountains, and Sahara Desert."
    },

    // South America
    {
        name: "Brazil",
        continent: "South America",
        population: "Very Large (200M+)",
        gdp: "High",
        language: "Portuguese",
        climate: "Tropical/Subtropical",
        info: "Largest South American country, famous for Amazon rainforest, carnival, and football."
    },
    {
        name: "Argentina",
        continent: "South America",
        population: "Medium (45M+)",
        gdp: "Medium",
        language: "Spanish",
        climate: "Subtropical/Temperate",
        info: "Known for tango, beef, wine, and Patagonian landscapes. Second-largest South American country."
    },
    {
        name: "Chile",
        continent: "South America",
        population: "Small (18M+)",
        gdp: "High",
        language: "Spanish",
        climate: "Varied",
        info: "Long, narrow country stretching along South America's western coast, known for wine and copper."
    },
    {
        name: "Colombia",
        continent: "South America",
        population: "Medium (50M+)",
        gdp: "Medium",
        language: "Spanish",
        climate: "Tropical",
        info: "Only South American country with coastlines on both Pacific and Atlantic oceans."
    },
    {
        name: "Peru",
        continent: "South America",
        population: "Medium (30M+)",
        gdp: "Medium",
        language: "Spanish/Quechua",
        climate: "Varied",
        info: "Home to ancient Inca civilization and Machu Picchu, known for diverse geography and cuisine."
    },

    // Asia-Pacific
    {
        name: "Australia",
        continent: "Oceania",
        population: "Small (25M+)",
        gdp: "Very High",
        language: "English",
        climate: "Varied",
        info: "Island continent known for unique wildlife, Outback, and major cities like Sydney and Melbourne."
    },
    {
        name: "South Korea",
        continent: "Asia",
        population: "Medium (50M+)",
        gdp: "Very High",
        language: "Korean",
        climate: "Temperate",
        info: "Highly developed East Asian country known for technology, K-pop, and rapid economic growth."
    },
    {
        name: "Thailand",
        continent: "Asia",
        population: "Medium (70M+)",
        gdp: "Medium",
        language: "Thai",
        climate: "Tropical",
        info: "Southeast Asian kingdom famous for temples, beaches, cuisine, and tourism industry."
    },
    {
        name: "Vietnam",
        continent: "Asia",
        population: "Large (95M+)",
        gdp: "Medium",
        language: "Vietnamese",
        climate: "Tropical",
        info: "Southeast Asian country known for pho cuisine, motorbikes, and rapid economic development."
    },
    {
        name: "Indonesia",
        continent: "Asia",
        population: "Very Large (250M+)",
        gdp: "Medium",
        language: "Indonesian",
        climate: "Tropical",
        info: "World's largest archipelago with over 17,000 islands, most populous Muslim-majority country."
    },
    {
        name: "Philippines",
        continent: "Asia",
        population: "Large (100M+)",
        gdp: "Medium",
        language: "Filipino/English",
        climate: "Tropical",
        info: "Archipelago of over 7,000 islands in Southeast Asia, known for beaches and diverse culture."
    },
    {
        name: "Malaysia",
        continent: "Asia",
        population: "Medium (30M+)",
        gdp: "High",
        language: "Malay",
        climate: "Tropical",
        info: "Southeast Asian country known for twin towers, diverse culture, and palm oil production."
    },
    {
        name: "Singapore",
        continent: "Asia",
        population: "Small (5M+)",
        gdp: "Very High",
        language: "Multiple",
        climate: "Tropical",
        info: "City-state and major financial hub in Southeast Asia, known for efficiency and multiculturalism."
    },

    // North America
    {
        name: "Canada",
        continent: "North America",
        population: "Medium (40M+)",
        gdp: "Very High",
        language: "English/French",
        climate: "Cold/Temperate",
        info: "Second-largest country by land area, known for natural beauty, maple syrup, and politeness."
    },
    {
        name: "Mexico",
        continent: "North America",
        population: "Large (130M+)",
        gdp: "High",
        language: "Spanish",
        climate: "Varied",
        info: "Known for ancient Aztec and Maya civilizations, vibrant culture, and diverse cuisine."
    },

    // Additional Notable Countries
    {
        name: "Bangladesh",
        continent: "Asia",
        population: "Large (160M+)",
        gdp: "Low",
        language: "Bengali",
        climate: "Tropical",
        info: "Densely populated South Asian country, major textile producer and river delta nation."
    },
    {
        name: "Pakistan",
        continent: "Asia",
        population: "Very Large (200M+)",
        gdp: "Medium",
        language: "Urdu/English",
        climate: "Varied",
        info: "Nuclear-armed Islamic republic created during partition of India, known for diverse landscapes."
    },
    {
        name: "Ukraine",
        continent: "Europe",
        population: "Medium (40M+)",
        gdp: "Medium",
        language: "Ukrainian",
        climate: "Temperate",
        info: "Largest country entirely in Europe, known as 'breadbasket of Europe' for grain production."
    },
    {
        name: "Poland",
        continent: "Europe",
        population: "Medium (38M+)",
        gdp: "High",
        language: "Polish",
        climate: "Temperate",
        info: "Central European country with rich history, birthplace of Solidarity movement and Pope John Paul II."
    },
    {
        name: "New Zealand",
        continent: "Oceania",
        population: "Small (5M+)",
        gdp: "High",
        language: "English/Māori",
        climate: "Temperate/Oceanic",
        info: "Island nation known for stunning landscapes, sheep farming, and filming location for Lord of the Rings."
    },
    {
        name: "Cuba",
        continent: "North America",
        population: "Small (11M+)",
        gdp: "Low",
        language: "Spanish",
        climate: "Tropical",
        info: "Caribbean island nation known for cigars, vintage cars, and socialist government."
    },
    {
        name: "Greece",
        continent: "Europe",
        population: "Small (10M+)",
        gdp: "Medium",
        language: "Greek",
        climate: "Mediterranean",
        info: "Cradle of Western civilization and democracy, known for ancient history and Mediterranean islands."
    },
    {
        name: "Portugal",
        continent: "Europe",
        population: "Small (10M+)",
        gdp: "High",
        language: "Portuguese",
        climate: "Mediterranean",
        info: "Western European country known for exploration history, port wine, and beautiful coastline."
    },
    {
        name: "Belgium",
        continent: "Europe",
        population: "Small (11M+)",
        gdp: "Very High",
        language: "Dutch/French/German",
        climate: "Temperate/Oceanic",
        info: "Small European country famous for chocolate, waffles, beer, and EU headquarters in Brussels."
    },
    {
        name: "Czech Republic",
        continent: "Europe",
        population: "Small (10M+)",
        gdp: "High",
        language: "Czech",
        climate: "Temperate",
        info: "Central European country known for Prague's architecture, beer culture, and crystal glass."
    }
];
