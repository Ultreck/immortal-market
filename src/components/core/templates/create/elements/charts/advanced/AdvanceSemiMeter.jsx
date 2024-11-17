import { ElementPropTypes } from '@/lib/prop-types.js';
import { motion } from 'framer-motion';

function AdvanceSemiMeter({ element, onChange }) {
  const radius = 50;
  const percentage = element.config.progress;
  const circumference = radius * Math.PI; // Half of the full circumference for semi-circle
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative flex justify-center items-center">
      <svg className="w-full h-48" viewBox="0 0 100 50">
        <path d="M 0,50 A 50,50 0 0,1 100,50" stroke={element.config.colors[0]} strokeWidth="10" fill="transparent" />
      </svg>

      <svg className="w-full h-48 absolute" viewBox="0 0 100 50">
        <motion.path
          d="M 0,50 A 50,50 0 0,1 100,50"
          stroke={element.config.colors[1]}
          strokeWidth="10"
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1 }}
        />
      </svg>

      <div className="absolute -bottom-1 text-8xl font-bold">{percentage}%</div>
    </div>
  );
}

AdvanceSemiMeter.propTypes = ElementPropTypes;

export default AdvanceSemiMeter;
