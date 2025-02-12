import DraggableElementWrapper from '@/components/core/templates/create/sidebar/DraggableElementWrapper.jsx';
import { capitalize } from '@/lib/utils.js';
import { getElementDefaultStyle } from '@/lib/elements.js';
import PropTypes from 'prop-types';
import { Button } from '@heroui/react';
import { TbChevronLeft } from 'react-icons/tb';
import BasicCarousel from '@/components/ui/BasicCarousel';
import { MapPreview } from '@/components/core/templates/create/elements/maps/Map.jsx';

const previews = {
  continents: ['africa', 'europe', 'north-america', 'south-america', 'world', 'asia', 'oceanic'],
  countries: [
    'nigeria',
    'nigeria-regions',
    'algeria',
    'angola',
    'albania',
    'afghanistan',
    'austria',
    'argentina',
    'azerbaijan',
    'benin',
    'bangladesh',
    'belarus',
    'bermuda',
    'botswana',
    'bahrain',
    'bulgaria',
    'burkinafaso',
    'burundi',
    'armenia',
    'australia',
    'belgium',
    'belize',
    'bhutan',
    'bolivia',
    'bosnia-and-herzegovina',
    'brazil',
    'brunei-darussalam',
    'bahamas',
    'chad',
    'colombia',
    'croatia',
    'cuba',
    'czech-republic',
    'congo',
    'dominican-republic',
    'cayland-islands',
    'cambodia',
    'cameroon',
    'canada',
    'central-african-republic',
    'chile',
    'china',
    'costarica',
    'cyprus',
    'congo-dr',
    'denmark',
    'djibouti',
    'taiwan',
    'togo',
    'trinidad-and-tobago',
    'tanzania',
    'tunisia',
    'turkmenistan',
    'eritrea',
    'estonia',
    'ethiopia',
    'timor-leste',
    'tajikistan',
    'thailand',
    'turkey',
    'ecuador',
    'egypt',
    'el-salvador',
    'equatorial-guinea',
    'falkland-islands',
    'fiji',
    'finland',
    'france',
    'french-southern-and-antarctic-lands',
    'gabon',
    'gambia',
    'georgia',
    'germany',
    'ghana',
    'greece',
    'greenland',
    'grenada',
    'guatemala',
    'guinea-bissau',
    'guinea',
    'guyana',
    'haiti',
    'honduras',
    'hong-kong',
    'iceland',
    'india',
    'indonesia',
    'hungary',
    'iran',
    'iraq',
    'ireland',
    'israel',
    'italy',
    'ivory-coast',
    'jamaica',
    'japan',
    'jordan',
    'kazakhstan',
    'kenya',
    'kosovo',
    'kuwait',
    'kyrgyzstan',
    'laos',
    'latvia',
    'malta',
    'mauritania',
    'mauritius',
    'mexico',
    'moldova',
    'morocco',
    'mozambique',
    'myanmar',
    'nepal',
    'namibia',
    'netherlands',
    'mongolia',
    'lebanon',
    'lesotho',
    'liberia',
    'libya',
    'lithuania',
    'luxembourg',
    'macedonia',
    'madagascar',
    'malawi',
    'malaysia',
    'mali',
    'new-caledonia',
    'new-zealand',
    'nicaragua',
    'niger',
    'north-korea',
    'norway',
    'oman',
    'pakistan',
    'panama',
    'papua-new-guinea',
    'palestine',
    'peru',
    'philippines',
    'poland',
    'portugal',
    'puerto-rico',
    'qatar',
    'saudi-arabia',
    'senegal',
    'serbia',
    'sierra-leone',
    'suriname',
    'paraguay',
    'romania',
    'rwanda',
    'slovenia',
    'singapore',
    'slovakia',
    'solomon-islands',
    'somalia',
    'somaliland',
    'south-africa',
    'south-korea',
    'south-sudan',
    'spain',
    'russia',
    'swaziland',
    'sweden',
    'switzerland',
    'syria',
    'uganda',
    'united-arab-emirates',
    'ukraine',
    'united-kingdom',
    'district-of-columbia',
    'florida',
    'georgia-us',
    'sudan',
    'sri-lanka',
    'alabama',
    'alaska',
    'arizona',
    'arkansas',
    'california',
    'colorado',
    'connecticut',
    'delaware',
    'england',
    'hawaii',
    'idaho',
    'illinois',
    'indiana',
    'maine',
    'maryland',
    'massachusetts',
    'iowa',
    'northern-ireland',
    'scotland',
    'united-states',
    'wales',
    'minnesota',
    'mississippi',
    'missouri',
    'montana',
    'nebraska',
    'nevada',
    'new-hampshire',
    'new-jersey',
    'new-mexico',
    'kansas',
    'louisiana',
    'kentucky',
    'zambia',
    'zimbabwe',
    'uruguay',
    'us-virgin-islands',
    'uzbekistan',
    'vanuatu',
    'vietnam',
    'western-sahara',
    'venezuela',
    'yemen',
    'michigan',
    'vermont',
    'rhode-island',
    'new-york',
    'north-carolina',
    'north-dakota',
    'ohio',
    'oklahoma',
    'oregon',
    'texas',
    'virginia',
    'wisconsin',
    'montenegro',
    'south-carolina',
    'south-dakota',
    'pennsylvania',
    'tennessee',
    'utah',
    'washington',
    'wyoming',
    'west-virginia',
  ],
};

