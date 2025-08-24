// Comprehensive country data with coordinates, land borders, maritime borders, and population
// Updated to include all UN member states with complete maritime border information
const countries = [
    {
        name: 'Afghanistan',
        latitude: 33.9391,
        longitude: 67.7100,
        borders: ['Iran', 'Pakistan', 'Turkmenistan', 'Uzbekistan', 'Tajikistan', 'China'],
        maritime_borders: [],
        population: 38928000
    },
    {
        name: 'Albania',
        latitude: 41.1533,
        longitude: 20.1683,
        borders: ['Montenegro', 'Kosovo', 'North Macedonia', 'Greece'],
        maritime_borders: ['Italy'],
        population: 2877000
    },
    {
        name: 'Algeria',
        latitude: 28.0339,
        longitude: 1.6596,
        borders: ['Tunisia', 'Libya', 'Niger', 'Mali', 'Mauritania', 'Western Sahara', 'Morocco'],
        maritime_borders: ['Spain', 'Italy'],
        population: 43851000
    },
    {
        name: 'Andorra',
        latitude: 42.5063,
        longitude: 1.5218,
        borders: ['France', 'Spain'],
        maritime_borders: [],
        population: 77000
    },
    {
        name: 'Angola',
        latitude: -11.2027,
        longitude: 17.8739,
        borders: ['Namibia', 'Zambia', 'Democratic Republic of the Congo'],
        maritime_borders: [],
        population: 32866000
    },
    {
        name: 'Antigua and Barbuda',
        latitude: 17.0608,
        longitude: -61.7964,
        borders: [],
        maritime_borders: ['Saint Kitts and Nevis', 'Dominica', 'Guadeloupe', 'Montserrat'],
        population: 98000
    },
    {
        name: 'Argentina',
        latitude: -38.4161,
        longitude: -63.6167,
        borders: ['Chile', 'Bolivia', 'Paraguay', 'Brazil', 'Uruguay'],
        maritime_borders: ['United Kingdom'],
        population: 45195000
    },
    {
        name: 'Armenia',
        latitude: 40.0691,
        longitude: 45.0382,
        borders: ['Georgia', 'Turkey', 'Azerbaijan', 'Iran'],
        maritime_borders: [],
        population: 2963000
    },
    {
        name: 'Australia',
        latitude: -25.2744,
        longitude: 133.7751,
        borders: [],
        maritime_borders: ['East Timor', 'Indonesia', 'New Zealand', 'Papua New Guinea', 'Solomon Islands', 'New Caledonia', 'Vanuatu'],
        population: 25500000
    },
    {
        name: 'Austria',
        latitude: 47.5162,
        longitude: 14.5501,
        borders: ['Germany', 'Czech Republic', 'Slovakia', 'Hungary', 'Slovenia', 'Italy', 'Switzerland', 'Liechtenstein'],
        maritime_borders: [],
        population: 9006000
    },
    {
        name: 'Azerbaijan',
        latitude: 40.1431,
        longitude: 47.5769,
        borders: ['Russia', 'Georgia', 'Armenia', 'Iran'],
        maritime_borders: ['Kazakhstan', 'Turkmenistan'],
        population: 10139000
    },
    {
        name: 'Bahamas',
        latitude: 25.0343,
        longitude: -77.3963,
        borders: [],
        maritime_borders: ['United States', 'Cuba', 'Haiti', 'Turks and Caicos Islands'],
        population: 393000
    },
    {
        name: 'Bahrain',
        latitude: 26.0667,
        longitude: 50.5577,
        borders: [],
        maritime_borders: ['Saudi Arabia', 'Qatar', 'Iran'],
        population: 1701000
    },
    {
        name: 'Bangladesh',
        latitude: 23.6850,
        longitude: 90.3563,
        borders: ['India', 'Myanmar'],
        maritime_borders: ['India', 'Myanmar'],
        population: 164689000
    },
    {
        name: 'Barbados',
        latitude: 13.1939,
        longitude: -59.5432,
        borders: [],
        maritime_borders: ['Saint Lucia', 'Saint Vincent and the Grenadines', 'Grenada', 'Trinidad and Tobago'],
        population: 287000
    },
    {
        name: 'Belarus',
        latitude: 53.7098,
        longitude: 27.9534,
        borders: ['Russia', 'Ukraine', 'Poland', 'Lithuania', 'Latvia'],
        maritime_borders: [],
        population: 9449000
    },
    {
        name: 'Belgium',
        latitude: 50.5039,
        longitude: 4.4699,
        borders: ['France', 'Germany', 'Luxembourg', 'Netherlands'],
        maritime_borders: ['United Kingdom'],
        population: 11589000
    },
    {
        name: 'Belize',
        latitude: 17.1899,
        longitude: -88.4976,
        borders: ['Mexico', 'Guatemala'],
        maritime_borders: ['Honduras', 'Guatemala'],
        population: 397000
    },
    {
        name: 'Benin',
        latitude: 9.3077,
        longitude: 2.3158,
        borders: ['Burkina Faso', 'Niger', 'Nigeria', 'Togo'],
        maritime_borders: [],
        population: 12123000
    },
    {
        name: 'Bhutan',
        latitude: 27.5142,
        longitude: 90.4336,
        borders: ['China', 'India'],
        maritime_borders: [],
        population: 771000
    },
    {
        name: 'Bolivia',
        latitude: -16.2902,
        longitude: -63.5887,
        borders: ['Peru', 'Brazil', 'Paraguay', 'Argentina', 'Chile'],
        maritime_borders: [],
        population: 11673000
    },
    {
        name: 'Bosnia and Herzegovina',
        latitude: 43.9159,
        longitude: 17.6791,
        borders: ['Croatia', 'Serbia', 'Montenegro'],
        maritime_borders: [],
        population: 3280000
    },
    {
        name: 'Botswana',
        latitude: -22.3285,
        longitude: 24.6849,
        borders: ['South Africa', 'Namibia', 'Zimbabwe'],
        maritime_borders: [],
        population: 2351000
    },
    {
        name: 'Brazil',
        latitude: -14.2350,
        longitude: -51.9253,
        borders: ['France', 'Suriname', 'Guyana', 'Venezuela', 'Colombia', 'Peru', 'Bolivia', 'Paraguay', 'Argentina', 'Uruguay'],
        maritime_borders: [],
        population: 212559000
    },
    {
        name: 'Brunei',
        latitude: 4.5353,
        longitude: 114.7277,
        borders: ['Malaysia'],
        maritime_borders: ['Malaysia', 'Philippines', 'Vietnam'],
        population: 437000
    },
    {
        name: 'Bulgaria',
        latitude: 42.7339,
        longitude: 25.4858,
        borders: ['Romania', 'Serbia', 'North Macedonia', 'Greece', 'Turkey'],
        maritime_borders: ['Turkey', 'Romania', 'Ukraine'],
        population: 6948000
    },
    {
        name: 'Burkina Faso',
        latitude: 12.2383,
        longitude: -1.5616,
        borders: ['Mali', 'Niger', 'Benin', 'Togo', 'Ghana', 'Côte d\'Ivoire'],
        maritime_borders: [],
        population: 20903000
    },
    {
        name: 'Burundi',
        latitude: -3.3731,
        longitude: 29.9189,
        borders: ['Rwanda', 'Democratic Republic of the Congo', 'Tanzania'],
        maritime_borders: [],
        population: 11890000
    },
    {
        name: 'Cabo Verde',
        latitude: 16.5388,
        longitude: -24.0132,
        borders: [],
        maritime_borders: ['Senegal', 'Mauritania', 'Gambia'],
        population: 556000
    },
    {
        name: 'Cambodia',
        latitude: 12.5657,
        longitude: 104.9910,
        borders: ['Thailand', 'Laos', 'Vietnam'],
        maritime_borders: ['Thailand', 'Vietnam'],
        population: 16719000
    },
    {
        name: 'Cameroon',
        latitude: 7.3697,
        longitude: 12.3547,
        borders: ['Nigeria', 'Chad', 'Central African Republic', 'Republic of the Congo', 'Gabon', 'Equatorial Guinea'],
        maritime_borders: ['Equatorial Guinea', 'São Tomé and Príncipe'],
        population: 26546000
    },
    {
        name: 'Canada',
        latitude: 56.1304,
        longitude: -106.3468,
        borders: ['United States', 'Denmark'],
        maritime_borders: ['United States', 'Denmark', 'France'],
        population: 38000000
    },
    {
        name: 'Central African Republic',
        latitude: 6.6111,
        longitude: 20.9394,
        borders: ['Chad', 'Sudan', 'South Sudan', 'Democratic Republic of the Congo', 'Republic of the Congo', 'Cameroon'],
        maritime_borders: [],
        population: 4830000
    },
    {
        name: 'Chad',
        latitude: 15.4542,
        longitude: 18.7322,
        borders: ['Libya', 'Sudan', 'Central African Republic', 'Cameroon', 'Nigeria', 'Niger'],
        maritime_borders: [],
        population: 16425000
    },
    {
        name: 'Chile',
        latitude: -35.6751,
        longitude: -71.5430,
        borders: ['Peru', 'Bolivia', 'Argentina'],
        maritime_borders: ['Peru'],
        population: 19116000
    },
    {
        name: 'China',
        latitude: 35.8617,
        longitude: 104.1954,
        borders: ['North Korea', 'Russia', 'Mongolia', 'Kazakhstan', 'Kyrgyzstan', 'Tajikistan', 'Afghanistan', 'Pakistan', 'India', 'Nepal', 'Bhutan', 'Myanmar', 'Laos', 'Vietnam'],
        maritime_borders: ['South Korea', 'Japan', 'Philippines', 'Malaysia', 'Brunei', 'Indonesia', 'Vietnam'],
        population: 1439323776
    },
    {
        name: 'Colombia',
        latitude: 4.5709,
        longitude: -74.2973,
        borders: ['Panama', 'Venezuela', 'Brazil', 'Peru', 'Ecuador'],
        maritime_borders: ['Panama', 'Costa Rica', 'Nicaragua', 'Honduras', 'Jamaica', 'Haiti', 'Dominican Republic', 'Venezuela'],
        population: 50882000
    },
    {
        name: 'Comoros',
        latitude: -11.6455,
        longitude: 43.3333,
        borders: [],
        maritime_borders: ['Madagascar', 'Mozambique', 'Tanzania', 'Seychelles', 'Mayotte'],
        population: 870000
    },
    {
        name: 'Republic of the Congo',
        latitude: -0.2280,
        longitude: 15.8277,
        borders: ['Cameroon', 'Central African Republic', 'Democratic Republic of the Congo', 'Angola', 'Gabon'],
        maritime_borders: [],
        population: 5518000
    },
    {
        name: 'Democratic Republic of the Congo',
        latitude: -4.0383,
        longitude: 21.7587,
        borders: ['Central African Republic', 'South Sudan', 'Uganda', 'Rwanda', 'Burundi', 'Tanzania', 'Zambia', 'Angola', 'Republic of the Congo'],
        maritime_borders: [],
        population: 89561000
    },
    {
        name: 'Costa Rica',
        latitude: 9.7489,
        longitude: -83.7534,
        borders: ['Nicaragua', 'Panama'],
        maritime_borders: ['Nicaragua', 'Panama', 'Colombia', 'Ecuador'],
        population: 5094000
    },
    {
        name: 'Côte d\'Ivoire',
        latitude: 7.5400,
        longitude: -5.5471,
        borders: ['Liberia', 'Guinea', 'Mali', 'Burkina Faso', 'Ghana'],
        maritime_borders: [],
        population: 26378000
    },
    {
        name: 'Croatia',
        latitude: 45.1000,
        longitude: 15.2000,
        borders: ['Slovenia', 'Hungary', 'Serbia', 'Bosnia and Herzegovina', 'Montenegro'],
        maritime_borders: ['Italy', 'Slovenia'],
        population: 4105000
    },
    {
        name: 'Cuba',
        latitude: 21.5218,
        longitude: -77.7812,
        borders: [],
        maritime_borders: ['United States', 'Bahamas', 'Jamaica', 'Haiti', 'Mexico'],
        population: 11327000
    },
    {
        name: 'Cyprus',
        latitude: 35.1264,
        longitude: 33.4299,
        borders: [],
        maritime_borders: ['Turkey', 'Syria', 'Lebanon', 'Israel', 'Egypt', 'Greece'],
        population: 1207000
    },
    {
        name: 'Czech Republic',
        latitude: 49.8175,
        longitude: 15.4730,
        borders: ['Germany', 'Austria', 'Slovakia', 'Poland'],
        maritime_borders: [],
        population: 10709000
    },
    {
        name: 'Denmark',
        latitude: 56.2639,
        longitude: 9.5018,
        borders: ['Germany', 'Canada'],
        maritime_borders: ['Sweden', 'Norway', 'United Kingdom', 'Netherlands', 'Poland'],
        population: 5792000
    },
    {
        name: 'Djibouti',
        latitude: 11.8251,
        longitude: 42.5903,
        borders: ['Eritrea', 'Ethiopia', 'Somalia'],
        maritime_borders: ['Yemen', 'Eritrea'],
        population: 988000
    },
    {
        name: 'Dominica',
        latitude: 15.4150,
        longitude: -61.3710,
        borders: [],
        maritime_borders: ['Guadeloupe', 'Martinique', 'Saint Lucia', 'Antigua and Barbuda'],
        population: 72000
    },
    {
        name: 'Dominican Republic',
        latitude: 18.7357,
        longitude: -70.1627,
        borders: ['Haiti'],
        maritime_borders: ['Puerto Rico', 'Venezuela', 'Colombia', 'Turks and Caicos Islands'],
        population: 10848000
    },
    {
        name: 'Ecuador',
        latitude: -1.8312,
        longitude: -78.1834,
        borders: ['Colombia', 'Peru'],
        maritime_borders: ['Costa Rica', 'Panama', 'Colombia'],
        population: 17643000
    },
    {
        name: 'Egypt',
        latitude: 26.0975,
        longitude: 30.0444,
        borders: ['Libya', 'Sudan', 'Israel'],
        maritime_borders: ['Saudi Arabia', 'Jordan', 'Israel', 'Cyprus', 'Greece'],
        population: 102334000
    },
    {
        name: 'El Salvador',
        latitude: 13.7942,
        longitude: -88.8965,
        borders: ['Guatemala', 'Honduras'],
        maritime_borders: ['Honduras', 'Nicaragua'],
        population: 6486000
    },
    {
        name: 'Equatorial Guinea',
        latitude: 1.6508,
        longitude: 10.2679,
        borders: ['Cameroon', 'Gabon'],
        maritime_borders: ['Nigeria', 'Cameroon', 'São Tomé and Príncipe'],
        population: 1403000
    },
    {
        name: 'Eritrea',
        latitude: 15.1794,
        longitude: 39.7823,
        borders: ['Sudan', 'Ethiopia', 'Djibouti'],
        maritime_borders: ['Saudi Arabia', 'Yemen', 'Djibouti'],
        population: 3546000
    },
    {
        name: 'Estonia',
        latitude: 58.5953,
        longitude: 25.0136,
        borders: ['Russia', 'Latvia'],
        maritime_borders: ['Finland', 'Sweden'],
        population: 1327000
    },
    {
        name: 'Eswatini',
        latitude: -26.5225,
        longitude: 31.4659,
        borders: ['South Africa', 'Mozambique'],
        maritime_borders: [],
        population: 1160000
    },
    {
        name: 'Ethiopia',
        latitude: 9.1450,
        longitude: 40.4897,
        borders: ['Eritrea', 'Djibouti', 'Somalia', 'Kenya', 'South Sudan', 'Sudan'],
        maritime_borders: [],
        population: 115000000
    },
    {
        name: 'Fiji',
        latitude: -16.7784,
        longitude: 179.4144,
        borders: [],
        maritime_borders: ['Vanuatu', 'New Caledonia', 'Tonga', 'Wallis and Futuna', 'Tuvalu', 'Solomon Islands'],
        population: 896000
    },
    {
        name: 'Finland',
        latitude: 61.9241,
        longitude: 25.7482,
        borders: ['Sweden', 'Norway', 'Russia'],
        maritime_borders: ['Estonia', 'Sweden'],
        population: 5541000
    },
    {
        name: 'France',
        latitude: 46.2276,
        longitude: 2.2137,
        borders: ['Spain', 'Brazil', 'Belgium', 'Luxembourg', 'Germany', 'Switzerland', 'Italy', 'Monaco', 'Andorra'],
        maritime_borders: ['United Kingdom', 'Belgium', 'Italy', 'Spain', 'Canada', 'Saint Pierre and Miquelon', 'Barbados', 'Dominica', 'Saint Lucia', 'Martinique', 'Saint Vincent and the Grenadines', 'Trinidad and Tobago', 'Venezuela', 'Suriname', 'Australia', 'Vanuatu'],
        population: 65274000
    },
    {
        name: 'Gabon',
        latitude: -0.8037,
        longitude: 11.6094,
        borders: ['Equatorial Guinea', 'Cameroon', 'Republic of the Congo'],
        maritime_borders: ['São Tomé and Príncipe', 'Equatorial Guinea'],
        population: 2225000
    },
    {
        name: 'Gambia',
        latitude: 13.4432,
        longitude: -15.3101,
        borders: ['Senegal'],
        maritime_borders: ['Cabo Verde', 'Senegal'],
        population: 2417000
    },
    {
        name: 'Georgia',
        latitude: 42.3154,
        longitude: 43.3569,
        borders: ['Russia', 'Turkey', 'Armenia', 'Azerbaijan'],
        maritime_borders: ['Turkey', 'Russia'],
        population: 3989000
    },
    {
        name: 'Germany',
        latitude: 51.1657,
        longitude: 10.4515,
        borders: ['Denmark', 'Poland', 'Czech Republic', 'Austria', 'Switzerland', 'France', 'Luxembourg', 'Belgium', 'Netherlands'],
        maritime_borders: ['Denmark', 'Netherlands', 'United Kingdom', 'Sweden', 'Poland'],
        population: 83784000
    },
    {
        name: 'Ghana',
        latitude: 7.9465,
        longitude: -1.0232,
        borders: ['Côte d\'Ivoire', 'Burkina Faso', 'Togo'],
        maritime_borders: [],
        population: 31073000
    },
    {
        name: 'Greece',
        latitude: 39.0742,
        longitude: 21.8243,
        borders: ['Albania', 'North Macedonia', 'Bulgaria', 'Turkey'],
        maritime_borders: ['Italy', 'Malta', 'Cyprus', 'Turkey', 'Egypt', 'Libya'],
        population: 10423000
    },
    {
        name: 'Grenada',
        latitude: 12.1165,
        longitude: -61.6790,
        borders: [],
        maritime_borders: ['Saint Vincent and the Grenadines', 'Trinidad and Tobago', 'Venezuela'],
        population: 113000
    },
    {
        name: 'Guatemala',
        latitude: 15.7835,
        longitude: -90.2308,
        borders: ['Mexico', 'Belize', 'El Salvador', 'Honduras'],
        maritime_borders: ['Belize', 'Honduras'],
        population: 17916000
    },
    {
        name: 'Guinea',
        latitude: 9.9456,
        longitude: -9.6966,
        borders: ['Guinea-Bissau', 'Senegal', 'Mali', 'Côte d\'Ivoire', 'Liberia', 'Sierra Leone'],
        maritime_borders: [],
        population: 13133000
    },
    {
        name: 'Guinea-Bissau',
        latitude: 11.8037,
        longitude: -15.1804,
        borders: ['Senegal', 'Guinea'],
        maritime_borders: ['Senegal', 'Cabo Verde'],
        population: 1968000
    },
    {
        name: 'Guyana',
        latitude: 4.8604,
        longitude: -58.9302,
        borders: ['Venezuela', 'Brazil', 'Suriname'],
        maritime_borders: ['Suriname', 'Trinidad and Tobago'],
        population: 787000
    },
    {
        name: 'Haiti',
        latitude: 18.9712,
        longitude: -72.2852,
        borders: ['Dominican Republic'],
        maritime_borders: ['Cuba', 'Jamaica', 'Bahamas', 'Turks and Caicos Islands', 'Colombia'],
        population: 11403000
    },
    {
        name: 'Honduras',
        latitude: 15.2000,
        longitude: -86.2419,
        borders: ['Guatemala', 'El Salvador', 'Nicaragua'],
        maritime_borders: ['Belize', 'Guatemala', 'El Salvador', 'Nicaragua', 'Colombia', 'Jamaica'],
        population: 9905000
    },
    {
        name: 'Hungary',
        latitude: 47.1625,
        longitude: 19.5033,
        borders: ['Slovakia', 'Ukraine', 'Romania', 'Serbia', 'Croatia', 'Slovenia', 'Austria'],
        maritime_borders: [],
        population: 9660000
    },
    {
        name: 'Iceland',
        latitude: 64.9631,
        longitude: -19.0208,
        borders: [],
        maritime_borders: ['Denmark', 'Norway', 'United Kingdom'],
        population: 341000
    },
    {
        name: 'India',
        latitude: 20.5937,
        longitude: 78.9629,
        borders: ['Pakistan', 'China', 'Nepal', 'Bhutan', 'Bangladesh', 'Myanmar'],
        maritime_borders: ['Pakistan', 'Maldives', 'Sri Lanka', 'Bangladesh', 'Myanmar', 'Thailand', 'Indonesia'],
        population: 1380004385
    },
    {
        name: 'Indonesia',
        latitude: -0.7893,
        longitude: 113.9213,
        borders: ['Papua New Guinea', 'East Timor', 'Malaysia'],
        maritime_borders: ['Malaysia', 'Singapore', 'Vietnam', 'Thailand', 'India', 'Australia', 'East Timor', 'Philippines'],
        population: 273524000
    },
    {
        name: 'Iran',
        latitude: 32.4279,
        longitude: 53.6880,
        borders: ['Iraq', 'Turkey', 'Armenia', 'Azerbaijan', 'Turkmenistan', 'Afghanistan', 'Pakistan'],
        maritime_borders: ['Kuwait', 'Saudi Arabia', 'Bahrain', 'Qatar', 'United Arab Emirates', 'Oman'],
        population: 83993000
    },
    {
        name: 'Iraq',
        latitude: 33.2232,
        longitude: 43.6793,
        borders: ['Turkey', 'Iran', 'Kuwait', 'Saudi Arabia', 'Jordan', 'Syria'],
        maritime_borders: ['Kuwait', 'Iran'],
        population: 40223000
    },
    {
        name: 'Ireland',
        latitude: 53.4129,
        longitude: -8.2439,
        borders: ['United Kingdom'],
        maritime_borders: ['United Kingdom'],
        population: 4938000
    },
    {
        name: 'Israel',
        latitude: 31.0461,
        longitude: 34.8516,
        borders: ['Lebanon', 'Syria', 'Jordan', 'Egypt'],
        maritime_borders: ['Cyprus', 'Lebanon', 'Egypt'],
        population: 8656000
    },
    {
        name: 'Italy',
        latitude: 41.8719,
        longitude: 12.5674,
        borders: ['France', 'Switzerland', 'Austria', 'Slovenia', 'Vatican City', 'San Marino'],
        maritime_borders: ['Spain', 'France', 'Monaco', 'Slovenia', 'Croatia', 'Montenegro', 'Albania', 'Tunisia', 'Libya', 'Malta', 'Greece'],
        population: 60461000
    },
    {
        name: 'Jamaica',
        latitude: 18.1096,
        longitude: -77.2975,
        borders: [],
        maritime_borders: ['Cuba', 'Haiti', 'Colombia', 'Honduras', 'Nicaragua', 'Costa Rica'],
        population: 2961000
    },
    {
        name: 'Japan',
        latitude: 36.2048,
        longitude: 138.2529,
        borders: [],
        maritime_borders: ['South Korea', 'North Korea', 'Russia', 'China', 'Taiwan', 'Philippines'],
        population: 126476000
    },
    {
        name: 'Jordan',
        latitude: 30.5852,
        longitude: 36.2384,
        borders: ['Syria', 'Iraq', 'Saudi Arabia', 'Israel'],
        maritime_borders: ['Egypt', 'Saudi Arabia', 'Israel'],
        population: 10203000
    },
    {
        name: 'Kazakhstan',
        latitude: 48.0196,
        longitude: 66.9237,
        borders: ['Russia', 'China', 'Kyrgyzstan', 'Uzbekistan', 'Turkmenistan'],
        maritime_borders: ['Azerbaijan', 'Iran', 'Turkmenistan', 'Russia'],
        population: 18777000
    },
    {
        name: 'Kenya',
        latitude: -0.0236,
        longitude: 37.9062,
        borders: ['Ethiopia', 'Somalia', 'Tanzania', 'Uganda', 'South Sudan'],
        maritime_borders: ['Tanzania', 'Somalia'],
        population: 53771000
    },
    {
        name: 'Kiribati',
        latitude: -3.3704,
        longitude: -168.7340,
        borders: [],
        maritime_borders: ['Marshall Islands', 'Nauru', 'Tuvalu', 'Tokelau', 'Cook Islands'],
        population: 119000
    },
    {
        name: 'Kuwait',
        latitude: 29.3117,
        longitude: 47.4818,
        borders: ['Iraq', 'Saudi Arabia'],
        maritime_borders: ['Iran', 'Iraq'],
        population: 4271000
    },
    {
        name: 'Kyrgyzstan',
        latitude: 41.2044,
        longitude: 74.7661,
        borders: ['Kazakhstan', 'Uzbekistan', 'Tajikistan', 'China'],
        maritime_borders: [],
        population: 6524000
    },
    {
        name: 'Laos',
        latitude: 19.8563,
        longitude: 102.4955,
        borders: ['China', 'Vietnam', 'Cambodia', 'Thailand', 'Myanmar'],
        maritime_borders: [],
        population: 7276000
    },
    {
        name: 'Latvia',
        latitude: 56.8796,
        longitude: 24.6032,
        borders: ['Estonia', 'Russia', 'Belarus', 'Lithuania'],
        maritime_borders: ['Sweden', 'Estonia', 'Lithuania'],
        population: 1886000
    },
    {
        name: 'Lebanon',
        latitude: 33.8547,
        longitude: 35.8623,
        borders: ['Syria', 'Israel'],
        maritime_borders: ['Cyprus', 'Israel', 'Syria'],
        population: 6825000
    },
    {
        name: 'Lesotho',
        latitude: -29.6100,
        longitude: 28.2336,
        borders: ['South Africa'],
        maritime_borders: [],
        population: 2142000
    },
    {
        name: 'Liberia',
        latitude: 6.4281,
        longitude: -9.4295,
        borders: ['Guinea', 'Côte d\'Ivoire', 'Sierra Leone'],
        maritime_borders: [],
        population: 5058000
    },
    {
        name: 'Libya',
        latitude: 26.3351,
        longitude: 17.2283,
        borders: ['Tunisia', 'Algeria', 'Niger', 'Chad', 'Sudan', 'Egypt'],
        maritime_borders: ['Malta', 'Tunisia', 'Italy', 'Greece'],
        population: 6871000
    },
    {
        name: 'Liechtenstein',
        latitude: 47.1660,
        longitude: 9.5554,
        borders: ['Austria', 'Switzerland'],
        maritime_borders: [],
        population: 38000
    },
    {
        name: 'Lithuania',
        latitude: 55.1694,
        longitude: 23.8813,
        borders: ['Latvia', 'Belarus', 'Poland', 'Russia'],
        maritime_borders: ['Sweden', 'Latvia', 'Russia'],
        population: 2722000
    },
    {
        name: 'Luxembourg',
        latitude: 49.8153,
        longitude: 6.1296,
        borders: ['Belgium', 'Germany', 'France'],
        maritime_borders: [],
        population: 625000
    },
    {
        name: 'Madagascar',
        latitude: -18.7669,
        longitude: 46.8691,
        borders: [],
        maritime_borders: ['Comoros', 'Mozambique', 'Mauritius', 'Réunion'],
        population: 27691000
    },
    {
        name: 'Malawi',
        latitude: -13.2543,
        longitude: 34.3015,
        borders: ['Zambia', 'Tanzania', 'Mozambique'],
        maritime_borders: [],
        population: 19130000
    },
    {
        name: 'Malaysia',
        latitude: 4.2105,
        longitude: 101.9758,
        borders: ['Thailand', 'Indonesia', 'Brunei'],
        maritime_borders: ['Singapore', 'Vietnam', 'Philippines', 'Indonesia', 'Brunei', 'Thailand'],
        population: 32366000
    },
    {
        name: 'Maldives',
        latitude: 3.2028,
        longitude: 73.2207,
        borders: [],
        maritime_borders: ['India', 'Sri Lanka'],
        population: 540000
    },
    {
        name: 'Mali',
        latitude: 17.5707,
        longitude: -3.9962,
        borders: ['Algeria', 'Niger', 'Burkina Faso', 'Côte d\'Ivoire', 'Guinea', 'Senegal', 'Mauritania'],
        maritime_borders: [],
        population: 20251000
    },
    {
        name: 'Malta',
        latitude: 35.9375,
        longitude: 14.3754,
        borders: [],
        maritime_borders: ['Italy', 'Libya', 'Tunisia'],
        population: 441000
    },
    {
        name: 'Marshall Islands',
        latitude: 7.1315,
        longitude: 171.1845,
        borders: [],
        maritime_borders: ['Federated States of Micronesia', 'Kiribati', 'Nauru', 'Wake Island'],
        population: 59000
    },
    {
        name: 'Mauritania',
        latitude: 21.0079,
        longitude: -10.9408,
        borders: ['Morocco', 'Algeria', 'Mali', 'Senegal'],
        maritime_borders: ['Cabo Verde', 'Senegal'],
        population: 4650000
    },
    {
        name: 'Mauritius',
        latitude: -20.3484,
        longitude: 57.5522,
        borders: [],
        maritime_borders: ['Réunion', 'Madagascar', 'Seychelles'],
        population: 1271000
    },
    {
        name: 'Mexico',
        latitude: 23.6345,
        longitude: -102.5528,
        borders: ['United States', 'Guatemala', 'Belize'],
        maritime_borders: ['United States', 'Cuba', 'Honduras', 'Belize'],
        population: 128933000
    },
    {
        name: 'Micronesia',
        latitude: 7.4256,
        longitude: 150.5508,
        borders: [],
        maritime_borders: ['Marshall Islands', 'Papua New Guinea', 'Palau', 'Nauru'],
        population: 548000
    },
    {
        name: 'Moldova',
        latitude: 47.4116,
        longitude: 28.3699,
        borders: ['Romania', 'Ukraine'],
        maritime_borders: [],
        population: 4034000
    },
    {
        name: 'Monaco',
        latitude: 43.7384,
        longitude: 7.4246,
        borders: ['France'],
        maritime_borders: ['Italy'],
        population: 39000
    },
    {
        name: 'Mongolia',
        latitude: 46.8625,
        longitude: 103.8467,
        borders: ['Russia', 'China'],
        maritime_borders: [],
        population: 3278000
    },
    {
        name: 'Montenegro',
        latitude: 42.7087,
        longitude: 19.3744,
        borders: ['Croatia', 'Bosnia and Herzegovina', 'Serbia', 'Kosovo', 'Albania'],
        maritime_borders: ['Italy', 'Croatia', 'Albania'],
        population: 628000
    },
    {
        name: 'Morocco',
        latitude: 31.7917,
        longitude: -7.0926,
        borders: ['Algeria', 'Western Sahara'],
        maritime_borders: ['Spain', 'Portugal'],
        population: 36911000
    },
    {
        name: 'Mozambique',
        latitude: -18.6657,
        longitude: 35.5296,
        borders: ['Tanzania', 'Malawi', 'Zambia', 'Zimbabwe', 'Eswatini', 'South Africa'],
        maritime_borders: ['Tanzania', 'Comoros', 'Madagascar', 'South Africa'],
        population: 31255000
    },
    {
        name: 'Myanmar',
        latitude: 21.9162,
        longitude: 95.9560,
        borders: ['China', 'Laos', 'Thailand', 'Bangladesh', 'India'],
        maritime_borders: ['Thailand', 'India', 'Bangladesh'],
        population: 54410000
    },
    {
        name: 'Namibia',
        latitude: -22.9576,
        longitude: 18.4904,
        borders: ['Angola', 'Zambia', 'Botswana', 'South Africa'],
        maritime_borders: ['South Africa'],
        population: 2541000
    },
    {
        name: 'Nauru',
        latitude: -0.5228,
        longitude: 166.9315,
        borders: [],
        maritime_borders: ['Kiribati', 'Marshall Islands', 'Federated States of Micronesia'],
        population: 11000
    },
    {
        name: 'Nepal',
        latitude: 28.3949,
        longitude: 84.1240,
        borders: ['China', 'India'],
        maritime_borders: [],
        population: 29137000
    },
    {
        name: 'Netherlands',
        latitude: 52.1326,
        longitude: 5.2913,
        borders: ['Germany', 'Belgium'],
        maritime_borders: ['United Kingdom', 'Germany', 'Belgium', 'Denmark'],
        population: 17134000
    },
    {
        name: 'New Zealand',
        latitude: -40.9006,
        longitude: 174.8860,
        borders: [],
        maritime_borders: ['Australia', 'Tonga', 'Fiji', 'New Caledonia', 'Cook Islands'],
        population: 4822000
    },
    {
        name: 'Nicaragua',
        latitude: 12.8654,
        longitude: -85.2072,
        borders: ['Honduras', 'Costa Rica'],
        maritime_borders: ['Honduras', 'El Salvador', 'Costa Rica', 'Colombia', 'Jamaica'],
        population: 6625000
    },
    {
        name: 'Niger',
        latitude: 17.6078,
        longitude: 8.0817,
        borders: ['Libya', 'Chad', 'Nigeria', 'Benin', 'Burkina Faso', 'Mali', 'Algeria'],
        maritime_borders: [],
        population: 24207000
    },
    {
        name: 'Nigeria',
        latitude: 9.0820,
        longitude: 8.6753,
        borders: ['Niger', 'Chad', 'Cameroon', 'Benin'],
        maritime_borders: ['Equatorial Guinea', 'São Tomé and Príncipe'],
        population: 206140000
    },
    {
        name: 'North Korea',
        latitude: 40.3399,
        longitude: 127.5101,
        borders: ['China', 'South Korea', 'Russia'],
        maritime_borders: ['South Korea', 'Japan'],
        population: 25778000
    },
    {
        name: 'North Macedonia',
        latitude: 41.6086,
        longitude: 21.7453,
        borders: ['Kosovo', 'Serbia', 'Bulgaria', 'Greece', 'Albania'],
        maritime_borders: [],
        population: 2083000
    },
    {
        name: 'Norway',
        latitude: 60.4720,
        longitude: 8.4689,
        borders: ['Finland', 'Sweden', 'Russia'],
        maritime_borders: ['Denmark', 'United Kingdom', 'Iceland', 'Sweden'],
        population: 5421000
    },
    {
        name: 'Oman',
        latitude: 21.4735,
        longitude: 55.9754,
        borders: ['United Arab Emirates', 'Saudi Arabia', 'Yemen'],
        maritime_borders: ['Iran', 'Pakistan', 'Yemen'],
        population: 5107000
    },
    {
        name: 'Pakistan',
        latitude: 30.3753,
        longitude: 69.3451,
        borders: ['Iran', 'Afghanistan', 'China', 'India'],
        maritime_borders: ['Iran', 'Oman', 'India'],
        population: 220892000
    },
    {
        name: 'Palau',
        latitude: 7.5150,
        longitude: 134.5825,
        borders: [],
        maritime_borders: ['Philippines', 'Federated States of Micronesia'],
        population: 18000
    },
    {
        name: 'Palestine',
        latitude: 31.9522,
        longitude: 35.2332,
        borders: ['Israel', 'Jordan'],
        maritime_borders: [],
        population: 5101000
    },
    {
        name: 'Panama',
        latitude: 8.5380,
        longitude: -80.7821,
        borders: ['Costa Rica', 'Colombia'],
        maritime_borders: ['Costa Rica', 'Colombia', 'Ecuador'],
        population: 4315000
    },
    {
        name: 'Papua New Guinea',
        latitude: -6.3150,
        longitude: 143.9555,
        borders: ['Indonesia'],
        maritime_borders: ['Indonesia', 'Australia', 'Solomon Islands', 'Federated States of Micronesia'],
        population: 8947000
    },
    {
        name: 'Paraguay',
        latitude: -23.4425,
        longitude: -58.4438,
        borders: ['Bolivia', 'Brazil', 'Argentina'],
        maritime_borders: [],
        population: 7133000
    },
    {
        name: 'Peru',
        latitude: -9.1900,
        longitude: -75.0152,
        borders: ['Ecuador', 'Colombia', 'Brazil', 'Bolivia', 'Chile'],
        maritime_borders: ['Chile', 'Ecuador'],
        population: 32971000
    },
    {
        name: 'Philippines',
        latitude: 12.8797,
        longitude: 121.7740,
        borders: [],
        maritime_borders: ['Taiwan', 'China', 'Vietnam', 'Malaysia', 'Indonesia', 'Palau', 'Japan'],
        population: 109581000
    },
    {
        name: 'Poland',
        latitude: 51.9194,
        longitude: 19.1451,
        borders: ['Germany', 'Czech Republic', 'Slovakia', 'Ukraine', 'Belarus', 'Lithuania', 'Russia'],
        maritime_borders: ['Denmark', 'Sweden', 'Germany'],
        population: 37847000
    },
    {
        name: 'Portugal',
        latitude: 39.3999,
        longitude: -8.2245,
        borders: ['Spain'],
        maritime_borders: ['Spain', 'Morocco'],
        population: 10197000
    },
    {
        name: 'Qatar',
        latitude: 25.3548,
        longitude: 51.1839,
        borders: ['Saudi Arabia'],
        maritime_borders: ['Bahrain', 'Iran', 'United Arab Emirates'],
        population: 2881000
    },
    {
        name: 'Romania',
        latitude: 45.9432,
        longitude: 24.9668,
        borders: ['Ukraine', 'Moldova', 'Bulgaria', 'Serbia', 'Hungary'],
        maritime_borders: ['Bulgaria', 'Turkey', 'Ukraine'],
        population: 19238000
    },
    {
        name: 'Russia',
        latitude: 61.5240,
        longitude: 105.3188,
        borders: ['Norway', 'Finland', 'Estonia', 'Latvia', 'Lithuania', 'Poland', 'Belarus', 'Ukraine', 'Georgia', 'Azerbaijan', 'Kazakhstan', 'Mongolia', 'China', 'North Korea'],
        maritime_borders: ['United States', 'Japan', 'Norway', 'Sweden', 'Finland', 'Estonia', 'Latvia', 'Lithuania', 'Poland', 'Ukraine', 'Georgia', 'Turkey', 'Azerbaijan', 'Kazakhstan', 'Turkmenistan'],
        population: 145934000
    },
    {
        name: 'Rwanda',
        latitude: -1.9403,
        longitude: 29.8739,
        borders: ['Uganda', 'Tanzania', 'Burundi', 'Democratic Republic of the Congo'],
        maritime_borders: [],
        population: 12952000
    },
    {
        name: 'Saint Kitts and Nevis',
        latitude: 17.3578,
        longitude: -62.7830,
        borders: [],
        maritime_borders: ['Antigua and Barbuda', 'Montserrat', 'Guadeloupe'],
        population: 53000
    },
    {
        name: 'Saint Lucia',
        latitude: 13.9094,
        longitude: -60.9789,
        borders: [],
        maritime_borders: ['Martinique', 'Saint Vincent and the Grenadines', 'Barbados', 'Dominica'],
        population: 184000
    },
    {
        name: 'Saint Vincent and the Grenadines',
        latitude: 12.9843,
        longitude: -61.2872,
        borders: [],
        maritime_borders: ['Saint Lucia', 'Grenada', 'Barbados', 'Trinidad and Tobago'],
        population: 111000
    },
    {
        name: 'Samoa',
        latitude: -13.7590,
        longitude: -172.1046,
        borders: [],
        maritime_borders: ['American Samoa', 'Tonga', 'Fiji', 'Tokelau'],
        population: 198000
    },
    {
        name: 'San Marino',
        latitude: 43.9424,
        longitude: 12.4578,
        borders: ['Italy'],
        maritime_borders: [],
        population: 34000
    },
    {
        name: 'São Tomé and Príncipe',
        latitude: 0.1864,
        longitude: 6.6131,
        borders: [],
        maritime_borders: ['Equatorial Guinea', 'Gabon', 'Cameroon', 'Nigeria'],
        population: 219000
    },
    {
        name: 'Saudi Arabia',
        latitude: 23.8859,
        longitude: 45.0792,
        borders: ['Jordan', 'Iraq', 'Kuwait', 'Qatar', 'United Arab Emirates', 'Oman', 'Yemen'],
        maritime_borders: ['Iran', 'Bahrain', 'Qatar', 'Egypt', 'Sudan', 'Eritrea', 'Yemen', 'Jordan'],
        population: 34814000
    },
    {
        name: 'Senegal',
        latitude: 14.4974,
        longitude: -14.4524,
        borders: ['Mauritania', 'Mali', 'Guinea', 'Guinea-Bissau', 'Gambia'],
        maritime_borders: ['Cabo Verde', 'Mauritania', 'Guinea-Bissau', 'Gambia'],
        population: 16744000
    },
    {
        name: 'Serbia',
        latitude: 44.0165,
        longitude: 21.0059,
        borders: ['Hungary', 'Romania', 'Bulgaria', 'North Macedonia', 'Kosovo', 'Montenegro', 'Bosnia and Herzegovina', 'Croatia'],
        maritime_borders: [],
        population: 8737000
    },
    {
        name: 'Seychelles',
        latitude: -4.6796,
        longitude: 55.4920,
        borders: [],
        maritime_borders: ['Mauritius', 'Comoros', 'Tanzania', 'Somalia'],
        population: 98000
    },
    {
        name: 'Sierra Leone',
        latitude: 8.4606,
        longitude: -11.7799,
        borders: ['Guinea', 'Liberia'],
        maritime_borders: [],
        population: 7976000
    },
    {
        name: 'Singapore',
        latitude: 1.3521,
        longitude: 103.8198,
        borders: [],
        maritime_borders: ['Malaysia', 'Indonesia'],
        population: 5850000
    },
    {
        name: 'Slovakia',
        latitude: 48.6690,
        longitude: 19.6990,
        borders: ['Czech Republic', 'Austria', 'Hungary', 'Ukraine', 'Poland'],
        maritime_borders: [],
        population: 5460000
    },
    {
        name: 'Slovenia',
        latitude: 46.1512,
        longitude: 14.9955,
        borders: ['Austria', 'Italy', 'Hungary', 'Croatia'],
        maritime_borders: ['Italy', 'Croatia'],
        population: 2078000
    },
    {
        name: 'Solomon Islands',
        latitude: -9.6457,
        longitude: 160.1562,
        borders: [],
        maritime_borders: ['Papua New Guinea', 'Australia', 'Vanuatu', 'New Caledonia', 'Fiji'],
        population: 687000
    },
    {
        name: 'Somalia',
        latitude: 5.1521,
        longitude: 46.1996,
        borders: ['Djibouti', 'Ethiopia', 'Kenya'],
        maritime_borders: ['Yemen', 'Djibouti', 'Kenya', 'Seychelles'],
        population: 15893000
    },
    {
        name: 'South Africa',
        latitude: -30.5595,
        longitude: 22.9375,
        borders: ['Namibia', 'Botswana', 'Zimbabwe', 'Mozambique', 'Eswatini', 'Lesotho'],
        maritime_borders: ['Namibia', 'Mozambique'],
        population: 59308000
    },
    {
        name: 'South Korea',
        latitude: 35.9078,
        longitude: 127.7669,
        borders: ['North Korea'],
        maritime_borders: ['China', 'Japan', 'North Korea'],
        population: 51269000
    },
    {
        name: 'South Sudan',
        latitude: 6.8770,
        longitude: 31.3070,
        borders: ['Sudan', 'Ethiopia', 'Kenya', 'Uganda', 'Democratic Republic of the Congo', 'Central African Republic'],
        maritime_borders: [],
        population: 11194000
    },
    {
        name: 'Spain',
        latitude: 40.4637,
        longitude: -3.7492,
        borders: ['Portugal', 'France', 'Andorra'],
        maritime_borders: ['Morocco', 'Algeria', 'Italy', 'France'],
        population: 46755000
    },
    {
        name: 'Sri Lanka',
        latitude: 7.8731,
        longitude: 80.7718,
        borders: [],
        maritime_borders: ['India', 'Maldives'],
        population: 21413000
    },
    {
        name: 'Sudan',
        latitude: 12.8628,
        longitude: 30.2176,
        borders: ['Egypt', 'Libya', 'Chad', 'Central African Republic', 'South Sudan', 'Ethiopia', 'Eritrea'],
        maritime_borders: ['Saudi Arabia', 'Eritrea'],
        population: 43849000
    },
    {
        name: 'Suriname',
        latitude: 3.9193,
        longitude: -56.0278,
        borders: ['Guyana', 'Brazil', 'French Guiana'],
        maritime_borders: ['Guyana', 'Trinidad and Tobago', 'Barbados'],
        population: 587000
    },
    {
        name: 'Sweden',
        latitude: 60.1282,
        longitude: 18.6435,
        borders: ['Norway', 'Finland'],
        maritime_borders: ['Denmark', 'Germany', 'Poland', 'Russia', 'Lithuania', 'Latvia', 'Estonia', 'Finland'],
        population: 10099000
    },
    {
        name: 'Switzerland',
        latitude: 46.8182,
        longitude: 8.2275,
        borders: ['Germany', 'Austria', 'Liechtenstein', 'Italy', 'France'],
        maritime_borders: [],
        population: 8655000
    },
    {
        name: 'Syria',
        latitude: 34.8021,
        longitude: 38.9968,
        borders: ['Turkey', 'Iraq', 'Jordan', 'Israel', 'Lebanon'],
        maritime_borders: ['Cyprus', 'Turkey', 'Lebanon'],
        population: 17501000
    },
    {
        name: 'Tajikistan',
        latitude: 38.8610,
        longitude: 71.2761,
        borders: ['Kyrgyzstan', 'Uzbekistan', 'Afghanistan', 'China'],
        maritime_borders: [],
        population: 9538000
    },
    {
        name: 'Tanzania',
        latitude: -6.3690,
        longitude: 34.8888,
        borders: ['Kenya', 'Uganda', 'Rwanda', 'Burundi', 'Democratic Republic of the Congo', 'Zambia', 'Malawi', 'Mozambique'],
        maritime_borders: ['Kenya', 'Mozambique', 'Comoros', 'Seychelles'],
        population: 59734000
    },
    {
        name: 'Thailand',
        latitude: 15.8700,
        longitude: 100.9925,
        borders: ['Myanmar', 'Laos', 'Cambodia', 'Malaysia'],
        maritime_borders: ['Vietnam', 'Cambodia', 'Malaysia', 'Myanmar', 'India', 'Indonesia'],
        population: 69800000
    },
    {
        name: 'East Timor',
        latitude: -8.8742,
        longitude: 125.7275,
        borders: ['Indonesia'],
        maritime_borders: ['Indonesia', 'Australia'],
        population: 1318000
    },
    {
        name: 'Togo',
        latitude: 8.6195,
        longitude: 0.8248,
        borders: ['Ghana', 'Burkina Faso', 'Benin'],
        maritime_borders: [],
        population: 8279000
    },
    {
        name: 'Tonga',
        latitude: -21.1789,
        longitude: -175.1982,
        borders: [],
        maritime_borders: ['Fiji', 'Niue', 'Samoa', 'New Zealand'],
        population: 105000
    },
    {
        name: 'Trinidad and Tobago',
        latitude: 10.6918,
        longitude: -61.2225,
        borders: [],
        maritime_borders: ['Venezuela', 'Grenada', 'Saint Vincent and the Grenadines', 'Barbados', 'Guyana', 'Suriname'],
        population: 1399000
    },
    {
        name: 'Tunisia',
        latitude: 33.8869,
        longitude: 9.5375,
        borders: ['Algeria', 'Libya'],
        maritime_borders: ['Italy', 'Malta', 'Libya'],
        population: 11819000
    },
    {
        name: 'Turkey',
        latitude: 38.9637,
        longitude: 35.2433,
        borders: ['Greece', 'Bulgaria', 'Georgia', 'Armenia', 'Azerbaijan', 'Iran', 'Iraq', 'Syria'],
        maritime_borders: ['Romania', 'Bulgaria', 'Ukraine', 'Russia', 'Georgia', 'Cyprus', 'Syria'],
        population: 84339000
    },
    {
        name: 'Turkmenistan',
        latitude: 38.9697,
        longitude: 59.5563,
        borders: ['Kazakhstan', 'Uzbekistan', 'Afghanistan', 'Iran'],
        maritime_borders: ['Azerbaijan', 'Kazakhstan', 'Iran'],
        population: 6032000
    },
    {
        name: 'Tuvalu',
        latitude: -7.1095,
        longitude: 177.6493,
        borders: [],
        maritime_borders: ['Kiribati', 'Fiji'],
        population: 12000
    },
    {
        name: 'Uganda',
        latitude: 1.3733,
        longitude: 32.2903,
        borders: ['South Sudan', 'Kenya', 'Tanzania', 'Rwanda', 'Democratic Republic of the Congo'],
        maritime_borders: [],
        population: 45741000
    },
    {
        name: 'Ukraine',
        latitude: 48.3794,
        longitude: 31.1656,
        borders: ['Belarus', 'Russia', 'Poland', 'Slovakia', 'Hungary', 'Romania', 'Moldova'],
        maritime_borders: ['Russia', 'Turkey', 'Bulgaria', 'Romania'],
        population: 43734000
    },
    {
        name: 'United Arab Emirates',
        latitude: 23.4241,
        longitude: 53.8478,
        borders: ['Saudi Arabia', 'Oman'],
        maritime_borders: ['Iran', 'Qatar', 'Saudi Arabia'],
        population: 9890000
    },
    {
        name: 'United Kingdom',
        latitude: 55.3781,
        longitude: -3.4360,
        borders: ['Ireland'],
        maritime_borders: ['France', 'Belgium', 'Netherlands', 'Germany', 'Denmark', 'Norway', 'Ireland', 'Iceland'],
        population: 67886000
    },
    {
        name: 'United States',
        latitude: 39.8283,
        longitude: -98.5795,
        borders: ['Canada', 'Mexico'],
        maritime_borders: ['Russia', 'Canada', 'Cuba', 'Bahamas', 'Mexico'],
        population: 331002651
    },
    {
        name: 'Uruguay',
        latitude: -32.5228,
        longitude: -55.7658,
        borders: ['Argentina', 'Brazil'],
        maritime_borders: [],
        population: 3473000
    },
    {
        name: 'Uzbekistan',
        latitude: 41.3775,
        longitude: 64.5853,
        borders: ['Kazakhstan', 'Kyrgyzstan', 'Tajikistan', 'Afghanistan', 'Turkmenistan'],
        maritime_borders: [],
        population: 33469000
    },
    {
        name: 'Vanuatu',
        latitude: -15.3767,
        longitude: 166.9592,
        borders: [],
        maritime_borders: ['Solomon Islands', 'Fiji', 'New Caledonia', 'Australia'],
        population: 307000
    },
    {
        name: 'Vatican City',
        latitude: 41.9029,
        longitude: 12.4534,
        borders: ['Italy'],
        maritime_borders: [],
        population: 825
    },
    {
        name: 'Venezuela',
        latitude: 6.4238,
        longitude: -66.5897,
        borders: ['Colombia', 'Brazil', 'Guyana'],
        maritime_borders: ['Trinidad and Tobago', 'Grenada', 'Saint Vincent and the Grenadines', 'Dominican Republic', 'Colombia'],
        population: 28436000
    },
    {
        name: 'Vietnam',
        latitude: 14.0583,
        longitude: 108.2772,
        borders: ['China', 'Laos', 'Cambodia'],
        maritime_borders: ['China', 'Philippines', 'Malaysia', 'Brunei', 'Indonesia', 'Thailand', 'Cambodia'],
        population: 97339000
    },
    {
        name: 'Yemen',
        latitude: 15.5527,
        longitude: 48.5164,
        borders: ['Saudi Arabia', 'Oman'],
        maritime_borders: ['Djibouti', 'Eritrea', 'Saudi Arabia', 'Somalia'],
        population: 29826000
    },
    {
        name: 'Zambia',
        latitude: -13.1339,
        longitude: 27.8493,
        borders: ['Democratic Republic of the Congo', 'Tanzania', 'Malawi', 'Mozambique', 'Zimbabwe', 'Botswana', 'Namibia', 'Angola'],
        maritime_borders: [],
        population: 18384000
    },
    {
        name: 'Zimbabwe',
        latitude: -19.0154,
        longitude: 29.1549,
        borders: ['South Africa', 'Botswana', 'Zambia', 'Mozambique'],
        maritime_borders: [],
        population: 14863000
    }
];
