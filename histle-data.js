// Histle Data - Historical Geography Clues
const histleData = [
    {
        answer: "SINGAPORE",
        clues: [
            "This country gained independence in 1965",
            "It's located in Southeast Asia",
            "It was founded as a British trading post in 1819",
            "It was part of the Straits Settlements with Malacca and Penang",
            "It was occupied by Japan during World War II",
            "It was briefly part of Malaysia from 1963 to 1965",
            "It transformed from a third to first world country in one generation",
            "Its national symbol is the Merlion"
        ]
    },
    {
        answer: "UNITED STATES",
        clues: [
            "This country declared independence on July 4, 1776",
            "It was originally 13 British colonies along the Atlantic coast",
            "Its national bird is the bald eagle",
            "It fought a Civil War from 1861 to 1865 over slavery",
            "Its government is based on a Constitution written in 1787",
            "It expanded westward through the Louisiana Purchase in 1803",
            "It acquired Alaska from Russia in 1867",
            "It was the first country to land humans on the Moon in 1969"
        ]
    },
    {
        answer: "INDIA",
        clues: [
            "This country gained independence from Britain in 1947",
            "Its civilization dates back to the Indus Valley Civilization",
            "It was ruled by the Maurya Empire from 322 to 185 BCE",
            "The Mughal Empire ruled here from 1526 to 1857",
            "The British East India Company established control in the 18th century",
            "Mahatma Gandhi led its non-violent independence movement",
            "It was partitioned into India and Pakistan upon independence",
            "It adopted its constitution in 1950"
        ]
    },
    {
        answer: "AUSTRALIA",
        clues: [
            "This country was established as a British penal colony in 1788",
            "It's the world's largest island and smallest continent",
            "It became a federation of colonies in 1901",
            "It was visited by Dutch explorers in the 17th century",
            "Captain James Cook claimed it for Britain in 1770",
            "ANZAC forces from here fought at Gallipoli in World War I",
            "It became fully independent with the Statute of Westminster in 1931",
            "Its national anthem was changed from 'God Save the Queen' in 1984"
        ]
    },
    {
        answer: "SOUTH AFRICA",
        clues: [
            "This country gained independence from Britain in 1910",
            "Gold and diamonds were discovered here in the late 19th century",
            "It fought the Anglo-Boer Wars against Britain",
            "It implemented apartheid from 1948 to 1994",
            "Nelson Mandela was imprisoned here for 27 years",
            "It hosted the first Rugby World Cup in Africa in 1995",
            "It left the British Commonwealth in 1961, rejoined in 1994",
            "It's known as the 'Rainbow Nation'"
        ]
    },
    {
        answer: "JAPAN",
        clues: [
            "This country was never formally colonized",
            "It has the world's oldest continuous hereditary monarchy",
            "It had a feudal period with shoguns and samurai for nearly 700 years",
            "It ended over 200 years of isolation in 1853",
            "Its capital was called Edo until it was renamed in 1868",
            "It was the only country to be attacked with nuclear weapons in 1945",
            "It had an economic miracle after World War II",
            "It adopted a pacifist constitution in 1947"
        ]
    },
    {
        answer: "MEXICO",
        clues: [
            "This country gained independence from Spain in 1821",
            "It was home to advanced civilizations like the Aztecs and Maya",
            "It lost half its territory to the USA in the Mexican-American War",
            "It was ruled by Emperor Maximilian I installed by France in the 1860s",
            "It had a major revolution from 1910 to 1920",
            "It nationalized its oil industry in 1938",
            "It hosted the 1968 Summer Olympics",
            "Its cuisine is UNESCO-listed intangible cultural heritage"
        ]
    },
    {
        answer: "EGYPT",
        clues: [
            "This country's civilization dates back to around 3100 BCE",
            "It was ruled by pharaohs for over 3,000 years",
            "It built the Great Pyramids of Giza around 2580–2560 BCE",
            "It was conquered by Arabs in the 7th century",
            "The Suez Canal opened here in 1869",
            "It was a British protectorate from 1914 to 1922",
            "It became a republic after the 1952 revolution",
            "It signed a peace treaty with Israel in 1979"
        ]
    },
    {
        answer: "BRAZIL",
        clues: [
            "This country gained independence from Portugal in 1822",
            "It was the only monarchy in South America from 1822 to 1889",
            "Its capital was moved from Rio de Janeiro to Brasília in 1960",
            "It had a military dictatorship from 1964 to 1985",
            "The Treaty of Tordesillas in 1494 divided it between Portugal and Spain",
            "It has won the FIFA World Cup 5 times",
            "It hosted the 2014 World Cup and 2016 Olympics",
            "It was the last country in the Americas to abolish slavery in 1888"
        ]
    },
    {
        answer: "RUSSIA",
        clues: [
            "This country was the center of the Soviet Union from 1922 to 1991",
            "It was ruled by tsars until the 1917 revolution",
            "It withstood Napoleon's invasion in 1812",
            "It was a major Allied power in World War II",
            "It launched the first satellite and first human in space",
            "The Soviet Union collapsed in 1991",
            "It transitioned to a market economy in the 1990s",
            "Its current constitution was adopted in 1993"
        ]
    },
    {
        answer: "FRANCE",
        clues: [
            "This country had a revolution in 1789",
            "It was ruled by the Bourbon monarchy until 1792",
            "Napoleon Bonaparte ruled as emperor from 1804 to 1814",
            "The Eiffel Tower was built for the 1889 World's Fair",
            "It had a vast colonial empire, second only to Britain",
            "It was occupied by Germany during World War II",
            "It was a founding member of the European Union",
            "It's home to the Louvre, the world's most visited museum"
        ]
    },
    {
        answer: "CHINA",
        clues: [
            "This country has the world's oldest continuous civilization",
            "It was ruled by emperors for over 2,000 years",
            "The Great Wall was built over centuries starting in the 7th century BCE",
            "The Opium Wars forced it to open to foreign trade",
            "It had a revolution in 1911 ending imperial rule",
            "The Communist Party took control in 1949",
            "It began economic reforms in 1978",
            "It regained Hong Kong in 1997 and Macau in 1999"
        ]
    },
    {
        answer: "ITALY",
        clues: [
            "This country was unified in 1861",
            "It was the center of the Roman Empire",
            "It was the birthplace of the Renaissance",
            "Mussolini ruled as dictator from 1922 to 1943",
            "It became a republic after a 1946 referendum",
            "It was a founding member of the European Union",
            "It has won the FIFA World Cup 4 times",
            "Vatican City is an independent state within its capital"
        ]
    },
    {
        answer: "TURKEY",
        clues: [
            "This country was the center of the Ottoman Empire",
            "Constantinople fell to the Ottomans in 1453",
            "It became a republic in 1923 under Mustafa Kemal Atatürk",
            "It switched from Arabic to Latin alphabet in 1928",
            "It banned the fez and promoted Western dress",
            "It adopted secularism in its constitution",
            "Istanbul bridges Europe and Asia across the Bosphorus",
            "It has been an EU candidate country since 1999"
        ]
    },
    {
        answer: "ISRAEL",
        clues: [
            "This country declared independence in 1948",
            "It's mentioned in the Bible as the Promised Land",
            "It was ruled by Romans, Byzantines, Arabs, Crusaders, and Ottomans",
            "It was under British mandate from 1920 to 1948",
            "The Balfour Declaration in 1917 supported a Jewish homeland",
            "It fought multiple wars with neighboring Arab states",
            "It signed peace treaties with Egypt in 1979 and Jordan in 1994",
            "Jerusalem is its declared capital"
        ]
    },
    {
        answer: "CANADA",
        clues: [
            "This country gained independence from Britain in 1867",
            "It was originally inhabited by Indigenous peoples",
            "It was a French colony called New France until 1763",
            "It was conquered by Britain in the Seven Years' War",
            "It became a self-governing dominion in 1867",
            "It fought as an independent nation in World War I",
            "It patriated its constitution from Britain in 1982",
            "Its flag with the maple leaf was adopted in 1965"
        ]
    },
    {
        answer: "GERMANY",
        clues: [
            "This country was unified in 1871",
            "It was divided after World War II from 1945 to 1990",
            "The Berlin Wall fell in 1989",
            "It reunified in 1990",
            "It was a founding member of the European Union",
            "It adopted the Euro in 1999",
            "It was divided into occupation zones after WWII",
            "Its capital moved from Bonn to Berlin in 1999"
        ]
    },
    {
        answer: "SOUTH KOREA",
        clues: [
            "This country was founded in 1948",
            "It has a history dating back to Gojoseon in 2333 BCE",
            "It was annexed by Japan from 1910 to 1945",
            "It was divided after World War II",
            "The Korean War lasted from 1950 to 1953",
            "It had rapid economic growth called the Miracle on the Han River",
            "It hosted the 1988 Summer Olympics",
            "It's a global leader in technology and pop culture"
        ]
    },
    {
        answer: "GREECE",
        clues: [
            "This country is considered the cradle of Western civilization",
            "It was the birthplace of democracy in Athens",
            "Alexander the Great created an empire from here",
            "It was part of the Roman and Byzantine Empires",
            "It was under Ottoman rule for nearly 400 years",
            "It gained independence from the Ottomans in 1830",
            "It adopted the Euro in 2001",
            "The Olympic Games originated here in ancient times"
        ]
    },
    {
        answer: "ETHIOPIA",
        clues: [
            "This country was never colonized, except for brief Italian occupation",
            "It has one of the world's oldest monarchies",
            "It adopted Christianity in the 4th century",
            "It defeated Italy at the Battle of Adwa in 1896",
            "It was occupied by Italy from 1936 to 1941",
            "Emperor Haile Selassie ruled from 1930 to 1974",
            "It became a socialist state from 1974 to 1991",
            "It adopted its current constitution in 1995"
        ]
    },
    {
        answer: "NEW ZEALAND",
        clues: [
            "This country became a British colony with the Treaty of Waitangi in 1840",
            "It was the first country to give women the vote in 1893",
            "It became a dominion in 1907",
            "ANZAC forces from here fought at Gallipoli in World War I",
            "It gained full independence with the Statute of Westminster in 1947",
            "It declared itself nuclear-free in 1987",
            "It adopted the MMP electoral system in 1996",
            "It has two national anthems of equal standing"
        ]
    },
    {
        answer: "IRELAND",
        clues: [
            "This country gained independence from Britain in 1922",
            "It experienced the Great Famine from 1845 to 1849",
            "It had the Easter Rising against British rule in 1916",
            "It was neutral during World War II",
            "It joined the European Economic Community in 1973",
            "It adopted the Euro in 1999",
            "It had a period of rapid economic growth called the Celtic Tiger",
            "It was the first country to legalize same-sex marriage by popular vote"
        ]
    }
];
