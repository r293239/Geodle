// Histle Data - Historical Geography Clues (Enhanced)
const histleData = [
    {
        answer: "SINGAPORE",
        alternatives: ["SINGAPURA"],
        clues: [
            "Its national symbol is the Merlion",
            "It was briefly part of another country from 1963 to 1965",
            "It transformed from a third to first world country in one generation",
            "It was occupied by Japan during World War II",
            "It gained sovereignty in 1965",
            "It was founded as a British trading post in 1819",
            "It was part of the Straits Settlements with Malacca and Penang",
            "This Southeast Asian city-state has four official languages"
        ]
    },
    {
        answer: "GERMANY",
        alternatives: ["DEUTSCHLAND", "FEDERAL REPUBLIC OF GERMANY"],
        clues: [
            "The Berlin Wall fell in 1989",
            "Its capital moved from Bonn to Berlin in 1999",
            "This European nation was unified in 1871",
            "It adopted the Euro currency in 1999",
            "It was divided into occupation zones after 1945",
            "It reunified in 1990 after decades of division",
            "It was a founding member of the European Union",
            "This country was divided after World War II from 1945 to 1990"
        ]
    },
    {
        answer: "ETHIOPIA",
        alternatives: ["ABYSSINIA"],
        clues: [
            "It adopted Christianity in the 4th century",
            "Emperor Haile Selassie ruled from 1930 to 1974",
            "This African nation was never formally colonized",
            "It defeated Italy at the Battle of Adwa in 1896",
            "It became a socialist state from 1974 to 1991",
            "It has one of the world's oldest continuous monarchies",
            "It was occupied by Italy from 1936 to 1941",
            "It adopted its current constitution in 1995"
        ]
    },
    {
        answer: "TURKEY",
        alternatives: ["TÜRKİYE", "REPUBLIC OF TURKEY"],
        clues: [
            "Istanbul bridges Europe and Asia across the Bosphorus",
            "It switched from Arabic to Latin alphabet in 1928",
            "This nation became a republic in 1923 under Mustafa Kemal Atatürk",
            "It banned the fez and promoted Western dress",
            "It adopted secularism in its constitution",
            "Constantinople fell to its predecessors in 1453",
            "It has been an EU candidate country since 1999",
            "This country was the center of the Ottoman Empire"
        ]
    },
    {
        answer: "VIETNAM",
        alternatives: ["SOCIALIST REPUBLIC OF VIETNAM", "VIỆT NAM"],
        clues: [
            "It fought a war against the United States ending in 1975",
            "This Southeast Asian country was colonized by France",
            "The Battle of Điện Biên Phủ ended French colonial rule in 1954",
            "It was divided at the 17th parallel from 1954 to 1975",
            "It implemented Đổi Mới economic reforms in 1986",
            "It has a 1,000-year history of Chinese domination",
            "The ancient kingdom of Champa was located here",
            "It normalized relations with the US in 1995"
        ]
    },
    {
        answer: "IRAN",
        alternatives: ["PERSIA", "ISLAMIC REPUBLIC OF IRAN"],
        clues: [
            "This country was known as Persia until 1935",
            "The 1979 Revolution established an Islamic Republic",
            "It was ruled by the Pahlavi dynasty from 1925 to 1979",
            "Cyrus the Great founded the Achaemenid Empire here",
            "It has the world's second largest natural gas reserves",
            "The Persian Empire once stretched from Greece to India",
            "It was occupied by Allied forces during World War II",
            "The 1953 coup overthrew Prime Minister Mosaddegh"
        ]
    },
    {
        answer: "ARGENTINA",
        alternatives: ["ARGENTINE REPUBLIC"],
        clues: [
            "It fought a war over the Falkland Islands in 1982",
            "This South American country was colonized by Spain",
            "Juan Perón served as president three times",
            "It had a military dictatorship from 1976 to 1983",
            "It defaulted on its national debt in 2001",
            "The Dirty War involved state terrorism from 1976 to 1983",
            "It's the birthplace of the tango",
            "It claims sovereignty over the Falkland Islands"
        ]
    },
    {
        answer: "NIGERIA",
        alternatives: ["FEDERAL REPUBLIC OF NIGERIA"],
        clues: [
            "This African country gained independence from Britain in 1960",
            "It experienced a civil war from 1967 to 1970",
            "It is Africa's most populous nation",
            "Oil was discovered in the Niger Delta in 1956",
            "It returned to civilian rule in 1999 after military dictatorships",
            "It was created from the merging of Northern and Southern protectorates",
            "It's a member of OPEC since 1971",
            "The ancient Nok civilization existed here"
        ]
    },
    {
        answer: "PERU",
        alternatives: ["REPUBLIC OF PERU"],
        clues: [
            "This Andean nation was the center of the Inca Empire",
            "Machu Picchu is its most famous archaeological site",
            "It was conquered by Francisco Pizarro in the 1530s",
            "It gained independence from Spain in 1821",
            "It fought the War of the Pacific from 1879 to 1884",
            "The Shining Path insurgency occurred from 1980 to 2000",
            "It's the birthplace of the potato",
            "The ancient city of Caral is the oldest in the Americas"
        ]
    },
    {
        answer: "SAUDI ARABIA",
        alternatives: ["KINGDOM OF SAUDI ARABIA"],
        clues: [
            "This Middle Eastern country was founded in 1932",
            "It contains Islam's two holiest cities, Mecca and Medina",
            "Oil was discovered here in 1938",
            "It's an absolute monarchy",
            "It participated in the 1973 oil embargo",
            "The Al Saud family has ruled since the 18th century",
            "Women were granted the right to drive in 2018",
            "It follows Sharia law"
        ]
    },
    {
        answer: "POLAND",
        alternatives: ["REPUBLIC OF POLAND", "POLSKA"],
        clues: [
            "This Central European country was partitioned three times in the 18th century",
            "The Warsaw Uprising occurred in 1944",
            "Solidarity trade union challenged communist rule in the 1980s",
            "It joined NATO in 1999 and the EU in 2004",
            "Its capital was completely rebuilt after World War II",
            "It was part of the Warsaw Pact from 1955 to 1991",
            "The Polish-Lithuanian Commonwealth was once Europe's largest state",
            "Lech Wałęsa was its first democratically elected president"
        ]
    },
    {
        answer: "MONGOLIA",
        alternatives: ["OUTER MONGOLIA"],
        clues: [
            "Genghis Khan founded an empire from here in the 13th century",
            "This landlocked country declared independence from China in 1921",
            "It became the world's second communist country in 1924",
            "It transitioned to democracy in 1990",
            "It has the lowest population density of any sovereign state",
            "The Yuan Dynasty ruled China from here",
            "It was a Soviet satellite state until 1990",
            "Ulaanbaatar is its capital and largest city"
        ]
    },
    {
        answer: "SOUTH KOREA",
        alternatives: ["REPUBLIC OF KOREA"],
        clues: [
            "It hosted the 1988 Summer Olympics in its capital",
            "This East Asian nation was annexed by Japan from 1910 to 1945",
            "The Korean War lasted from 1950 to 1953",
            "It had rapid economic growth called the Miracle on the Han River",
            "It was divided after World War II",
            "It's a global leader in technology and pop culture",
            "It has a history dating back to Gojoseon in 2333 BCE",
            "This country was founded in 1948"
        ]
    },
    {
        answer: "SWITZERLAND",
        alternatives: ["SWISS CONFEDERATION"],
        clues: [
            "This European country has maintained neutrality since 1815",
            "It was not a member of the UN until 2002",
            "Its cantonal system dates back to 1291",
            "It's home to the Red Cross and Red Crescent Movement",
            "It has four national languages",
            "It joined the Schengen Area in 2008 but not the EU",
            "The Swiss Guard protects the Vatican",
            "It was formed from the Old Swiss Confederacy"
        ]
    },
    {
        answer: "KENYA",
        alternatives: ["REPUBLIC OF KENYA"],
        clues: [
            "This East African country gained independence from Britain in 1963",
            "The Mau Mau Uprising occurred from 1952 to 1960",
            "Jomo Kenyatta was its first president",
            "It has significant wildlife reserves including the Maasai Mara",
            "Nairobi is its capital and largest city",
            "It was a British protectorate and colony",
            "It's the economic hub of East Africa",
            "Human fossils dating back millions of years have been found here"
        ]
    },
    {
        answer: "CUBA",
        alternatives: ["REPUBLIC OF CUBA"],
        clues: [
            "This Caribbean island had a revolution in 1959",
            "Fidel Castro ruled from 1959 to 2008",
            "The Bay of Pigs invasion occurred in 1961",
            "It was a Spanish colony until 1898",
            "The Cuban Missile Crisis happened in 1962",
            "It has been under a US embargo since 1960",
            "It's the largest island in the Caribbean",
            "José Martí is considered a national hero"
        ]
    },
    {
        answer: "THAILAND",
        alternatives: ["SIAM", "KINGDOM OF THAILAND"],
        clues: [
            "This Southeast Asian country was never colonized",
            "It changed its name from Siam in 1939",
            "It's a constitutional monarchy with a king as head of state",
            "Bangkok is its capital and largest city",
            "It was a buffer state between British and French colonies",
            "It experienced a military coup in 2014",
            "The ancient kingdoms of Sukhothai and Ayutthaya existed here",
            "It remained neutral during most of World War II"
        ]
    },
    {
        answer: "INDONESIA",
        alternatives: ["REPUBLIC OF INDONESIA"],
        clues: [
            "This archipelago nation declared independence in 1945",
            "It was colonized by the Netherlands as the Dutch East Indies",
            "Sukarno was its first president",
            "It's the world's largest island country",
            "The Bandung Conference was held here in 1955",
            "It experienced the 1965-66 mass killings",
            "It has over 17,000 islands",
            "It's the world's most populous Muslim-majority country"
        ]
    },
    {
        answer: "UKRAINE",
        alternatives: ["УКРАЇНА"],
        clues: [
            "This Eastern European country gained independence in 1991",
            "The Chernobyl disaster occurred here in 1986",
            "It was part of the Soviet Union from 1922 to 1991",
            "The Orange Revolution took place in 2004",
            "It was known as the breadbasket of the Soviet Union",
            "Kyiv was the center of Kyivan Rus'",
            "It experienced the Holodomor famine in 1932-33",
            "The Crimean Peninsula was annexed in 2014"
        ]
    },
    {
        answer: "PHILIPPINES",
        alternatives: ["REPUBLIC OF THE PHILIPPINES"],
        clues: [
            "This archipelago was named after King Philip II of Spain",
            "It gained independence from the United States in 1946",
            "It was a Spanish colony for over 300 years",
            "Ferdinand Marcos ruled as dictator from 1965 to 1986",
            "The People Power Revolution occurred in 1986",
            "It's the only Asian Catholic-majority country",
            "The Battle of Manila in 1945 was particularly destructive",
            "It's located in the Pacific Ring of Fire"
        ]
    },
    {
        answer: "COLOMBIA",
        alternatives: ["REPUBLIC OF COLOMBIA"],
        clues: [
            "This South American country was named after Christopher Columbus",
            "Simón Bolívar helped liberate it from Spain",
            "It experienced a civil war called La Violencia from 1948 to 1958",
            "The FARC insurgency lasted from 1964 to 2016",
            "It's the world's leading producer of emeralds",
            "It lost Panama in 1903",
            "It has coastlines on both the Pacific and Caribbean",
            "The Medellín and Cali cartels were based here"
        ]
    },
    {
        answer: "MOROCCO",
        alternatives: ["KINGDOM OF MOROCCO"],
        clues: [
            "This North African country was a French and Spanish protectorate",
            "It gained independence in 1956",
            "The Green March took place in 1975",
            "It has disputed territory in Western Sahara",
            "The Alaouite dynasty has ruled since 1631",
            "It was the first country to recognize the United States in 1777",
            "Casablanca is its largest city",
            "It's the only African country not in the African Union until 2017"
        ]
    },
    {
        answer: "PAKISTAN",
        alternatives: ["ISLAMIC REPUBLIC OF PAKISTAN"],
        clues: [
            "This South Asian country was created as a Muslim homeland in 1947",
            "It was formed from the partition of British India",
            "East Pakistan became Bangladesh in 1971",
            "It's a nuclear power since 1998",
            "Muhammad Ali Jinnah is its founder",
            "It has had multiple military coups",
            "The Khyber Pass connects it to Afghanistan",
            "It's the world's second-largest Muslim-majority country"
        ]
    },
    {
        answer: "BANGLADESH",
        alternatives: ["PEOPLE'S REPUBLIC OF BANGLADESH"],
        clues: [
            "This South Asian country gained independence from Pakistan in 1971",
            "It was formerly known as East Pakistan",
            "The Language Movement of 1952 was a key event",
            "Sheikh Mujibur Rahman is its founding leader",
            "It's one of the world's most densely populated countries",
            "The Bengal Famine of 1943 affected this region",
            "It's vulnerable to climate change and cyclones",
            "The Sundarbans mangrove forest is located here"
        ]
    },
    {
        answer: "VENEZUELA",
        alternatives: ["BOLIVARIAN REPUBLIC OF VENEZUELA"],
        clues: [
            "This South American country has the world's largest oil reserves",
            "Simón Bolívar liberated it from Spanish rule",
            "Hugo Chávez served as president from 1999 to 2013",
            "It experienced an economic crisis in the 2010s",
            "It was one of the world's richest countries in the 20th century",
            "The Battle of Carabobo secured its independence",
            "It's a founding member of OPEC",
            "Angel Falls is the world's highest waterfall"
        ]
    },
    {
        answer: "MYANMAR",
        alternatives: ["BURMA", "REPUBLIC OF THE UNION OF MYANMAR"],
        clues: [
            "This Southeast Asian country was known as Burma until 1989",
            "It gained independence from Britain in 1948",
            "Aung San Suu Kyi was placed under house arrest for years",
            "It was ruled by a military junta from 1962 to 2011",
            "The Saffron Revolution occurred in 2007",
            "It has ethnic conflicts with the Rohingya people",
            "The ancient kingdoms of Pagan and Ava existed here",
            "It's rich in jade and gemstones"
        ]
    },
    {
        answer: "NEPAL",
        alternatives: ["FEDERAL DEMOCRATIC REPUBLIC OF NEPAL"],
        clues: [
            "This Himalayan country was a monarchy until 2008",
            "Mount Everest is located on its border with China",
            "It was never colonized",
            "The 2001 royal massacre killed most of the royal family",
            "It ended a civil war in 2006",
            "It's the birthplace of Gautama Buddha",
            "The Gurkhas are renowned soldiers from here",
            "It became a republic after abolishing its monarchy"
        ]
    },
    {
        answer: "CHILE",
        alternatives: ["REPUBLIC OF CHILE"],
        clues: [
            "This long, narrow South American country stretches along the Andes",
            "Salvador Allende was overthrown in a 1973 coup",
            "Augusto Pinochet ruled as dictator from 1973 to 1990",
            "It fought the War of the Pacific from 1879 to 1884",
            "It's the world's largest copper producer",
            "The Atacama Desert is the driest place on Earth",
            "It returned to democracy in 1990",
            "Easter Island (Rapa Nui) is part of this country"
        ]
    }
];

