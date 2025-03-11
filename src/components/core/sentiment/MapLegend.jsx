import { colors } from '@/lib/sentiment.js';

const MapLegend = () => {
  return (
    <section className="flex flex-wrap gap-x-8 gap-y-2 p-4">
      {colors.map((color, index) => (
        <div key={index} className="flex items-center space-x-3">
          <span className="w-4 h-4 rounded-full" style={{ backgroundColor: color.color }}></span>
          <span className="capitalize text-base">{color.sentiment}</span>
        </div>
      ))}
    </section>
  );
};

export default MapLegend;
