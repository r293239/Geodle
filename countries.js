const countryData = [
    // Major World Powers
    {
        name: "India",
        continent: "Asia",
        population: "Very Large (1.46B)",
        gdp: "High",
        language: "Hindi/English",
        climate: "Tropical/Subtropical",
        info: "World's most populous country and largest democracy, known for diverse culture and rapid economic growth."
    },
    {
        name: "China",
        continent: "Asia",
        population: "Very Large (1.42B)",
        gdp: "Very High",
        language: "Chinese (Mandarin)",
        climate: "Varied",
        info: "Second most populous country, world's second-largest economy, and major global power."
    },
    {
        name: "United States",
        continent: "North America",
        population: "Large (347M)",
        gdp: "Very High",
        language: "English",
        climate: "Varied",
        info: "Federal republic of 50 states, world's largest economy and military superpower."
    },
    {
        name: "Indonesia",
        continent: "Asia",
        population: "Large (286M)",
        gdp: "Medium",
        language: "Indonesian",
        climate: "Tropical",
        info: "World's largest archipelago with over 17,000 islands, most populous Muslim-majority country."
    },
    {
        name: "Pakistan",
        continent: "Asia",
        population: "Large (255M)",
        gdp: "Medium",
        language: "Urdu/English",
        climate: "Varied",
        info: "Nuclear-armed Islamic republic, created during partition of India in 1947."
    },
    {
        name: "Nigeria",
        continent: "Africa",
        population: "Large (238M)",
        gdp: "Medium",
        language: "English",
        climate: "Tropical",
        info: "Most populous African country and largest economy on the continent, oil-rich nation."
    },
    {
        name: "Brazil",
        continent: "South America",
        population: "Large (213M)",
        gdp: "High",
        language: "Portuguese",
        climate: "Tropical/Subtropical",
        info: "Largest South American country, famous for Amazon rainforest, carnival, and football."
    },
    {
        name: "Bangladesh",
        continent: "Asia",
        population: "Large (176M)",
        gdp: "Low",
        language: "Bengali",
        climate: "Tropical",
        info: "Densely populated South Asian country, major textile producer in river delta region."
    },
    {
        name: "Russia",
        continent: "Europe/Asia",
        population: "Large (144M)",
        gdp: "High",
        language: "Russian",
        climate: "Cold/Temperate",
        info: "World's largest country by land area, spanning eleven time zones across two continents."
    },
    {
        name: "Ethiopia",
        continent: "Africa",
        population: "Large (135M)",
        gdp: "Low",
        language: "Amharic",
        climate: "Highland/Desert",
        info: "Landlocked East African country, never fully colonized, birthplace of coffee."
    },
    {
        name: "Mexico",
        continent: "North America",
        population: "Large (132M)",
        gdp: "High",
        language: "Spanish",
        climate: "Varied",
        info: "Known for ancient Aztec and Maya civilizations, vibrant culture, and diverse cuisine."
    },
    {
        name: "Japan",
        continent: "Asia",
        population: "Large (123M)",
        gdp: "Very High",
        language: "Japanese",
        climate: "Temperate",
        info: "Island nation known for advanced technology, unique culture, and world's third-largest economy."
    },
    {
        name: "Egypt",
        continent: "Africa",
        population: "Large (118M)",
        gdp: "Medium",
        language: "Arabic",
        climate: "Desert",
        info: "Ancient civilization along the Nile River, famous for pyramids and Suez Canal."
    },
    {
        name: "Philippines",
        continent: "Asia",
        population: "Large (117M)",
        gdp: "Medium",
        language: "Filipino/English",
        climate: "Tropical",
        info: "Archipelago of over 7,000 islands in Southeast Asia, known for beaches and diverse culture."
    },
    {
        name: "Vietnam",
        continent: "Asia",
        population: "Large (102M)",
        gdp: "Medium",
        language: "Vietnamese",
        climate: "Tropical",
        info: "Southeast Asian country known for pho cuisine, motorbikes, and rapid economic development."
    },

    // Major European Countries
    {
        name: "Germany",
        continent: "Europe",
        population: "Large (84M)",
        gdp: "Very High",
        language: "German",
        climate: "Temperate",
        info: "Economic powerhouse of Europe, known for engineering, automotive industry, and central role in EU."
    },
    {
        name: "Turkey",
        continent: "Europe/Asia",
        population: "Large (88M)",
        gdp: "High",
        language: "Turkish",
        climate: "Mediterranean/Continental",
        info: "Transcontinental country bridging Europe and Asia, rich in history and culture."
    },
    {
        name: "Iran",
        continent: "Asia",
        population: "Large (92M)",
        gdp: "Medium",
        language: "Persian (Farsi)",
        climate: "Desert/Mountain",
        info: "Ancient Persian civilization with significant oil reserves and regional influence."
    },
    {
        name: "Thailand",
        continent: "Asia",
        population: "Medium (72M)",
        gdp: "Medium",
        language: "Thai",
        climate: "Tropical",
        info: "Southeast Asian kingdom famous for temples, beaches, cuisine, and tourism industry."
    },
    {
        name: "United Kingdom",
        continent: "Europe",
        population: "Medium (70M)",
        gdp: "Very High",
        language: "English",
        climate: "Temperate/Oceanic",
        info: "Island nation comprising England, Scotland, Wales, and Northern Ireland. Former global empire."
    },
    {
        name: "France",
        continent: "Europe",
        population: "Medium (67M)",
        gdp: "Very High",
        language: "French",
        climate: "Temperate",
        info: "Known for culture, cuisine, fashion, and as a founding member of the European Union."
    },
    {
        name: "South Africa",
        continent: "Africa",
        population: "Medium (65M)",
        gdp: "Medium",
        language: "Multiple (11 official)",
        climate: "Subtropical",
        info: "Southern African country known for ending apartheid, diverse culture, and natural resources."
    },
    {
        name: "Italy",
        continent: "Europe",
        population: "Medium (59M)",
        gdp: "High",
        language: "Italian",
        climate: "Mediterranean",
        info: "Boot-shaped peninsula known for art, history, cuisine, and fashion. Home to Vatican City."
    },
    {
        name: "Kenya",
        continent: "Africa",
        population: "Medium (58M)",
        gdp: "Medium",
        language: "English/Swahili",
        climate: "Tropical/Savanna",
        info: "East African country famous for wildlife safaris and long-distance runners."
    },
    {
        name: "Colombia",
        continent: "South America",
        population: "Medium (53M)",
        gdp: "Medium",
        language: "Spanish",
        climate: "Tropical",
        info: "Only South American country with coastlines on both Pacific and Atlantic oceans."
    },
    {
        name: "South Korea",
        continent: "Asia",
        population: "Medium (52M)",
        gdp: "Very High",
        language: "Korean",
        climate: "Temperate",
        info: "Highly developed East Asian country known for technology, K-pop, and rapid economic growth."
    },
    {
        name: "Spain",
        continent: "Europe",
        population: "Medium (48M)",
        gdp: "High",
        language: "Spanish",
        climate: "Mediterranean",
        info: "Located on Iberian Peninsula, known for flamenco, rich history, and colonial heritage in Americas."
    },
    {
        name: "Argentina",
        continent: "South America",
        population: "Medium (46M)",
        gdp: "Medium",
        language: "Spanish",
        climate: "Subtropical/Temperate",
        info: "Known for tango, beef, wine, and Patagonian landscapes. Second-largest South American country."
    },
    {
        name: "Canada",
        continent: "North America",
        population: "Medium (40M)",
        gdp: "Very High",
        language: "English/French",
        climate: "Cold/Temperate",
        info: "Second-largest country by land area, known for natural beauty, maple syrup, and politeness."
    },
    {
        name: "Ukraine",
        continent: "Europe",
        population: "Medium (39M)",
        gdp: "Medium",
        language: "Ukrainian",
        climate: "Temperate",
        info: "Largest country entirely in Europe, known as 'breadbasket of Europe' for grain production."
    },
    {
        name: "Morocco",
        continent: "Africa",
        population: "Medium (38M)",
        gdp: "Medium",
        language: "Arabic/Berber",
        climate: "Mediterranean/Desert",
        info: "Northwest African kingdom known for vibrant markets, Atlas Mountains, and Sahara Desert."
    },
    {
        name: "Poland",
        continent: "Europe",
        population: "Medium (38M)",
        gdp: "High",
        language: "Polish",
        climate: "Temperate",
        info: "Central European country with rich history, birthplace of Solidarity movement."
    },
    {
        name: "Malaysia",
        continent: "Asia",
        population: "Medium (36M)",
        gdp: "High",
        language: "Malay",
        climate: "Tropical",
        info: "Southeast Asian country known for twin towers, diverse culture, and palm oil production."
    },
    {
        name: "Saudi Arabia",
        continent: "Asia",
        population: "Medium (35M)",
        gdp: "High",
        language: "Arabic",
        climate: "Desert",
        info: "Oil-rich kingdom home to Islam's holiest sites, Mecca and Medina."
    },
    {
        name: "Peru",
        continent: "South America",
        population: "Medium (35M)",
        gdp: "Medium",
        language: "Spanish/Quechua",
        climate: "Varied",
        info: "Home to ancient Inca civilization and Machu Picchu, known for diverse geography and cuisine."
    },

    // Medium-sized Countries
    {
        name: "Australia",
        continent: "Oceania",
        population: "Medium (27M)",
        gdp: "Very High",
        language: "English",
        climate: "Varied",
        info: "Island continent known for unique wildlife, Outback, and major cities like Sydney and Melbourne."
    },
    {
        name: "Venezuela",
        continent: "South America",
        population: "Medium (29M)",
        gdp: "Low",
        language: "Spanish",
        climate: "Tropical",
        info: "Oil-rich South American country facing economic challenges, known for Angel Falls."
    },
    {
        name: "Nepal",
        continent: "Asia",
        population: "Medium (30M)",
        gdp: "Low",
        language: "Nepali",
        climate: "Mountain/Subtropical",
        info: "Landlocked Himalayan country, home to Mount Everest and birthplace of Buddha."
    },
    {
        name: "Yemen",
        continent: "Asia",
        population: "Medium (42M)",
        gdp: "Low",
        language: "Arabic",
        climate: "Desert",
        info: "Located at southern tip of Arabian Peninsula, ancient center of trade and coffee cultivation."
    },
    {
        name: "Afghanistan",
        continent: "Asia",
        population: "Medium (44M)",
        gdp: "Low",
        language: "Pashto/Dari",
        climate: "Mountain/Desert",
        info: "Landlocked Central Asian country known as 'graveyard of empires' due to historical conflicts."
    },
    {
        name: "Algeria",
        continent: "Africa",
        population: "Medium (47M)",
        gdp: "Medium",
        language: "Arabic/Berber",
        climate: "Desert/Mediterranean",
        info: "Largest African country by land area, oil and gas producer in North Africa."
    },
    {
        name: "Sudan",
        continent: "Africa",
        population: "Medium (52M)",
        gdp: "Low",
        language: "Arabic/English",
        climate: "Desert/Tropical",
        info: "Northeast African country at confluence of Blue and White Nile rivers."
    },
    {
        name: "Uganda",
        continent: "Africa",
        population: "Medium (51M)",
        gdp: "Low",
        language: "English/Swahili",
        climate: "Tropical",
        info: "East African landlocked country known as 'Pearl of Africa' for its natural beauty."
    },
    {
        name: "Iraq",
        continent: "Asia",
        population: "Medium (47M)",
        gdp: "Medium",
        language: "Arabic/Kurdish",
        climate: "Desert",
        info: "Mesopotamian country, cradle of civilization, rich in oil reserves."
    },

    // European Countries
    {
        name: "Netherlands",
        continent: "Europe",
        population: "Small (18M)",
        gdp: "Very High",
        language: "Dutch",
        climate: "Temperate/Oceanic",
        info: "Low-lying country famous for tulips, windmills, canals, and progressive social policies."
    },
    {
        name: "Romania",
        continent: "Europe",
        population: "Small (19M)",
        gdp: "High",
        language: "Romanian",
        climate: "Temperate",
        info: "Eastern European country known for Dracula legend, Carpathian Mountains, and medieval castles."
    },
    {
        name: "Belgium",
        continent: "Europe",
        population: "Small (12M)",
        gdp: "Very High",
        language: "Dutch/French/German",
        climate: "Temperate/Oceanic",
        info: "Small European country famous for chocolate, waffles, beer, and EU headquarters in Brussels."
    },
    {
        name: "Greece",
        continent: "Europe",
        population: "Small (10M)",
        gdp: "High",
        language: "Greek",
        climate: "Mediterranean",
        info: "Cradle of Western civilization and democracy, known for ancient history and Mediterranean islands."
    },
    {
        name: "Czech Republic",
        continent: "Europe",
        population: "Small (11M)",
        gdp: "High",
        language: "Czech",
        climate: "Temperate",
        info: "Central European country known for Prague's architecture, beer culture, and crystal glass."
    },
    {
        name: "Portugal",
        continent: "Europe",
        population: "Small (10M)",
        gdp: "High",
        language: "Portuguese",
        climate: "Mediterranean",
        info: "Western European country known for Age of Exploration, port wine, and beautiful coastline."
    },
    {
        name: "Sweden",
        continent: "Europe",
        population: "Small (11M)",
        gdp: "Very High",
        language: "Swedish",
        climate: "Cold/Temperate",
        info: "Scandinavian country known for social welfare system, IKEA, and environmental consciousness."
    },
    {
        name: "Hungary",
        continent: "Europe",
        population: "Small (10M)",
        gdp: "High",
        language: "Hungarian",
        climate: "Temperate",
        info: "Central European country known for thermal baths, paprika, and unique Finno-Ugric language."
    },
    {
        name: "Austria",
        continent: "Europe",
        population: "Small (9M)",
        gdp: "Very High",
        language: "German",
        climate: "Alpine/Temperate",
        info: "Alpine country famous for classical music, Sound of Music, and ski resorts."
    },
    {
        name: "Switzerland",
        continent: "Europe",
        population: "Small (9M)",
        gdp: "Very High",
        language: "German/French/Italian/Romansh",
        climate: "Alpine",
        info: "Landlocked Alpine country famous for banking, chocolate, watches, and political neutrality."
    },
    {
        name: "Belarus",
        continent: "Europe",
        population: "Small (9M)",
        gdp: "Medium",
        language: "Belarusian/Russian",
        climate: "Temperate",
        info: "Landlocked Eastern European country known for vast forests and lakes."
    },
    {
        name: "Serbia",
        continent: "Europe",
        population: "Small (7M)",
        gdp: "Medium",
        language: "Serbian",
        climate: "Temperate",
        info: "Landlocked Balkan country known for rich history and cultural heritage."
    },
    {
        name: "Bulgaria",
        continent: "Europe",
        population: "Small (7M)",
        gdp: "Medium",
        language: "Bulgarian",
        climate: "Temperate",
        info: "Southeastern European country known for rose oil, yogurt, and Black Sea coastline."
    },
    {
        name: "Denmark",
        continent: "Europe",
        population: "Small (6M)",
        gdp: "Very High",
        language: "Danish",
        climate: "Temperate/Oceanic",
        info: "Scandinavian kingdom known for Vikings, Lego, hygge lifestyle, and progressive society."
    },
    {
        name: "Finland",
        continent: "Europe",
        population: "Small (6M)",
        gdp: "Very High",
        language: "Finnish/Swedish",
        climate: "Cold/Temperate",
        info: "Nordic country known for saunas, Nokia, education system, and Northern Lights."
    },
    {
        name: "Slovakia",
        continent: "Europe",
        population: "Small (5M)",
        gdp: "High",
        language: "Slovak",
        climate: "Temperate",
        info: "Central European country known for medieval castles and High Tatras mountains."
    },
    {
        name: "Norway",
        continent: "Europe",
        population: "Small (6M)",
        gdp: "Very High",
        language: "Norwegian",
        climate: "Cold/Temperate",
        info: "Oil-rich Scandinavian country known for fjords, Northern Lights, and high standard of living."
    },
    {
        name: "Ireland",
        continent: "Europe",
        population: "Small (5M)",
        gdp: "Very High",
        language: "English/Irish Gaelic",
        climate: "Temperate/Oceanic",
        info: "Island nation known for green landscapes, Celtic culture, and tech industry hub."
    },
    {
        name: "Croatia",
        continent: "Europe",
        population: "Small (4M)",
        gdp: "High",
        language: "Croatian",
        climate: "Mediterranean/Continental",
        info: "Balkan country known for Adriatic coastline, medieval cities, and Game of Thrones filming locations."
    },
    {
        name: "Bosnia and Herzegovina",
        continent: "Europe",
        population: "Small (3M)",
        gdp: "Medium",
        language: "Bosnian/Croatian/Serbian",
        climate: "Continental/Mediterranean",
        info: "Balkan country known for Ottoman architecture, coffee culture, and complex ethnic composition."
    },
    {
        name: "Moldova",
        continent: "Europe",
        population: "Small (3M)",
        gdp: "Low",
        language: "Romanian/Moldovan",
        climate: "Temperate",
        info: "Landlocked Eastern European country, known for wine production and agricultural traditions."
    },
    {
        name: "Lithuania",
        continent: "Europe",
        population: "Small (3M)",
        gdp: "High",
        language: "Lithuanian",
        climate: "Temperate",
        info: "Baltic state known for medieval architecture and first Soviet republic to declare independence."
    },
    {
        name: "Slovenia",
        continent: "Europe",
        population: "Small (2M)",
        gdp: "High",
        language: "Slovenian",
        climate: "Alpine/Mediterranean",
        info: "Small Alpine country known for Lake Bled, caves, and green tourism."
    },
    {
        name: "Latvia",
        continent: "Europe",
        population: "Small (2M)",
        gdp: "High",
        language: "Latvian",
        climate: "Temperate",
        info: "Baltic state known for Art Nouveau architecture in Riga and folk song traditions."
    },
    {
        name: "Estonia",
        continent: "Europe",
        population: "Small (1M)",
        gdp: "High",
        language: "Estonian",
        climate: "Temperate",
        info: "Baltic state known for digital innovation, e-governance, and medieval old towns."
    },
    {
        name: "North Macedonia",
        continent: "Europe",
        population: "Small (2M)",
        gdp: "Medium",
        language: "Macedonian",
        climate: "Continental/Mediterranean",
        info: "Balkan country known for ancient history, Lake Ohrid, and traditional crafts."
    },
    {
        name: "Albania",
        continent: "Europe",
        population: "Small (3M)",
        gdp: "Medium",
        language: "Albanian",
        climate: "Mediterranean",
        info: "Balkan country known for Albanian Alps, riviera coastline, and unique language."
    },
    {
        name: "Montenegro",
        continent: "Europe",
        population: "Small (632K)",
        gdp: "Medium",
        language: "Montenegrin",
        climate: "Mediterranean/Continental",
        info: "Small Balkan country known for dramatic mountains, medieval villages, and Adriatic coast."
    },

    // Middle East & North Africa
    {
        name: "Israel",
        continent: "Asia",
        population: "Small (10M)",
        gdp: "Very High",
        language: "Hebrew/Arabic",
        climate: "Mediterranean/Desert",
        info: "Small Middle Eastern country, center of three major religions, known for technology sector."
    },
    {
        name: "Jordan",
        continent: "Asia",
        population: "Small (12M)",
        gdp: "Medium",
        language: "Arabic",
        climate: "Desert",
        info: "Kingdom known for Petra, Dead Sea, and role as regional stability anchor."
    },
    {
        name: "Lebanon",
        continent: "Asia",
        population: "Small (6M)",
        gdp: "Medium",
        language: "Arabic/French",
        climate: "Mediterranean",
        info: "Small Levantine country known for cedar trees, ancient Phoenician heritage, and banking."
    },
    {
        name: "Kuwait",
        continent: "Asia",
        population: "Small (5M)",
        gdp: "Very High",
        language: "Arabic",
        climate: "Desert",
        info: "Small oil-rich Gulf state known for high per capita income and modern architecture."
    },
    {
        name: "United Arab Emirates",
        continent: "Asia",
        population: "Small (11M)",
        gdp: "Very High",
        language: "Arabic",
        climate: "Desert",
        info: "Federation of seven emirates, known for Dubai's skyscrapers and luxury tourism."
    },
    {
        name: "Qatar",
        continent: "Asia",
        population: "Small (3M)",
        gdp: "Very High",
        language: "Arabic",
        climate: "Desert",
        info: "Small peninsula nation, world's richest country per capita, hosted 2022 FIFA World Cup."
    },
    {
        name: "Bahrain",
        continent: "Asia",
        population: "Small (2M)",
        gdp: "High",
        language: "Arabic",
        climate: "Desert",
        info: "Island kingdom in Persian Gulf, financial hub known for Formula 1 Grand Prix."
    },
    {
        name: "Oman",
        continent: "Asia",
        population: "Small (5M)",
        gdp: "High",
        language: "Arabic",
        climate: "Desert",
        info: "Sultanate on Arabian Peninsula known for frankincense, mountains, and peaceful diplomacy."
    },
    {
        name: "Libya",
        continent: "Africa",
        population: "Small (7M)",
        gdp: "Medium",
        language: "Arabic",
        climate: "Desert",
        info: "North African country with largest oil reserves in Africa, mostly Sahara Desert."
    },
    {
        name: "Tunisia",
        continent: "Africa",
        population: "Small (12M)",
        gdp: "Medium",
        language: "Arabic",
        climate: "Mediterranean/Desert",
        info: "North African country, birthplace of Arab Spring, known for ancient Carthage."
    },

    // Central and South Asia
    {
        name: "Kazakhstan",
        continent: "Asia",
        population: "Small (21M)",
        gdp: "High",
        language: "Kazakh/Russian",
        climate: "Continental",
        info: "World's largest landlocked country, rich in oil and minerals, former Soviet republic."
    },
    {
        name: "Uzbekistan",
        continent: "Asia",
        population: "Medium (37M)",
        gdp: "Medium",
        language: "Uzbek",
        climate: "Continental/Desert",
        info: "Central Asian country on ancient Silk Road, known for Samarkand and Bukhara."
    },
    {
        name: "Turkmenistan",
        continent: "Asia",
        population: "Small (8M)",
        gdp: "Medium",
        language: "Turkmen",
        climate: "Desert",
        info: "Central Asian country rich in natural gas, known for 'Door to Hell' crater."
    },
    {
        name: "Kyrgyzstan",
        continent: "Asia",
        population: "Small (7M)",
        gdp: "Low",
        language: "Kyrgyz/Russian",
        climate: "Continental/Mountain",
        info: "Mountainous Central Asian country known for nomadic traditions and alpine lakes."
    },
    {
        name: "Tajikistan",
        continent: "Asia",
        population: "Small (11M)",
        gdp: "Low",
        language: "Tajik",
        climate: "Continental/Mountain",
        info: "Mountainous Central Asian country, over 90% mountainous terrain."
    },
    {
        name: "Sri Lanka",
        continent: "Asia",
        population: "Small (23M)",
        gdp: "Medium",
        language: "Sinhala/Tamil",
        climate: "Tropical",
        info: "Island nation known for tea, spices, ancient Buddhist sites, and beautiful beaches."
    },

    // East and Southeast Asia
    {
        name: "Myanmar (Burma)",
        continent: "Asia",
        population: "Medium (55M)",
        gdp: "Low",
        language: "Burmese",
        climate: "Tropical",
        info: "Southeast Asian country known for golden pagodas, diverse ethnic groups, and political instability."
    },
    {
        name: "Cambodia",
        continent: "Asia",
        population: "Small (18M)",
        gdp: "Low",
        language: "Khmer",
        climate: "Tropical",
        info: "Southeast Asian kingdom famous for Angkor Wat temple complex and Khmer heritage."
    },
    {
        name: "Laos",
        continent: "Asia",
        population: "Small (8M)",
        gdp: "Low",
        language: "Lao",
        climate: "Tropical",
        info: "Landlocked Southeast Asian country known for Buddhist temples and French colonial influence."
    },
    {
        name: "Singapore",
        continent: "Asia",
        population: "Small (6M)",
        gdp: "Very High",
        language: "English/Mandarin/Malay/Tamil",
        climate: "Tropical",
        info: "City-state and major financial hub in Southeast Asia, known for efficiency and multiculturalism."
    },
    {
        name: "Brunei",
        continent: "Asia",
        population: "Small (466K)",
        gdp: "Very High",
        language: "Malay",
        climate: "Tropical",
        info: "Small oil-rich sultanate on Borneo island, known for wealth and Islamic architecture."
    },
    {
        name: "Mongolia",
        continent: "Asia",
        population: "Small (4M)",
        gdp: "Medium",
        language: "Mongolian",
        climate: "Continental",
        info: "Landlocked country known for nomadic culture, Genghis Khan, and vast steppes."
    },
    {
        name: "North Korea",
        continent: "Asia",
        population: "Medium (27M)",
        gdp: "Low",
        language: "Korean",
        climate: "Temperate",
        info: "Isolated communist state known for nuclear program and authoritarian government."
    },
    {
        name: "Taiwan",
        continent: "Asia",
        population: "Small (23M)",
        gdp: "Very High",
        language: "Mandarin Chinese",
        climate: "Subtropical",
        info: "Island democracy known for technology manufacturing, night markets, and disputed sovereignty."
    },

    // Africa
    {
        name: "Democratic Republic of Congo",
        continent: "Africa",
        population: "Large (113M)",
        gdp: "Low",
        language: "French",
        climate: "Tropical",
        info: "Central African country rich in minerals, home to Congo River and rainforests."
    },
    {
        name: "Tanzania",
        continent: "Africa",
        population: "Medium (71M)",
        gdp: "Low",
        language: "Swahili/English",
        climate: "Tropical",
        info: "East African country home to Serengeti, Kilimanjaro, and Zanzibar."
    },
    {
        name: "Ghana",
        continent: "Africa",
        population: "Medium (35M)",
        gdp: "Medium",
        language: "English",
        climate: "Tropical",
        info: "West African country known for cocoa production, gold, and stable democracy."
    },
    {
        name: "Mozambique",
        continent: "Africa",
        population: "Medium (36M)",
        gdp: "Low",
        language: "Portuguese",
        climate: "Tropical",
        info: "Southeastern African country with long Indian Ocean coastline, known for seafood and beaches."
    },
    {
        name: "Madagascar",
        continent: "Africa",
        population: "Medium (33M)",
        gdp: "Low",
        language: "Malagasy/French",
        climate: "Tropical",
        info: "Large island nation known for unique wildlife, baobab trees, and vanilla production."
    },
    {
        name: "Cameroon",
        continent: "Africa",
        population: "Medium (30M)",
        gdp: "Medium",
        language: "French/English",
        climate: "Tropical",
        info: "Central African country known as 'Africa in miniature' for its geographic diversity."
    },
    {
        name: "Côte d'Ivoire",
        continent: "Africa",
        population: "Medium (33M)",
        gdp: "Medium",
        language: "French",
        climate: "Tropical",
        info: "West African country, world's largest cocoa producer, known for Abidjan's skyline."
    },
    {
        name: "Niger",
        continent: "Africa",
        population: "Medium (28M)",
        gdp: "Low",
        language: "French",
        climate: "Desert/Sahel",
        info: "Landlocked Sahel country, uranium producer, named after Niger River."
    },
    {
        name: "Burkina Faso",
        continent: "Africa",
        population: "Small (24M)",
        gdp: "Low",
        language: "French",
        climate: "Sahel",
        info: "Landlocked West African country known for cotton production and traditional crafts."
    },
    {
        name: "Mali",
        continent: "Africa",
        population: "Small (25M)",
        gdp: "Low",
        language: "French",
        climate: "Desert/Sahel",
        info: "West African country, former site of great empires, known for Timbuktu and salt mines."
    },
    {
        name: "Malawi",
        continent: "Africa",
        population: "Small (22M)",
        gdp: "Low",
        language: "English/Chichewa",
        climate: "Subtropical",
        info: "Landlocked country known as 'The Warm Heart of Africa' for friendly people and Lake Malawi."
    },
    {
        name: "Zambia",
        continent: "Africa",
        population: "Small (22M)",
        gdp: "Medium",
        language: "English",
        climate: "Tropical/Subtropical",
        info: "Landlocked country rich in copper, home to Victoria Falls and diverse wildlife."
    },
    {
        name: "Senegal",
        continent: "Africa",
        population: "Small (19M)",
        gdp: "Medium",
        language: "French",
        climate: "Tropical/Sahel",
        info: "West African country known for teranga (hospitality), peanuts, and stable democracy."
    },
    {
        name: "Chad",
        continent: "Africa",
        population: "Small (21M)",
        gdp: "Low",
        language: "French/Arabic",
        climate: "Desert/Sahel",
        info: "Landlocked Central African country, oil producer, named after Lake Chad."
    },
    {
        name: "Somalia",
        continent: "Africa",
        population: "Small (20M)",
        gdp: "Low",
        language: "Somali/Arabic",
        climate: "Desert/Semi-arid",
        info: "Horn of Africa country known for longest coastline in mainland Africa and nomadic culture."
    },
    {
        name: "Zimbabwe",
        continent: "Africa",
        population: "Small (17M)",
        gdp: "Low",
        language: "English/Shona/Ndebele",
        climate: "Subtropical",
        info: "Landlocked country known for Victoria Falls, Great Zimbabwe ruins, and economic challenges."
    },
    {
        name: "Guinea",
        continent: "Africa",
        population: "Small (15M)",
        gdp: "Low",
        language: "French",
        climate: "Tropical",
        info: "West African country rich in bauxite, known for traditional music and dance."
    },
    {
        name: "Rwanda",
        continent: "Africa",
        population: "Small (15M)",
        gdp: "Low",
        language: "Kinyarwanda/French/English",
        climate: "Temperate/Highland",
        info: "Small landlocked country known as 'Land of a Thousand Hills' and remarkable post-genocide recovery."
    },
    {
        name: "Benin",
        continent: "Africa",
        population: "Small (15M)",
        gdp: "Low",
        language: "French",
        climate: "Tropical",
        info: "West African country, birthplace of Vodun (Voodoo) religion, known for bronze artworks."
    },
    {
        name: "Burundi",
        continent: "Africa",
        population: "Small (14M)",
        gdp: "Low",
        language: "Kirundi/French",
        climate: "Highland Tropical",
        info: "Small landlocked country in Great Lakes region, known for coffee production and drumming."
    },
    {
        name: "South Sudan",
        continent: "Africa",
        population: "Small (12M)",
        gdp: "Low",
        language: "English",
        climate: "Tropical",
        info: "World's newest country (2011), oil-rich but facing ongoing conflicts."
    },
    {
        name: "Togo",
        continent: "Africa",
        population: "Small (10M)",
        gdp: "Low",
        language: "French",
        climate: "Tropical",
        info: "Small West African country known for phosphate mining and voodoo traditions."
    },
    {
        name: "Sierra Leone",
        continent: "Africa",
        population: "Small (9M)",
        gdp: "Low",
        language: "English",
        climate: "Tropical",
        info: "West African country known for diamonds, beautiful beaches, and resilient people."
    },
    {
        name: "Liberia",
        continent: "Africa",
        population: "Small (6M)",
        gdp: "Low",
        language: "English",
        climate: "Tropical",
        info: "Founded by freed American slaves, known for rubber production and unique history."
    },
    {
        name: "Central African Republic",
        continent: "Africa",
        population: "Small (6M)",
        gdp: "Low",
        language: "French/Sango",
        climate: "Tropical",
        info: "Landlocked country rich in diamonds and gold but facing political instability."
    },
    {
        name: "Mauritania",
        continent: "Africa",
        population: "Small (5M)",
        gdp: "Medium",
        language: "Arabic",
        climate: "Desert",
        info: "Northwest African country, largely Sahara Desert, known for iron ore and fishing."
    },
    {
        name: "Congo (Republic)",
        continent: "Africa",
        population: "Small (6M)",
        gdp: "Medium",
        language: "French",
        climate: "Tropical",
        info: "Central African oil producer, not to be confused with Democratic Republic of Congo."
    },
    {
        name: "Eritrea",
        continent: "Africa",
        population: "Small (4M)",
        gdp: "Low",
        language: "Tigrinya/Arabic",
        climate: "Desert/Highland",
        info: "Red Sea nation known for Italian colonial architecture and cycling culture."
    },
    {
        name: "Gambia",
        continent: "Africa",
        population: "Small (3M)",
        gdp: "Low",
        language: "English",
        climate: "Tropical",
        info: "Smallest mainland African country, entirely surrounded by Senegal except coastline."
    },
    {
        name: "Botswana",
        continent: "Africa",
        population: "Small (3M)",
        gdp: "Medium",
        language: "English/Setswana",
        climate: "Semi-arid",
        info: "Landlocked country known for diamonds, Okavango Delta, and stable democracy."
    },
    {
        name: "Gabon",
        continent: "Africa",
        population: "Small (3M)",
        gdp: "Medium",
        language: "French",
        climate: "Tropical",
        info: "Central African oil producer known for rainforests and wildlife conservation."
    },
    {
        name: "Lesotho",
        continent: "Africa",
        population: "Small (2M)",
        gdp: "Low",
        language: "English/Sesotho",
        climate: "Highland",
        info: "Mountain kingdom completely surrounded by South Africa, known for blankets and wool."
    },
    {
        name: "Guinea-Bissau",
        continent: "Africa",
        population: "Small (2M)",
        gdp: "Low",
        language: "Portuguese",
        climate: "Tropical",
        info: "Small West African country known for cashew nuts and political instability."
    },
    {
        name: "Equatorial Guinea",
        continent: "Africa",
        population: "Small (2M)",
        gdp: "High",
        language: "Spanish/French",
        climate: "Tropical",
        info: "Small oil-rich country, only Spanish-speaking nation in Africa."
    },
    {
        name: "Mauritius",
        continent: "Africa",
        population: "Small (1M)",
        gdp: "High",
        language: "English/French/Creole",
        climate: "Tropical",
        info: "Island nation known for luxury tourism, sugar, and multicultural society."
    },
    {
        name: "Eswatini (Swaziland)",
        continent: "Africa",
        population: "Small (1M)",
        gdp: "Medium",
        language: "English/Swazi",
        climate: "Subtropical",
        info: "Small landlocked kingdom known for traditional culture and wildlife reserves."
    },
    {
        name: "Djibouti",
        continent: "Africa",
        population: "Small (1M)",
        gdp: "Medium",
        language: "French/Arabic",
        climate: "Desert",
        info: "Strategic port country at entrance to Red Sea, important military base location."
    },
    {
        name: "Comoros",
        continent: "Africa",
        population: "Small (883K)",
        gdp: "Low",
        language: "Comorian/French/Arabic",
        climate: "Tropical",
        info: "Island nation known for ylang-ylang perfume production and volcanic landscapes."
    },
    {
        name: "Cabo Verde",
        continent: "Africa",
        population: "Small (527K)",
        gdp: "Medium",
        language: "Portuguese/Creole",
        climate: "Desert/Tropical",
        info: "Island nation known for music (morna), fishing, and tourism."
    },
    {
        name: "São Tomé and Príncipe",
        continent: "Africa",
        population: "Small (240K)",
        gdp: "Medium",
        language: "Portuguese",
        climate: "Tropical",
        info: "Small island nation known for cocoa production and biodiversity."
    },
    {
        name: "Seychelles",
        continent: "Africa",
        population: "Small (133K)",
        gdp: "High",
        language: "English/French/Creole",
        climate: "Tropical",
        info: "Island nation known for pristine beaches, luxury tourism, and conservation efforts."
    },

    // South America
    {
        name: "Chile",
        continent: "South America",
        population: "Small (20M)",
        gdp: "High",
        language: "Spanish",
        climate: "Varied",
        info: "Long, narrow country stretching along South America's western coast, known for wine and copper."
    },
    {
        name: "Ecuador",
        continent: "South America",
        population: "Small (18M)",
        gdp: "Medium",
        language: "Spanish",
        climate: "Varied",
        info: "Country straddling the equator, home to Galápagos Islands and Amazon rainforest."
    },
    {
        name: "Guatemala",
        continent: "North America",
        population: "Small (19M)",
        gdp: "Medium",
        language: "Spanish",
        climate: "Tropical/Highland",
        info: "Central American country known for Mayan heritage, volcanoes, and coffee production."
    },
    {
        name: "Bolivia",
        continent: "South America",
        population: "Small (13M)",
        gdp: "Medium",
        language: "Spanish/Quechua/Aymara",
        climate: "Highland/Tropical",
        info: "Landlocked country known for salt flats, La Paz (highest capital), and indigenous culture."
    },
    {
        name: "Honduras",
        continent: "North America",
        population: "Small (11M)",
        gdp: "Low",
        language: "Spanish",
        climate: "Tropical",
        info: "Central American country known for Mayan ruins at Copán and banana production."
    },
    {
        name: "Paraguay",
        continent: "South America",
        population: "Small (7M)",
        gdp: "Medium",
        language: "Spanish/Guaraní",
        climate: "Subtropical",
        info: "Landlocked country known for hydroelectric power, mate tea, and bilingual culture."
    },
    {
        name: "Nicaragua",
        continent: "North America",
        population: "Small (7M)",
        gdp: "Low",
        language: "Spanish",
        climate: "Tropical",
        info: "Central American country known for lakes, volcanoes, and revolutionary history."
    },
    {
        name: "El Salvador",
        continent: "North America",
        population: "Small (6M)",
        gdp: "Medium",
        language: "Spanish",
        climate: "Tropical",
        info: "Smallest Central American country, known for pupusas and adoption of Bitcoin."
    },
    {
        name: "Costa Rica",
        continent: "North America",
        population: "Small (5M)",
        gdp: "High",
        language: "Spanish",
        climate: "Tropical",
        info: "Central American country known for biodiversity, eco-tourism, and no military."
    },
    {
        name: "Panama",
        continent: "North America",
        population: "Small (5M)",
        gdp: "High",
        language: "Spanish",
        climate: "Tropical",
        info: "Central American country famous for Panama Canal connecting Atlantic and Pacific."
    },
    {
        name: "Uruguay",
        continent: "South America",
        population: "Small (3M)",
        gdp: "High",
        language: "Spanish",
        climate: "Temperate",
        info: "Small country known for progressive policies, beef, and tango culture."
    },
    {
        name: "Guyana",
        continent: "South America",
        population: "Small (836K)",
        gdp: "Medium",
        language: "English",
        climate: "Tropical",
        info: "Only English-speaking South American country, known for oil discoveries and rainforests."
    },
    {
        name: "Suriname",
        continent: "South America",
        population: "Small (640K)",
        gdp: "Medium",
        language: "Dutch",
        climate: "Tropical",
        info: "Only Dutch-speaking South American country, known for cultural diversity and gold mining."
    },
    {
        name: "French Guiana",
        continent: "South America",
        population: "Small (314K)",
        gdp: "High",
        language: "French",
        climate: "Tropical",
        info: "Overseas territory of France, home to European Space Centre."
    },

    // Caribbean and Central America
    {
        name: "Cuba",
        continent: "North America",
        population: "Small (11M)",
        gdp: "Low",
        language: "Spanish",
        climate: "Tropical",
        info: "Caribbean island nation known for cigars, vintage cars, and communist government."
    },
    {
        name: "Haiti",
        continent: "North America",
        population: "Small (12M)",
        gdp: "Low",
        language: "French/Haitian Creole",
        climate: "Tropical",
        info: "Caribbean country, first independent black republic, facing economic challenges."
    },
    {
        name: "Dominican Republic",
        continent: "North America",
        population: "Small (12M)",
        gdp: "Medium",
        language: "Spanish",
        climate: "Tropical",
        info: "Caribbean country sharing Hispaniola with Haiti, known for baseball and beaches."
    },
    {
        name: "Jamaica",
        continent: "North America",
        population: "Small (3M)",
        gdp: "Medium",
        language: "English",
        climate: "Tropical",
        info: "Caribbean island known for reggae music, Blue Mountain coffee, and sprinting champions."
    },
    {
        name: "Trinidad and Tobago",
        continent: "North America",
        population: "Small (1M)",
        gdp: "High",
        language: "English",
        climate: "Tropical",
        info: "Twin-island nation known for carnival, calypso music, and oil production."
    },
    {
        name: "Belize",
        continent: "North America",
        population: "Small (423K)",
        gdp: "Medium",
        language: "English",
        climate: "Tropical",
        info: "Only English-speaking Central American country, known for barrier reef and Mayan sites."
    },
    {
        name: "Bahamas",
        continent: "North America",
        population: "Small (403K)",
        gdp: "High",
        language: "English",
        climate: "Tropical",
        info: "Island nation known for pink sand beaches, swimming pigs, and offshore banking."
    },
    {
        name: "Barbados",
        continent: "North America",
        population: "Small (283K)",
        gdp: "High",
        language: "English",
        climate: "Tropical",
        info: "Caribbean island known for rum production, cricket, and recently becoming a republic."
    },
    {
        name: "Saint Lucia",
        continent: "North America",
        population: "Small (180K)",
        gdp: "High",
        language: "English",
        climate: "Tropical",
        info: "Caribbean island known for Pitons (volcanic peaks) and luxury resorts."
    },
    {
        name: "Grenada",
        continent: "North America",
        population: "Small (117K)",
        gdp: "High",
        language: "English",
        climate: "Tropical",
        info: "Caribbean island known as 'Spice Isle' for nutmeg and other spice production."
    },
    {
        name: "Saint Vincent and the Grenadines",
        continent: "North America",
        population: "Small (100K)",
        gdp: "Medium",
        language: "English",
        climate: "Tropical",
        info: "Caribbean island chain known for sailing, luxury yachting, and volcanic landscapes."
    },
    {
        name: "Antigua and Barbuda",
        continent: "North America",
        population: "Small (94K)",
        gdp: "High",
        language: "English",
        climate: "Tropical",
        info: "Twin-island nation known for 365 beaches and sailing culture."
    },
    {
        name: "Dominica",
        continent: "North America",
        population: "Small (66K)",
        gdp: "Medium",
        language: "English",
        climate: "Tropical",
        info: "Caribbean island known as 'Nature Isle' for rainforests and whale watching."
    },
    {
        name: "Saint Kitts and Nevis",
        continent: "North America",
        population: "Small (47K)",
        gdp: "High",
        language: "English",
        climate: "Tropical",
        info: "Twin-island federation known for sugar heritage and citizenship by investment."
    },

    // Oceania
    {
        name: "Papua New Guinea",
        continent: "Oceania",
        population: "Small (11M)",
        gdp: "Medium",
        language: "English/Tok Pisin",
        climate: "Tropical",
        info: "Island country with incredible linguistic diversity, over 800 languages spoken."
    },
    {
        name: "New Zealand",
        continent: "Oceania",
        population: "Small (5M)",
        gdp: "High",
        language: "English/Māori",
        climate: "Temperate/Oceanic",
        info: "Island nation known for stunning landscapes, sheep farming, and Lord of the Rings filming."
    },
    {
        name: "Fiji",
        continent: "Oceania",
        population: "Small (933K)",
        gdp: "Medium",
        language: "English/Fijian",
        climate: "Tropical",
        info: "Island nation known for coral reefs, rugby, and 'Bula' greeting."
    },
    {
        name: "Solomon Islands",
        continent: "Oceania",
        population: "Small (839K)",
        gdp: "Low",
        language: "English",
        climate: "Tropical",
        info: "Island nation known for WWII history and traditional shell money."
    },
    {
        name: "Vanuatu",
        continent: "Oceania",
        population: "Small (335K)",
        gdp: "Medium",
        language: "English/French/Bislama",
        climate: "Tropical",
        info: "Island nation known for active volcanoes and land diving tradition."
    },
    {
        name: "Samoa",
        continent: "Oceania",
        population: "Small (219K)",
        gdp: "Medium",
        language: "Samoan/English",
        climate: "Tropical",
        info: "Polynesian island nation known for fa'a Samoa culture and rugby."
    },
    {
        name: "Kiribati",
        continent: "Oceania",
        population: "Small (136K)",
        gdp: "Low",
        language: "English/Gilbertese",
        climate: "Tropical",
        info: "Pacific island nation threatened by sea level rise, spans four time zones."
    },
    {
        name: "Micronesia",
        continent: "Oceania",
        population: "Small (114K)",
        gdp: "Medium",
        language: "English",
        climate: "Tropical",
        info: "Island federation known for diverse marine life and WWII wrecks."
    },
    {
        name: "Tonga",
        continent: "Oceania",
        population: "Small (104K)",
        gdp: "Medium",
        language: "Tongan/English",
        climate: "Tropical",
        info: "Polynesian kingdom that was never fully colonized, known for rugby players."
    },
    {
        name: "Marshall Islands",
        continent: "Oceania",
        population: "Small (36K)",
        gdp: "Medium",
        language: "English/Marshallese",
        climate: "Tropical",
        info: "Island nation known for nuclear testing history and rising sea levels."
    },
    {
        name: "Palau",
        continent: "Oceania",
        population: "Small (18K)",
        gdp: "High",
        language: "English/Palauan",
        climate: "Tropical",
        info: "Island nation known for pristine diving sites and jellyfish lake."
    },
    {
        name: "Nauru",
        continent: "Oceania",
        population: "Small (12K)",
        gdp: "High",
        language: "Nauruan/English",
        climate: "Tropical",
        info: "World's smallest island nation, formerly rich from phosphate mining."
    },
    {
        name: "Tuvalu",
        continent: "Oceania",
        population: "Small (9K)",
        gdp: "Medium",
        language: "Tuvaluan/English",
        climate: "Tropical",
        info: "One of smallest nations, threatened by climate change and sea level rise."
    },

    // Small European Nations and Territories
    {
        name: "Luxembourg",
        continent: "Europe",
        population: "Small (680K)",
        gdp: "Very High",
        language: "Luxembourgish/French/German",
        climate: "Temperate",
        info: "Small landlocked country known for banking, EU institutions, and high GDP per capita."
    },
    {
        name: "Malta",
        continent: "Europe",
        population: "Small (545K)",
        gdp: "High",
        language: "Maltese/English",
        climate: "Mediterranean",
        info: "Small island nation known for Knights of Malta history and limestone architecture."
    },
    {
        name: "Iceland",
        continent: "Europe",
        population: "Small (398K)",
        gdp: "Very High",
        language: "Icelandic",
        climate: "Subarctic",
        info: "Nordic island nation known for geysers, glaciers, Northern Lights, and renewable energy."
    },
    {
        name: "Cyprus",
        continent: "Europe/Asia",
        population: "Small (1M)",
        gdp: "High",
        language: "Greek/Turkish",
        climate: "Mediterranean",
        info: "Mediterranean island divided between Greek and Turkish communities."
    },
    {
        name: "Andorra",
        continent: "Europe",
        population: "Small (83K)",
        gdp: "Very High",
        language: "Catalan",
        climate: "Alpine",
        info: "Small principality between France and Spain, known for duty-free shopping and skiing."
    },
    {
        name: "Liechtenstein",
        continent: "Europe",
        population: "Small (40K)",
        gdp: "Very High",
        language: "German",
        climate: "Alpine",
        info: "Small principality known for banking, low taxes, and beautiful Alpine scenery."
    },
    {
        name: "Monaco",
        continent: "Europe",
        population: "Small (38K)",
        gdp: "Very High",
        language: "French",
        climate: "Mediterranean",
        info: "Second-smallest country, known for Monte Carlo casino, Formula 1, and luxury lifestyle."
    },
    {
        name: "San Marino",
        continent: "Europe",
        population: "Small (34K)",
        gdp: "High",
        language: "Italian",
        climate: "Mediterranean",
        info: "One of world's oldest republics, completely surrounded by Italy."
    },
    {
        name: "Vatican City",
        continent: "Europe",
        population: "Small (501)",
        gdp: "High",
        language: "Italian/Latin",
        climate: "Mediterranean",
        info: "World's smallest country, spiritual and administrative center of Catholic Church."
    },

    // Additional Asian Countries
    {
        name: "Bhutan",
        continent: "Asia",
        population: "Small (797K)",
        gdp: "Medium",
        language: "Dzongkha",
        climate: "Himalayan",
        info: "Himalayan kingdom known for Gross National Happiness and carbon-negative status."
    },
    {
        name: "Maldives",
        continent: "Asia",
        population: "Small (530K)",
        gdp: "High",
        language: "Dhivehi",
        climate: "Tropical",
        info: "Island nation known for luxury resorts, coral reefs, and being lowest-lying country."
    },
    {
        name: "Timor-Leste (East Timor)",
        continent: "Asia",
        population: "Small (1M)",
        gdp: "Low",
        language: "Tetum/Portuguese",
        climate: "Tropical",
        info: "Young nation (2002), known for coffee production and struggle for independence."
    },

    // Special Territories and Dependencies
    {
        name: "Hong Kong",
        continent: "Asia",
        population: "Small (7M)",
        gdp: "Very High",
        language: "Chinese/English",
        climate: "Subtropical",
        info: "Special Administrative Region of China, major financial hub with unique 'One Country, Two Systems'."
    },
    {
        name: "Macau",
        continent: "Asia",
        population: "Small (722K)",
        gdp: "Very High",
        language: "Chinese/Portuguese",
        climate: "Subtropical",
        info: "Special Administrative Region of China, known as 'Las Vegas of Asia' for gambling."
    },
    {
        name: "Puerto Rico",
        continent: "North America",
        population: "Small (3M)",
        gdp: "High",
        language: "Spanish/English",
        climate: "Tropical",
        info: "US territory in Caribbean known for El Yunque rainforest and rich cultural heritage."
    },
    {
        name: "Greenland",
        continent: "North America",
        population: "Small (56K)",
        gdp: "High",
        language: "Greenlandic",
        climate: "Arctic",
        info: "World's largest island, autonomous territory of Denmark, mostly ice-covered."
    },
    {
        name: "Faroe Islands",
        continent: "Europe",
        population: "Small (56K)",
        gdp: "Very High",
        language: "Faroese",
        climate: "Oceanic",
        info: "North Atlantic archipelago, autonomous territory of Denmark, known for grass-roof houses."
    }
];