// COMMING SOON! Additional harder countries could include:
/*
- Afghanistan
- North Korea
- Sri Lanka
- Sudan/South Sudan
- Iraq
- Syria
- Lebanon
- Jordan
- Kazakhstan
- Uzbekistan
- Angola
- Democratic Republic of Congo
- Rwanda
- Somalia
- Algeria
- Tunisia
- Libya
- Yemen
- Oman
- Qatar
- United Arab Emirates
- Kuwait
- Bahrain
- Mongolia (already included)
- Bhutan
- Laos
- Cambodia
- Brunei
- East Timor
- Papua New Guinea
- Fiji
- Iceland
- Norway
- Sweden
- Finland
- Denmark
- Netherlands
- Belgium
- Luxembourg
- Austria
- Czech Republic
- Slovakia
- Hungary
- Romania
- Bulgaria
- Serbia
- Croatia
- Bosnia and Herzegovina
- Albania
- North Macedonia
- Slovenia
- Montenegro
- Kosovo
- Portugal
- Spain
- Andorra
- San Marino
- Vatican City
- Monaco
- Liechtenstein
- Malta
- Cyprus
- Belarus
- Lithuania
- Latvia
- Estonia
- Moldova
- Georgia
- Armenia
- Azerbaijan
- Turkmenistan
- Tajikistan
- Kyrgyzstan
- Madagascar
- Mauritius
- Seychelles
- Comoros
- Malawi
- Zambia
- Zimbabwe
- Botswana
- Namibia
- Mozambique
- Tanzania
- Uganda
- Ghana
- Ivory Coast
- Senegal
- Mali
- Burkina Faso
- Niger
- Chad
- Cameroon
- Gabon
- Republic of Congo
- Central African Republic
- South Sudan
- Eritrea
- Djibouti
- Sierra Leone
- Liberia
- Togo
- Benin
- Guinea
- Guinea-Bissau
- The Gambia
- Cape Verde
- São Tomé and Príncipe
- Equatorial Guinea
- Mauritania
- Western Sahara (disputed)
- Palestine (partially recognized)
- Taiwan (disputed)
- Hong Kong (SAR of China)
- Macau (SAR of China)
- Greenland (autonomous territory)
- Puerto Rico (US territory)
- Bermuda (British territory)
- French Guiana (French territory)
- Guadeloupe (French territory)
- Martinique (French territory)
- Réunion (French territory)
- Mayotte (French territory)
- New Caledonia (French territory)
- French Polynesia (French territory)
- Wallis and Futuna (French territory)
- Saint Pierre and Miquelon (French territory)
- Aruba (Dutch territory)
- Curaçao (Dutch territory)
- Sint Maarten (Dutch territory)
- Bonaire (Dutch territory)
- Saba (Dutch territory)
- Sint Eustatius (Dutch territory)
- Cayman Islands (British territory)
- British Virgin Islands (British territory)
- Anguilla (British territory)
- Montserrat (British territory)
- Turks and Caicos Islands (British territory)
- Gibraltar (British territory)
- Falkland Islands (British territory)
- Saint Helena, Ascension and Tristan da Cunha (British territory)
- Pitcairn Islands (British territory)
- British Indian Ocean Territory
- South Georgia and the South Sandwich Islands (British territory)
- Åland Islands (Finnish autonomy)
- Faroe Islands (Danish autonomy)
- Svalbard (Norwegian territory)
- Jan Mayen (Norwegian territory)
- Bouvet Island (Norwegian territory)
- Peter I Island (Norwegian claim)
- Queen Maud Land (Norwegian claim)
- Australian Antarctic Territory
- Ross Dependency (New Zealand claim)
- Adélie Land (French claim)
- Chilean Antarctic Territory
- Argentine Antarctica
- British Antarctic Territory
- Unclaimed sectors of Antarctica
*/
