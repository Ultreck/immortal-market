import React, { useState } from 'react';
import { Tooltip } from '@heroui/react';
import { ComposableMap, Geographies, Geography, Marker, Sphere } from 'react-simple-maps';
import PropTypes from 'prop-types';
import { countries, colors } from '@/lib/sentiment.js';
import MapLoadingSkeleton from './MapLoadingSkeleton';
import { useGetSentiments } from '@/api/sentiment.js';
import { cn } from '@/lib/utils';

const geoUrl = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

const SentimentMap = ({ className, category }) => {
  const [hoveredGeo, setHoveredGeo] = useState(null);
  const { data: { sentiments = [] } = {}, isLoading: isSentimentsLoading } = useGetSentiments(category);

  const getSentimentColor = (sentiment) => {
    const c = colors.find((color) => color.sentiment === sentiment);
    return c ? c.color : '#FF5722';
  };

  return (
    <div className={cn(className)}>
      {isSentimentsLoading ? (
        <MapLoadingSkeleton />
      ) : (
        <ComposableMap projectionConfig={{ scale: 180 }}>
          <Sphere
            fill="transparent"
            stroke="transparent"
            strokeWidth={0.5}
            outline="none"
            fillOpacity={0.5}
          />
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo, i) => (
                <Tooltip
                  key={i}
                  content={
                    <div className="px-2 py-1">
                      <p>{geo.properties.name}</p>
                    </div>
                  }
                  showArrow={true}
                  placement="top"
                  isOpen={hoveredGeo?.rsmKey === geo?.rsmKey}
                >
                  <Geography
                    geography={geo}
                    onMouseEnter={() => setHoveredGeo(geo)}
                    onMouseLeave={() => setHoveredGeo(null)}
                    style={{
                      default: {
                        fill: 'transparent',
                        stroke: '#000000',
                        strokeWidth: 0.5,
                        outline: 'none',
                        transition: 'all 0.3s ease',
                      },
                      hover: {
                        fill: '#E0E0E0',
                        stroke: '#000000',
                        strokeWidth: 0.5,
                        outline: 'none',
                      },
                      pressed: {
                        fill: '#E0E0E0',
                        stroke: '#000000',
                        strokeWidth: 0.5,
                        outline: 'none',
                      },
                    }}
                  />
                </Tooltip>
              ))
            }
          </Geographies>
          {sentiments.map((sentiment, index) => {
            const country = countries.find((country) => country.code === sentiment.code);
            if (!country) return null;
            const color = getSentimentColor(sentiment.sentiment);
            return (
              <Marker key={index} coordinates={[country.longitude, country.latitude]}>
                <circle r={8} fill={color} stroke="#fff" strokeWidth={2} />
                <Tooltip>
                  <div className="p-3">
                    <p>{sentiment.name}</p>
                    <p>Sentiment: {sentiment.sentiment}</p>
                  </div>
                </Tooltip>
              </Marker>
            );
          })}
        </ComposableMap>
      )}
    </div>
  );
};

SentimentMap.propTypes = {
  className: PropTypes.string,
  category: PropTypes.string,
};

export default SentimentMap;