const continents = previews.continents.sort();
const countries = previews.countries.sort();

const elements = {
  continents: continents.map((name) => ({
    id: `map-${name}`,
    data: {
      type: 'map',
      text: name.split('-').map(capitalize).join(' '),
      width: 400,
      height: 400,
      style: getElementDefaultStyle({ type: 'map' }),
      config: {
        data: [],
        name: name,
        fill: '#f9fafb',
        stroke: '#333',
        showLabels: true,
        showValues: true,
        labelsCount: 1,
      },
      tooltip: {
        enabled: true,
        type: 'bar',
      },
    },
    preview: (
      <div className="flex flex-col items-center justify-center">
        <MapPreview element={{ config: { name, data: [], fill: '#f9fafb', stroke: '#f9fafb' } }} />
        <p className="text-sm text-center leading-tight mt-2 opacity-60">{name.split('-').map(capitalize).join(' ')}</p>
      </div>
    ),
  })),
  countries: countries.map((name) => ({
    id: `map-${name}`,
    data: {
      type: 'map',
      text: name.split('-').map(capitalize).join(' '),
      width: 400,
      height: 400,
      style: getElementDefaultStyle({ type: 'map' }),
      config: {
        data: [],
        name,
        fill: '#f9fafb',
        stroke: '#333',
        showLabels: true,
        showValues: true,
        labelsCount: 1,
      },
      tooltip: {
        enabled: true,
        type: 'bar',
      },
    },
    preview: (
      <div className="flex flex-col items-center justify-center">
        <MapPreview element={{ config: { name, data: [], fill: '#f9fafb', stroke: '#f9fafb' } }} />
        <p className="text-sm text-center leading-tight mt-2 opacity-60">{name.split('-').map(capitalize).join(' ')}</p>
      </div>
    ),
  })),
};

const Maps = ({ mini, onBack }) => {
  return (
    <>
      {mini ? (
        <div className="relative">
          <BasicCarousel
            classNames={{ next: 'right-0', prev: 'left-0', base: 'overflow-hidden' }}
            slides={Array(2)
              .fill(null)
              .map((_, index) => {
                return {
                  id: index,
                  content: (
                    <div className="grid grid-cols-4 gap-4">
                      {elements.countries
                        .filter((el) => el.id === 'map-nigeria')
                        .concat(elements.continents)
                        .slice(index * 8, index * 8 + 8)
                        .map((element) => {
                          return <DraggableElementWrapper key={element.id} element={element} />;
                        })}
                    </div>
                  ),
                };
              })}
          />
        </div>
      ) : (
        <div>
          <div className="flex items-center space-x-3 mb-6 bg-white/[.07] rounded-full px-2 py-1">
            <Button onPress={onBack} variant="light" radius="full" isIconOnly size="sm">
              <TbChevronLeft size="20" />
            </Button>
            <h2 className="text-base font-semibold">Maps</h2>
          </div>
          <div className="space-y-6">
            {['continents', 'countries'].map((type) => {
              return (
                <div key={type} className="border border-white/10 rounded-2xl px-6 py-5">
                  <h2 className="text-base font-semibold capitalize mb-6">{type}</h2>
                  <div className="grid grid-cols-2 gap-4">
                    {elements[type].map((element) => {
                      return <DraggableElementWrapper key={element.id} element={element} />;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

Maps.propTypes = {
  mini: PropTypes.bool,
  onBack: PropTypes.func,
};

export default Maps;
