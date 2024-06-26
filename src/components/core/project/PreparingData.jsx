import Title from '../shared/Title';
import { cn } from '@/lib/utils.js';

const steps = [
  {
    text: 'Uploading files',
    classNames: { circle: 'bg-red-500', card: 'bg-red-500/10 border-red-500/30' },
  },
  {
    text: 'Uploading file 2',
    classNames: { circle: 'bg-blue-500', card: 'bg-blue-500/10 border-blue-500/30' },
  },
  {
    text: 'Using AI to prioritize',
    classNames: { circle: 'bg-green-500', card: 'bg-green-500/10 border-green-500/30' },
  },
  {
    text: 'Exit Other investors',
    classNames: { circle: 'bg-orange-500', card: 'bg-orange-500/10 border-orange-500/30' },
  },
  {
    text: 'Generating Infographics',
    classNames: { circle: 'bg-teal-500', card: 'bg-teal-500/10 border-teal-500/30' },
  },
];

const PreparingData = () => {
  return (
    <div>
      <Title title="Preparing your data" />
      <div className="mt-10 w-full">
        <div className="relative">
          <div className="absolute top-1/2 -translate-y-1/2 left-0 h-[90%] border-l border-default-300 dark:border-default-200" />
          <ol className="space-y-8">
            {steps.map((step, index) => (
              <li key={index} className={cn('ps-8 relative group w-full')}>
                <div className={cn('py-3 px-6 border border-default-300 rounded-2xl', step.classNames.card)}>
                  <p className="font-medium">{step.text}</p>
                  {!!step.sub && <p className="text-sm">{step.sub}</p>}
                  <span
                    className={cn(
                      'absolute w-[12px] h-[12px] rounded-full -left-[5px] top-1/2 -translate-y-1/2',
                      step.classNames.circle
                    )}
                  />
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default PreparingData;
