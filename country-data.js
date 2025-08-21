// Comprehensive country data with coordinates, borders, and population
const countries = [
    {
        name: 'Afghanistan',
        latitude: 33.9391,
        longitude: 67.7100,
        borders: ['Iran', 'Pakistan', 'Turkmenistan', 'Uzbekistan', 'Tajikistan', 'China'],
        population: 38928000
    },
    {
        name: 'Albania',
        latitude: 41.1533,
        longitude: 20.1683,
        borders: ['Montenegro', 'Kosovo', 'North Macedonia', 'Greece'],
        population: 2877000
    },
    {
        name: 'Algeria',
        latitude: 28.0339,
        longitude: 1.6596,
        borders: ['Tunisia', 'Libya', 'Niger', 'Mali', 'Mauritania', 'Western Sahara', 'Morocco'],
        population: 43851000
    },
    {
        name: 'Argentina',
        latitude: -38.4161,
        longitude: -63.6167,
        borders: ['Chile', 'Bolivia', 'Paraguay', 'Brazil', 'Uruguay'],
        population: 45195000
    },
    {
        name: 'Armenia',
        latitude: 40.0691,
        longitude: 45.0382,
        borders: ['Georgia', 'Turkey', 'Azerbaijan', 'Iran'],
        population: 2963000
    },
    {
        name: 'Australia',
        latitude: -25.2744,
        longitude: 133.7751,
        borders: [],
        population: 25500000
    },
    {
        name: 'Austria',
        latitude: 47.5162,
        longitude: 14.5501,
        borders: ['Germany', 'Czech Republic', 'Slovakia', 'Hungary', 'Slovenia', 'Italy', 'Switzerland', 'Liechtenstein'],
        population: 9006000
    },
    {
        name: 'Azerbaijan',
        latitude: 40.1431,
        longitude: 47.5769,
        borders: ['Russia', 'Georgia', 'Armenia', 'Iran'],
        population: 10139000
    },
    {
        name: 'Bangladesh',
        latitude: 23.6850,
        longitude: 90.3563,
        borders: ['India', 'Myanmar'],
        population: 164689000
    },
    {
        name: 'Belarus',
        latitude: 53.7098,
        longitude: 27.9534,
        borders: ['Russia', 'Ukraine', 'Poland', 'Lithuania', 'Latvia'],
        population: 9449000
    },
    {
        name: 'Belgium',
        latitude: 50.5039,
        longitude: 4.4699,
        borders: ['France', 'Germany', 'Luxembourg', 'Netherlands'],
        population: 11589000
    },
    {
        name: 'Bhutan',
        latitude: 27.5142,
        longitude: 90.4336,
        borders: ['China', 'India'],
        population: 771000
    },
    {
        name: 'Bolivia',
        latitude: -16.2902,
        longitude: -63.5887,
        borders: ['Peru', 'Brazil', 'Paraguay', 'Argentina', 'Chile'],
        population: 11673000
    },
    {
        name: 'Brazil',
        latitude: -14.2350,
        longitude: -51.9253,
        borders: ['French Guiana', 'Suriname', 'Guyana', 'Venezuela', 'Colombia', 'Peru', 'Bolivia', 'Paraguay', 'Argentina', 'Uruguay'],
        population: 212559000
    },
    {
        name: 'Bulgaria',
        latitude: 42.7339,
        longitude: 25.4858,
        borders: ['Romania', 'Serbia', 'North Macedonia', 'Greece', 'Turkey'],
        population: 6948000
    },
    {
        name: 'Cambodia',
        latitude: 12.5657,
        longitude: 104.9910,
        borders: ['Thailand', 'Laos', 'Vietnam'],
        population: 16719000
    },
    {
        name: 'Canada',
        latitude: 56.1304,
        longitude: -106.3468,
        borders: ['United States'],
        population: 38000000
    },
    {
        name: 'Chile',
        latitude: -35.6751,
        longitude: -71.5430,
        borders: ['Peru', 'Bolivia', 'Argentina'],
        population: 19116000
    },
    {
        name: 'China',
        latitude: 35.8617,
        longitude: 104.1954,
        borders: ['North Korea', 'Russia', 'Mongolia', 'Kazakhstan', 'Kyrgyzstan', 'Tajikistan', 'Afghanistan', 'Pakistan', 'India', 'Nepal', 'Bhutan', 'Myanmar', 'Laos', 'Vietnam'],
        population: 1439323776
    },
    {
        name: 'Colombia',
        latitude: 4.5709,
        longitude: -74.2973,
        borders: ['Panama', 'Venezuela', 'Brazil', 'Peru', 'Ecuador'],
        population: 50882000
    },
    {
        name: 'Czech Republic',
        latitude: 49.8175,
        longitude: 15.4730,
        borders: ['Germany', 'Austria', 'Slovakia', 'Poland'],
        population: 10709000
    },
    {
        name: 'Denmark',
        latitude: 56.2639,
        longitude: 9.5018,
        borders: ['Germany'],
        population: 5792000
    },
    {
        name: 'Ecuador',
        latitude: -1.8312,
        longitude: -78.1834,
        borders: ['Colombia', 'Peru'],
        population: 17643000
    },
    {
        name: 'Egypt',
        latitude: 26.0975,
        longitude: 30.0444,
        borders: ['Libya', 'Sudan', 'Israel'],
        population: 102334000
    },
    {
        name: 'Estonia',
        latitude: 58.5953,
        longitude: 25.0136,
        borders: ['Russia', 'Latvia'],
        population: 1327000
    },
    {
        name: 'Finland',
        latitude: 61.9241,
        longitude: 25.7482,
        borders: ['Sweden', 'Norway', 'Russia'],
        population: 5541000
    },
    {
        name: 'France',
        latitude: 46.2276,
        longitude: 2.2137,
        borders: ['Spain', 'Belgium', 'Luxembourg', 'Germany', 'Switzerland', 'Italy', 'Monaco', 'Andorra'],
        population: 65274000
    },
    {
        name: 'Georgia',
        latitude: 42.3154,
        longitude: 43.3569,
        borders: ['Russia', 'Turkey', 'Armenia', 'Azerbaijan'],
        population: 3989000
    },
    {
        name: 'Germany',
        latitude: 51.1657,
        longitude: 10.4515,
        borders: ['Denmark', 'Poland', 'Czech Republic', 'Austria', 'Switzerland', 'France', 'Luxembourg', 'Belgium', 'Netherlands'],
        population: 83784000
    },
    {
        name: 'Greece',
        latitude: 39.0742,
        longitude: 21.8243,
        borders: ['Albania', 'North Macedonia', 'Bulgaria', 'Turkey'],
        population: 10423000
    },
    {
        name: 'Guatemala',
        latitude: 15.7835,
        longitude: -90.2308,
        borders: ['Mexico', 'Belize', 'El Salvador', 'Honduras'],
        population: 17916000
    },
    {
        name: 'Hungary',
        latitude: 47.1625,
        longitude: 19.5033,
        borders: ['Slovakia', 'Ukraine', 'Romania', 'Serbia', 'Croatia', 'Slovenia', 'Austria'],
        population: 9660000
    },
    {
        name: 'India',
        latitude: 20.5937,
        longitude: 78.9629,
        borders: ['Pakistan', 'China', 'Nepal', 'Bhutan', 'Bangladesh', 'Myanmar'],
        population: 1380004385
    },
    {
        name: 'Indonesia',
        latitude: -0.7893,
        longitude: 113.9213,
        borders: ['Papua New Guinea', 'East Timor', 'Malaysia'],
        population: 273524000
    },
    {
        name: 'Iran',
        latitude: 32.4279,
        longitude: 53.6880,
        borders: ['Iraq', 'Turkey', 'Armenia', 'Azerbaijan', 'Turkmenistan', 'Afghanistan', 'Pakistan'],
        population: 83993000
    },
    {
        name: 'Iraq',
        latitude: 33.2232,
        longitude: 43.6793,
        borders: ['Turkey', 'Iran', 'Kuwait', 'Saudi Arabia', 'Jordan', 'Syria'],
        population: 40223000
    },
    {
        name: 'Ireland',
        latitude: 53.4129,
        longitude: -8.2439,
        borders: ['United Kingdom'],
        population: 4938000
    },
    {
        name: 'Israel',
        latitude: 31.0461,
        longitude: 34.8516,
        borders: ['Lebanon', 'Syria', 'Jordan', 'Egypt'],
        population: 8656000
    },
    {
        name: 'Italy',
        latitude: 41.8719,
        longitude: 12.5674,
        borders: ['France', 'Switzerland', 'Austria', 'Slovenia', 'Vatican City', 'San Marino'],
        population: 60461000
    },
    {
        name: 'Japan',
        latitude: 36.2048,
        longitude: 138.2529,
        borders: [],
        population: 126476000
    },
    {
        name: 'Jordan',
        latitude: 30.5852,
        longitude: 36.2384,
        borders: ['Syria', 'Iraq', 'Saudi Arabia', 'Israel'],
        population: 10203000
    },
    {
        name: 'Kazakhstan',
        latitude: 48.0196,
        longitude: 66.9237,
        borders: ['Russia', 'China', 'Kyrgyzstan', 'Uzbekistan', 'Turkmenistan'],
        population: 18777000
    },
    {
        name: 'Kenya',
        latitude: -0.0236,
        longitude: 37.9062,
        borders: ['Ethiopia', 'Somalia', 'Tanzania', 'Uganda', 'South Sudan'],
        population: 53771000
    },
    {
        name: 'Kyrgyzstan',
        latitude: 41.2044,
        longitude: 74.7661,
        borders: ['Kazakhstan', 'Uzbekistan', 'Tajikistan', 'China'],
        population: 6524000
    },
    {
        name: 'Laos',
        latitude: 19.8563,
        longitude: 102.4955,
        borders: ['China', 'Vietnam', 'Cambodia', 'Thailand', 'Myanmar'],
        population: 7276000
    },
    {
        name: 'Latvia',
        latitude: 56.8796,
        longitude: 24.6032,
        borders: ['Estonia', 'Russia', 'Belarus', 'Lithuania'],
        population: 1886000
    },
    {
        name: 'Lebanon',
        latitude: 33.8547,
        longitude: 35.8623,
        borders: ['Syria', 'Israel'],
        population: 6825000
    },
    {
        name: 'Libya',
        latitude: 26.3351,
        longitude: 17.2283,
        borders: ['Tunisia', 'Algeria', 'Niger', 'Chad', 'Sudan', 'Egypt'],
        population: 6871000
    },
    {
        name: 'Lithuania',
        latitude: 55.1694,
        longitude: 23.8813,
        borders: ['Latvia', 'Belarus', 'Poland', 'Russia'],
        population: 2722000
    },
    {
        name: 'Luxembourg',
        latitude: 49.8153,
        longitude: 6.1296,
        borders: ['Belgium', 'Germany', 'France'],
        population: 625000
    },
    {
        name: 'Malaysia',
        latitude: 4.2105,
        longitude: 101.9758,
        borders: ['Thailand', 'Indonesia', 'Brunei'],
        population: 32366000
    },
    {
        name: 'Mexico',
        latitude: 23.6345,
        longitude: -102.5528,
        borders: ['United States', 'Guatemala', 'Belize'],
        population: 128933000
    },
    {
        name: 'Mongolia',
        latitude: 46.8625,
        longitude: 103.8467,
        borders: ['Russia', 'China'],
        population: 3278000
    },
    {
        name: 'Morocco',
        latitude: 31.7917,
        longitude: -7.0926,
        borders: ['Algeria', 'Western Sahara'],
        population: 36911000
    },
    {
        name: 'Myanmar',
        latitude: 21.9162,
        longitude: 95.9560,
        borders: ['China', 'Laos', 'Thailand', 'Bangladesh', 'India'],
        population: 54410000
    },
    {
        name: 'Nepal',
        latitude: 28.3949,
        longitude: 84.1240,
        borders: ['China', 'India'],
        population: 29137000
    },
    {
        name: 'Netherlands',
        latitude: 52.1326,
        longitude: 5.2913,
        borders: ['Germany', 'Belgium'],
        population: 17134000
    },
    {
        name: 'New Zealand',
        latitude: -40.9006,
        longitude: 174.8860,
        borders: [],
        population: 4822000
    },
    {
        name: 'Niger',
        latitude: 17.6078,
        longitude: 8.0817,
        borders: ['Libya', 'Chad', 'Nigeria', 'Benin', 'Burkina Faso', 'Mali', 'Algeria'],
        population: 24207000
    },
    {
        name: 'Nigeria',
        latitude: 9.0820,
        longitude: 8.6753,
        borders: ['Niger', 'Chad', 'Cameroon', 'Benin'],
        population: 206140000
    },
    {
        name: 'North Korea',
        latitude: 40.3399,
        longitude: 127.5101,
        borders: ['China', 'South Korea', 'Russia'],
        population: 25778000
    },
    {
        name: 'North Macedonia',
        latitude: 41.6086,
        longitude: 21.7453,
        borders: ['Kosovo', 'Serbia', 'Bulgaria', 'Greece', 'Albania'],
        population: 2083000
    },
    {
        name: 'Norway',
        latitude: 60.4720,
        longitude: 8.4689,
        borders: ['Finland', 'Sweden', 'Russia'],
        population: 5421000
    },
    {
        name: 'Pakistan',
        latitude: 30.3753,
        longitude: 69.3451,
        borders: ['Iran', 'Afghanistan', 'China', 'India'],
        population: 220892000
    },
    {
        name: 'Paraguay',
        latitude: -23.4425,
        longitude: -58.4438,
        borders: ['Bolivia', 'Brazil', 'Argentina'],
        population: 7133000
    },
    {
        name: 'Peru',
        latitude: -9.1900,
        longitude: -75.0152,
        borders: ['Ecuador', 'Colombia', 'Brazil', 'Bolivia', 'Chile'],
        population: 32971000
    },
    {
        name: 'Philippines',
        latitude: 12.8797,
        longitude: 121.7740,
        borders: [],
        population: 109581000
    },
    {
        name: 'Poland',
        latitude: 51.9194,
        longitude: 19.1451,
        borders: ['Germany', 'Czech Republic', 'Slovakia', 'Ukraine', 'Belarus', 'Lithuania', 'Russia'],
        population: 37847000
    },
    {
        name: 'Portugal',
        latitude: 39.3999,
        longitude: -8.2245,
        borders: ['Spain'],
        population: 10197000
    },
    {
        name: 'Romania',
        latitude: 45.9432,
        longitude: 24.9668,
        borders: ['Ukraine', 'Moldova', 'Bulgaria', 'Serbia', 'Hungary'],
        population: 19238000
    },
    {
        name: 'Russia',
        latitude: 61.5240,
        longitude: 105.3188,
        borders: ['Norway', 'Finland', 'Estonia', 'Latvia', 'Lithuania', 'Poland', 'Belarus', 'Ukraine', 'Georgia', 'Azerbaijan', 'Kazakhstan', 'Mongolia', 'China', 'North Korea'],
        population: 145934000
    },
    {
        name: 'Saudi Arabia',
        latitude: 23.8859,
        longitude: 45.0792,
        borders: ['Jordan', 'Iraq', 'Kuwait', 'Qatar', 'United Arab Emirates', 'Oman', 'Yemen'],
        population: 34814000
    },
    {
        name: 'Serbia',
        latitude: 44.0165,
        longitude: 21.0059,
        borders: ['Hungary', 'Romania', 'Bulgaria', 'North Macedonia', 'Kosovo', 'Montenegro', 'Bosnia and Herzegovina', 'Croatia'],
        population: 8737000
    },
    {
        name: 'Slovakia',
        latitude: 48.6690,
        longitude: 19.6990,
        borders: ['Czech Republic', 'Austria', 'Hungary', 'Ukraine', 'Poland'],
        population: 5460000
    },
    {
        name: 'Slovenia',
        latitude: 46.1512,
        longitude: 14.9955,
        borders: ['Austria', 'Italy', 'Hungary', 'Croatia'],
        population: 2078000
    },
    {
        name: 'South Africa',
        latitude: -30.5595,
        longitude: 22.9375,
        borders: ['Namibia', 'Botswana', 'Zimbabwe', 'Mozambique', 'Eswatini', 'Lesotho'],
        population: 59308000
    },
    {
        name: 'South Korea',
        latitude: 35.9078,
        longitude: 127.7669,
        borders: ['North Korea'],
        population: 51269000
    },
    {
        name: 'Spain',
        latitude: 40.4637,
        longitude: -3.7492,
        borders: ['Portugal', 'France', 'Andorra'],
        population: 46755000
    },
    {
        name: 'Sri Lanka',
        latitude: 7.8731,
        longitude: 80.7718,
        borders: [],
        population: 21413000
    },
    {
        name: 'Sudan',
        latitude: 12.8628,
        longitude: 30.2176,
        borders: ['Egypt', 'Libya', 'Chad', 'Central African Republic', 'South Sudan', 'Ethiopia', 'Eritrea'],
        population: 43849000
    },
    {
        name: 'Sweden',
        latitude: 60.1282,
        longitude: 18.6435,
        borders: ['Norway', 'Finland'],
        population: 10099000
    },
    {
        name: 'Switzerland',
        latitude: 46.8182,
        longitude: 8.2275,
        borders: ['Germany', 'Austria', 'Liechtenstein', 'Italy', 'France'],
        population: 8655000
    },
    {
        name: 'Syria',
        latitude: 34.8021,
        longitude: 38.9968,
        borders: ['Turkey', 'Iraq', 'Jordan', 'Israel', 'Lebanon'],
        population: 17501000
    },
    {
        name: 'Tajikistan',
        latitude: 38.8610,
        longitude: 71.2761,
        borders: ['Kyrgyzstan', 'Uzbekistan', 'Afghanistan', 'China'],
        population: 9538000
    },
    {
        name: 'Tanzania',
        latitude: -6.3690,
        longitude: 34.8888,
        borders: ['Kenya', 'Uganda', 'Rwanda', 'Burundi', 'Democratic Republic of the Congo', 'Zambia', 'Malawi', 'Mozambique'],
        population: 59734000
    },
    {
        name: 'Thailand',
        latitude: 15.8700,
        longitude: 100.9925,
        borders: ['Myanmar', 'Laos', 'Cambodia', 'Malaysia'],
        population: 69800000
    },
    {
        name: 'Tunisia',
        latitude: 33.8869,
        longitude: 9.5375,
        borders: ['Algeria', 'Libya'],
        population: 11819000
    },
    {
        name: 'Turkey',
        latitude: 38.9637,
        longitude: 35.2433,
        borders: ['Greece', 'Bulgaria', 'Georgia', 'Armenia', 'Azerbaijan', 'Iran', 'Iraq', 'Syria'],
        population: 84339000
    },
    {
        name: 'Turkmenistan',
        latitude: 38.9697,
        longitude: 59.5563,
        borders: ['Kazakhstan', 'Uzbekistan', 'Afghanistan', 'Iran'],
        population: 6032000
    },
    {
        name: 'Uganda',
        latitude: 1.3733,
        longitude: 32.2903,
        borders: ['South Sudan', 'Kenya', 'Tanzania', 'Rwanda', 'Democratic Republic of the Congo'],
        population: 45741000
    },
    {
        name: 'Ukraine',
        latitude: 48.3794,
        longitude: 31.1656,
        borders: ['Belarus', 'Russia', 'Poland', 'Slovakia', 'Hungary', 'Romania', 'Moldova'],
        population: 43734000
    },
    {
        name: 'United Kingdom',
        latitude: 55.3781,
        longitude: -3.4360,
        borders: ['Ireland'],
        population: 67886000
    },
    {
        name: 'United States',
        latitude: 39.8283,
        longitude: -98.5795,
        borders: ['Canada', 'Mexico'],
        population: 331002651
    },
    {
        name: 'Uruguay',
        latitude: -32.5228,
        longitude: -55.7658,
        borders: ['Argentina', 'Brazil'],
        population: 3473000
    },
    {
        name: 'Uzbekistan',
        latitude: 41.3775,
        longitude: 64.5853,
        borders: ['Kazakhstan', 'Kyrgyzstan', 'Tajikistan', 'Afghanistan', 'Turkmenistan'],
        population: 33469000
    },
    {
        name: 'Venezuela',
        latitude: 6.4238,
        longitude: -66.5897,
        borders: ['Colombia', 'Brazil', 'Guyana'],
        population: 28436000
    },
    {
        name: 'Vietnam',
        latitude: 14.0583,
        longitude: 108.2772,
        borders: ['China', 'Laos', 'Cambodia'],
        population: 97339000
    }
];
