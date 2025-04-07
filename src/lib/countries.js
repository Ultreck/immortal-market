const countries = {
  africa: [
    {
      name: 'Nigeria',
      slug: 'nigeria',
      code: 'NG',
    },
    {
      name: 'Botswana',
      slug: 'botswana',
      code: 'BW',
    },
    {
      name: 'Egypt',
      slug: 'egypt',
      code: 'EG',
    },
    {
      name: 'Ivory Coast',
      slug: 'ivory-coast',
      code: 'CI',
    },
    {
      name: 'Kenya',
      slug: 'kenya',
      code: 'KE',
    },
    {
      name: 'Malawi',
      slug: 'malawi',
      code: 'MW',
    },
    {
      name: 'Mauritius',
      slug: 'mauritius',
      code: 'MU',
    },
    {
      name: 'Morocco',
      slug: 'morocco',
      code: 'MA',
    },
    {
      name: 'Namibia',
      slug: 'namibia',
      code: 'NA',
    },
    {
      name: 'Rwanda',
      slug: 'rwanda',
      code: 'RW',
    },
    {
      name: 'South Africa',
      slug: 'south-africa',
      code: 'ZA',
    },
    {
      name: 'Tanzania',
      slug: 'tanzania',
      code: 'TZ',
    },
    {
      name: 'Tunisia',
      slug: 'tunisia',
      code: 'TN',
    },
    {
      name: 'Uganda',
      slug: 'uganda',
      code: 'UG',
    },
    {
      name: 'Zambia',
      slug: 'zambia',
      code: 'ZM',
    },
    {
      name: 'Zimbabwe',
      slug: 'zimbabwe',
      code: 'ZW',
    },
  ],
  global: [
    {
      name: 'Abu Dhabi',
      slug: 'abu-dhabi',
      code: 'AE',
    },
    {
      name: 'Argentina',
      slug: 'argentina',
      code: 'AR',
    },
    {
      name: 'Australia',
      slug: 'australia',
      code: 'AU',
    },
    {
      name: 'Austria',
      slug: 'austria',
      code: 'AT',
    },
    {
      name: 'Bahrain',
      slug: 'bahrain',
      code: 'BH',
    },
    {
      name: 'Belgium',
      slug: 'belgium',
      code: 'BE',
    },
    {
      name: 'Bosnia',
      slug: 'bosnia',
      code: 'BA',
    },
    {
      name: 'Brazil',
      slug: 'brazil',
      code: 'BR',
    },
    {
      name: 'Bulgaria',
      slug: 'bulgaria',
      code: 'BG',
    },
    {
      name: 'Canada',
      slug: 'canada',
      code: 'CA',
    },
    {
      name: 'Chile',
      slug: 'chile',
      code: 'CL',
    },
    {
      name: 'China',
      slug: 'china',
      code: 'CN',
    },
    {
      name: 'Colombia',
      slug: 'colombia',
      code: 'CO',
    },
    {
      name: 'Costa Rica',
      slug: 'costa-rica',
      code: 'CR',
    },
    {
      name: 'Croatia',
      slug: 'croatia',
      code: 'HR',
    },
    {
      name: 'Cyprus',
      slug: 'cyprus',
      code: 'CY',
    },
    {
      name: 'Czech Republic',
      slug: 'czech-republic',
      code: 'CZ',
    },
    {
      name: 'Denmark',
      slug: 'denmark',
      code: 'DK',
    },
    {
      name: 'Estonia',
      slug: 'estonia',
      code: 'EE',
    },
    {
      name: 'Finland',
      slug: 'finland',
      code: 'FI',
    },
    {
      name: 'France',
      slug: 'france',
      code: 'FR',
    },
    {
      name: 'Germany',
      slug: 'germany',
      code: 'DE',
    },
    {
      name: 'Greece',
      slug: 'greece',
      code: 'GR',
    },
    {
      name: 'Hong Kong',
      slug: 'hong-kong',
      code: 'HK',
    },
    {
      name: 'Hungary',
      slug: 'hungary',
      code: 'HU',
    },
    {
      name: 'Iceland',
      slug: 'iceland',
      code: 'IS',
    },
    {
      name: 'India',
      slug: 'india',
      code: 'IN',
    },
    {
      name: 'Indonesia',
      slug: 'indonesia',
      code: 'ID',
    },
    {
      name: 'Iraq',
      slug: 'iraq',
      code: 'IQ',
    },
    {
      name: 'Ireland',
      slug: 'ireland',
      code: 'IE',
    },
    {
      name: 'Israel',
      slug: 'israel',
      code: 'IL',
    },
    {
      name: 'Italy',
      slug: 'italy',
      code: 'IT',
    },
    {
      name: 'Jamaica',
      slug: 'jamaica',
      code: 'JM',
    },
    {
      name: 'Japan',
      slug: 'japan',
      code: 'JP',
    },
    {
      name: 'Jordan',
      slug: 'jordan',
      code: 'JO',
    },
    {
      name: 'Kazakhstan',
      slug: 'kazakhstan',
      code: 'KZ',
    },
    {
      name: 'Kuwait',
      slug: 'kuwait',
      code: 'KW',
    },
    {
      name: 'Latvia',
      slug: 'latvia',
      code: 'LV',
    },
    {
      name: 'Lebanon',
      slug: 'lebanon',
      code: 'LB',
    },
    {
      name: 'Lithuania',
      slug: 'lithuania',
      code: 'LT',
    },
    {
      name: 'Malaysia',
      slug: 'malaysia',
      code: 'MY',
    },
    {
      name: 'Malta',
      slug: 'malta',
      code: 'MT',
    },
    {
      name: 'Mexico',
      slug: 'mexico',
      code: 'MX',
    },
    {
      name: 'Montenegro',
      slug: 'montenegro',
      code: 'ME',
    },
    {
      name: 'Netherlands',
      slug: 'netherlands',
      code: 'NL',
    },
    {
      name: 'New Zealand',
      slug: 'new-zealand',
      code: 'NZ',
    },
    {
      name: 'Norway',
      slug: 'norway',
      code: 'NO',
    },
    {
      name: 'Oman',
      slug: 'oman',
      code: 'OM',
    },
    {
      name: 'Pakistan',
      slug: 'pakistan',
      code: 'PK',
    },
    {
      name: 'Palestine',
      slug: 'palestine',
      code: 'PS',
    },
    {
      name: 'Peru',
      slug: 'peru',
      code: 'PE',
    },
    {
      name: 'Philippines',
      slug: 'philippines',
      code: 'PH',
    },
    {
      name: 'Poland',
      slug: 'poland',
      code: 'PL',
    },
    {
      name: 'Portugal',
      slug: 'portugal',
      code: 'PT',
    },
    {
      name: 'Qatar',
      slug: 'qatar',
      code: 'QA',
    },
    {
      name: 'Romania',
      slug: 'romania',
      code: 'RO',
    },
    {
      name: 'Russia',
      slug: 'russia',
      code: 'RU',
    },
    {
      name: 'Saudi Arabia',
      slug: 'saudi-arabia',
      code: 'SA',
    },
    {
      name: 'Serbia',
      slug: 'serbia',
      code: 'RS',
    },
    {
      name: 'Singapore',
      slug: 'singapore',
      code: 'SG',
    },
    {
      name: 'Slovakia',
      slug: 'slovakia',
      code: 'SK',
    },
    {
      name: 'Slovenia',
      slug: 'slovenia',
      code: 'SI',
    },
    {
      name: 'South Korea',
      slug: 'south-korea',
      code: 'KR',
    },
    {
      name: 'Spain',
      slug: 'spain',
      code: 'ES',
    },
    {
      name: 'Sri Lanka',
      slug: 'sri-lanka',
      code: 'LK',
    },
    {
      name: 'Sweden',
      slug: 'sweden',
      code: 'SE',
    },
    {
      name: 'Switzerland',
      slug: 'switzerland',
      code: 'CH',
    },
    {
      name: 'Taiwan',
      slug: 'taiwan',
      code: 'TW',
    },
    {
      name: 'Thailand',
      slug: 'thailand',
      code: 'TH',
    },
    {
      name: 'Turkey',
      slug: 'turkey',
      code: 'TR',
    },
    {
      name: 'Ukraine',
      slug: 'ukraine',
      code: 'UA',
    },
    {
      name: 'United Kingdom',
      slug: 'united-kingdom',
      code: 'GB',
    },
    {
      name: 'United States',
      slug: 'united-states',
      code: 'US',
    },
    {
      name: 'Venezuela',
      slug: 'venezuela',
      code: 'VE',
    },
    {
      name: 'Vietnam',
      slug: 'vietnam',
      code: 'VN',
    },
  ],
  special: [
    {
      name: 'Nigeria',
      slug: 'nigeria',
      code: 'NG',
    },
    {
      name: 'US', // United States
      slug: 'USA',
      code: 'US',
    },
  ],
};

export default countries;

export const getCountryCode = (slug) => {
  return [...countries.global, ...countries.africa].find((country) => country.slug === slug)?.code;
};
