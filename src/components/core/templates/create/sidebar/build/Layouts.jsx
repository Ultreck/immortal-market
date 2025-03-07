import useDesignStore from '@/store/design';

const options = [
  {
    name: 'Default',
    size: {
      width: 800,
      height: 450,
    },
  },
  {
    name: 'Instagram Story',
    size: {
      width: 1080,
      height: 1920,
    },
  },
  {
    name: 'Instagram Post',
    size: {
      width: 1080,
      height: 1350,
    },
  },
  {
    name: 'Facebook Post (Landscape)',
    size: {
      width: 1200,
      height: 630,
    },
  },
  {
    name: 'Presentation (16:9)',
    size: {
      width: 1920,
      height: 1080,
    },
  },
  {
    name: 'Presentation (4:3)',
    size: {
      width: 1280,
      height: 720,
    },
  },
  {
    name: 'Document (A4)',
    size: {
      width: 595,
      height: 842,
    },
  },
  {
    name: 'Document (Letter)',
    size: {
      width: 612,
      height: 792,
    },
  },
  {
    name: 'Twitter Post',
    size: {
      width: 1600,
      height: 900,
    },
  },
];

const Layouts = () => {
  const resize = useDesignStore((state) => state.resize);

  const handleClick = (option) => {
    resize(option.size.width, option.size.height);
  };

  return (
    <div className="space-y-4">
      {options.map((option, index) => (
        <div
          key={index}
          onClick={() => handleClick(option)}
          className="border-1 border-default-200 hover:bg-white/10 cursor-pointer rounded-2xl px-6 py-4 flex items-center justify-between"
        >
          <div>
            <div className="text-base font-medium leading-tight">{option.name}</div>
            <div className="text-md mt-1 opacity-60">
              {option.size.width} x {option.size.height}
            </div>
          </div>
          <div
            style={{ aspectRatio: `${option.size.width} / ${option.size.height}` }}
            className="relative border border-default-200 w-[40px]"
          />
        </div>
      ))}
    </div>
  );
};

export default Layouts;
