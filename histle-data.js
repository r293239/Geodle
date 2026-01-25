// Histle Data - Historical Geography Clues
const histleData = [
    {
        answer: "SINGAPORE",
        clues: [
            "🇸🇬 This country gained independence in 1965",
            "🌏 It's located in Southeast Asia",
            "🏙️ It was founded as a British trading post in 1819",
            "⚓ It was part of the Straits Settlements with Malacca and Penang",
            "🇯🇵 It was occupied by Japan during World War II",
            "🇲🇾 It was briefly part of Malaysia (1963-1965)",
            "📈 It transformed from a third to first world country in one generation",
            "🦁 Its national symbol is the Merlion"
        ]
    },
    {
        answer: "USA",
        clues: [
            "🇺🇸 This country declared independence on July 4, 1776",
            "🗽 It was originally 13 British colonies",
            "🦅 Its national bird is the bald eagle",
            "⚔️ It fought a Civil War from 1861-1865",
            "🏛️ Its government is based on a Constitution written in 1787",
            "🌎 It expanded westward through the Louisiana Purchase (1803) and Mexican-American War",
            "🇫🇷 It acquired the Statue of Liberty as a gift from France in 1886",
            "🚀 It was the first country to land humans on the Moon (1969)"
        ]
    },
    {
        answer: "INDIA",
        clues: [
            "🇮🇳 This country gained independence from Britain in 1947",
            "🕌 Its civilization dates back to the Indus Valley Civilization (3300-1300 BCE)",
            "🐘 It was ruled by the Maurya Empire (322-185 BCE)",
            "🕌 The Mughal Empire ruled here from 1526-1857",
            "🚂 The British East India Company established control in the 18th century",
            "🕉️ Mahatma Gandhi led its non-violent independence movement",
            "🔪 It was partitioned into India and Pakistan upon independence",
            "📜 It adopted its constitution in 1950"
        ]
    },
    {
        answer: "AUSTRALIA",
        clues: [
            "🇦🇺 This country was established as a British penal colony in 1788",
            "🌏 It's the world's largest island and smallest continent",
            "👑 It became a federation of colonies in 1901",
            "⚓ It was visited by Dutch explorers in the 17th century",
            "🎯 Captain James Cook claimed it for Britain in 1770",
            "⚔️ ANZAC forces fought at Gallipoli in World War I",
            "✈️ It became independent with the Statute of Westminster in 1931",
            "🎵 Its national anthem was changed from 'God Save the Queen' in 1984"
        ]
    },
    {
        answer: "SOUTH AFRICA",
        clues: [
            "🇿🇦 This country gained independence from Britain in 1910",
            "💎 Gold and diamonds were discovered here in the late 19th century",
            "⚔️ It fought the Anglo-Boer Wars (1880-1881, 1899-1902)",
            "🏛️ It implemented apartheid from 1948-1994",
            "🕊️ Nelson Mandela was imprisoned here for 27 years",
            "🏆 It hosted the first Rugby World Cup in Africa (1995)",
            "👑 It left the British Commonwealth in 1961, rejoined in 1994",
            "🌈 It's known as the 'Rainbow Nation'"
        ]
    },
    {
        answer: "JAPAN",
        clues: [
            "🇯🇵 This country was never formally colonized",
            "👑 It has the world's oldest continuous hereditary monarchy",
            "⚔️ It had a feudal period with shoguns and samurai (1185-1868)",
            "🚢 It ended 200 years of isolation in 1853",
            "🏯 Its capital was called Edo until 1868",
            "💣 It was the only country to be attacked with nuclear weapons (1945)",
            "📈 It had an economic miracle after World War II",
            "🗾 It adopted a pacifist constitution in 1947"
        ]
    },
    {
        answer: "MEXICO",
        clues: [
            "🇲🇽 This country gained independence from Spain in 1821",
            "🏺 It was home to advanced civilizations like the Aztecs and Maya",
            "⚔️ It lost half its territory to the USA in the Mexican-American War (1846-1848)",
            "🇫🇷 It was ruled by Emperor Maximilian I (1864-1867) installed by France",
            "🔄 It had a revolution from 1910-1920",
            "🛢️ It nationalized its oil industry in 1938",
            "🏙️ It hosted the 1968 Summer Olympics",
            "🌮 Its cuisine is UNESCO-listed intangible cultural heritage"
        ]
    },
    {
        answer: "EGYPT",
        clues: [
            "🇪🇬 This country's civilization dates back to 3100 BCE",
            "🏜️ It was ruled by pharaohs for over 3,000 years",
            "🗿 It built the Great Pyramids of Giza around 2580–2560 BCE",
            "🕌 It was conquered by Arabs in the 7th century",
            "⚓ The Suez Canal opened here in 1869",
            "🇬🇧 It was a British protectorate from 1914-1922",
            "🏛️ It became a republic after the 1952 revolution",
            "🕊️ It signed a peace treaty with Israel in 1979"
        ]
    },
    {
        answer: "BRAZIL",
        clues: [
            "🇧🇷 This country gained independence from Portugal in 1822",
            "👑 It was the only monarchy in South America (1822-1889)",
            "🏛️ Its capital was moved from Rio de Janeiro to Brasília in 1960",
            "📜 It had a military dictatorship from 1964-1985",
            "🌳 The Treaty of Tordesillas (1494) divided it between Portugal and Spain",
            "⚽ It has won the FIFA World Cup 5 times",
            "🏙️ It hosted the 2014 World Cup and 2016 Olympics",
            "🌿 It was the last country in the Americas to abolish slavery (1888)"
        ]
    },
    {
        answer: "RUSSIA",
        clues: [
            "🇷🇺 This country was the center of the Soviet Union (1922-1991)",
            "👑 It was ruled by tsars until the 1917 revolution",
            "❄️ It withstood Napoleon's invasion in 1812",
            "⚔️ It was a major Allied power in World War II",
            "🚀 It launched the first satellite (Sputnik) and first human in space",
            "🏛️ The Soviet Union collapsed in 1991",
            "💰 It transitioned to a market economy in the 1990s",
            "🐻 Its current constitution was adopted in 1993"
        ]
    },
    {
        answer: "FRANCE",
        clues: [
            "🇫🇷 This country had a revolution in 1789",
            "👑 It was ruled by the Bourbon monarchy until 1792",
            "⚔️ Napoleon Bonaparte ruled as emperor (1804-1814, 1815)",
            "🗼 The Eiffel Tower was built for the 1889 World's Fair",
            "🌍 It had a vast colonial empire, second only to Britain",
            "⚔️ It was occupied by Germany during World War II",
            "🇪🇺 It was a founding member of the European Union",
            "🎨 It's home to the Louvre, world's most visited museum"
        ]
    },
    {
        answer: "CHINA",
        clues: [
            "🇨🇳 This country has the world's oldest continuous civilization",
            "👑 It was ruled by emperors for over 2,000 years",
            "🏯 The Great Wall was built over centuries starting in 7th century BCE",
            "💥 The Opium Wars (1839-1842, 1856-1860) forced it to open to trade",
            "🔄 It had a revolution in 1911 ending imperial rule",
            "☭ The Communist Party took control in 1949",
            "📈 It began economic reforms in 1978",
            "🏙️ It regained Hong Kong in 1997 and Macau in 1999"
        ]
    },
    {
        answer: "ITALY",
        clues: [
            "🇮🇹 This country was unified in 1861",
            "🏛️ It was the center of the Roman Empire",
            "🎨 It was the birthplace of the Renaissance",
            "⚔️ Mussolini ruled as dictator from 1922-1943",
            "👑 It became a republic after a 1946 referendum",
            "🇪🇺 It was a founding member of the European Union",
            "⚽ It has won the FIFA World Cup 4 times",
            "🏛️ Vatican City is an independent state within its capital"
        ]
    },
    {
        answer: "TURKEY",
        clues: [
            "🇹🇷 This country was the center of the Ottoman Empire",
            "🕌 Constantinople fell to Ottomans in 1453",
            "🔄 It became a republic in 1923 under Mustafa Kemal Atatürk",
            "🔤 It switched from Arabic to Latin alphabet in 1928",
            "👒 It banned the fez and promoted Western dress",
            "🏛️ It adopted secularism in its constitution",
            "🌉 Istanbul bridges Europe and Asia",
            "🇪🇺 It has been an EU candidate country since 1999"
        ]
    },
    {
        answer: "ISRAEL",
        clues: [
            "🇮🇱 This country declared independence in 1948",
            "📜 It's mentioned in the Bible as the Promised Land",
            "🕌 It was ruled by Romans, Byzantines, Arabs, Crusaders, and Ottomans",
            "🇬🇧 It was under British mandate from 1920-1948",
            "🕊️ The Balfour Declaration (1917) supported a Jewish homeland",
            "⚔️ It fought multiple wars with neighboring Arab states",
            "✌️ It signed peace treaties with Egypt (1979) and Jordan (1994)",
            "🕍 Jerusalem is its declared capital"
        ]
    },
    {
        answer: "CANADA",
        clues: [
            "🇨🇦 This country gained independence from Britain in 1867",
            "🍁 It was originally inhabited by Indigenous peoples",
            "🇫🇷 It was a French colony (New France) until 1763",
            "⚔️ It was conquered by Britain in the Seven Years' War",
            "🏛️ It became a self-governing dominion in 1867",
            "🎖️ It fought as an independent nation in World War I",
            "📜 It patriated its constitution from Britain in 1982",
            "🍁 Its flag with the maple leaf was adopted in 1965"
        ]
    },
    {
        answer: "GERMANY",
        clues: [
            "🇩🇪 This country was unified in 1871",
            "⚔️ It was divided after World War II (1945-1990)",
            "🏛️ The Berlin Wall fell in 1989",
            "🔄 It reunified in 1990",
            "🇪🇺 It was a founding member of the European Union",
            "💶 It adopted the Euro in 1999",
            "🏭 It was divided into occupation zones after WWII",
            "📜 Its capital moved from Bonn to Berlin in 1999"
        ]
    },
    {
        answer: "SOUTH KOREA",
        clues: [
            "🇰🇷 This country was founded in 1948",
            "📜 It has a history dating back to Gojoseon (2333 BCE)",
            "🇯🇵 It was annexed by Japan (1910-1945)",
            "⚔️ It was divided after World War II",
            "💥 The Korean War lasted from 1950-1953",
            "📈 It had rapid economic growth (Miracle on the Han River)",
            "🏙️ It hosted the 1988 Summer Olympics",
            "💻 It's a global leader in technology and pop culture"
        ]
    },
    {
        answer: "GREECE",
        clues: [
            "🇬🇷 This country is considered the cradle of Western civilization",
            "🏛️ It was the birthplace of democracy in Athens",
            "⚔️ Alexander the Great created an empire from here",
            "🇷🇴 It was part of the Roman and Byzantine Empires",
            "☦️ It was under Ottoman rule for nearly 400 years",
            "🔄 It gained independence from the Ottomans in 1830",
            "💶 It adopted the Euro in 2001",
            "🏛️ The Olympic Games originated here in ancient times"
        ]
    },
    {
        answer: "ETHIOPIA",
        clues: [
            "🇪🇹 This country was never colonized (except brief Italian occupation)",
            "👑 It has one of the world's oldest monarchies",
            "☦️ It adopted Christianity in the 4th century",
            "⚔️ It defeated Italy at the Battle of Adwa (1896)",
            "🇮🇹 It was occupied by Italy from 1936-1941",
            "👑 Emperor Haile Selassie ruled from 1930-1974",
            "🔄 It became a socialist state from 1974-1991",
            "🏛️ It adopted its current constitution in 1995"
        ]
    }
];

// Add more countries as needed...
