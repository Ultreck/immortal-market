import useGlobalStore from '@/store/global.js';

const options = [
  {
    subject: 'CX',
    amount: '$1,999',
    title: 'DBA - PhD in Quality Management',
    mainImg: 'https://portal.msbm.org.uk/uploads/course_image/202302/27134456__dba-quality-management-thumbnail.jpg',
    details:
      "The aim of the 180 ECTS credits DBA in Quality Management programme, is to provide business students, managers, practitioners, and leaders with advanced knowledge, research, and analytical skills to address complex business issues. Unlike master's programs, this DBA program utilises theoretical concepts to tackle practical business challenges. It promotes a transformative learning process that enhances research skills. It enables students to view business situations differently and use research methods to identify solutions that foster organizational efficiency, growth, and long-term sustainability.",
  },
  {
    subject: 'Market',
    amount: '$3,900',
    title: 'Doctor of Business Administration',
    mainImg:
      'https://portal.msbm.org.uk/uploads/course_image/202302/27093736__dba-supply-chain-management-thumbnail.jpg',
    details:
      "The aim of the 180 ECTS credits DBA in Quality Management programme, is to provide business students, managers, practitioners, and leaders with advanced knowledge, research, and analytical skills to address complex business issues. Unlike master's programs, this DBA program utilises theoretical concepts to tackle practical business challenges. It promotes a transformative learning process that enhances research skills. It enables students to view business situations differently and use research methods to identify solutions that foster organizational efficiency, growth, and long-term sustainability",
  },
  {
    subject: 'Complain',
    amount: '$450',
    title: 'DBA - PhD in Quality Management',
    mainImg: 'https://portal.msbm.org.uk/uploads/course_image/202302/27134456__dba-quality-management-thumbnail.jpg',
    details:
      "The aim of the 180 ECTS credits DBA in Quality Management programme, is to provide business students, managers, practitioners, and leaders with advanced knowledge, research, and analytical skills to address complex business issues. Unlike master's programs, this DBA program utilises theoretical concepts to tackle practical business challenges. It promotes a transformative learning process that enhances research skills. It enables students to view business situations differently and use research methods to identify solutions that foster organizational efficiency, growth, and long-term sustainability.",
  },
];

const OptionsView = () => {
  const updateData = useGlobalStore((state) => state.updateData);

  return (
    <div>
      <h3 className="text-2xl font-semibold mb-8">Choose from options</h3>
      <div className="grid grid-col-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4  max-w-full">
        {options?.map((opt, i) => (
          <div key={i} onClick={() => updateData({ isOptionModalOpen: true, data: opt })} className="">
            <div className="flex flex-col relative h-56 max-h-56 overflow-hidden">
              <img
                src={opt.mainImg}
                alt="mainimg"
                className="h-56 max-h-56 group-hover:scale-125 transition-all duration-1000 rounded-2xl"
              />
              <div className="absolute bg-[#5f73df] text-white dark:text-gray-50 text-sm px-3 py-1 m-2 shadow rounded-2xl">
                <span className=" text-default-100 dark:text-gray-50">Save</span> $5{' '}
                <span className=" text-default-100 dark:text-gray-50">- Limited time offer</span>
              </div>
            </div>
            <div className="flex flex-col mt-6 px-2">
              <small className="text-default-500 text-xs mb-1">Business Idea</small>
              <big className="font-bold">{opt.title}</big>
              <p className="mt-2 line-clamp-3 text-default-500">{opt.details}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OptionsView;
