import PropTypes from 'prop-types';

const Keyword = ({ keywords, isLoading }) => {

  const getSizeClass = (count) => {
    if (count === 1) return 'text-sm';
    if (count === 2) return 'text-md';
    if (count >= 3) return 'text-lg';
    return 'text-sm';
  };

  if (isLoading) {
    return (
      <section className='mt-4 card-border-2 py-3 px-2 justify-items-center text-slate-600 flex flex-wrap justify-center sm:grid grid-cols-3 md:grid-cols-5 gap-x-2 gap-y-3'>
        {Array.from({ length: 10 }).map((_, index) => (
          <div
            key={`skeleton-${index}`}
            className="h-8 bg-gray-200 rounded animate-pulse"
            style={{ width: `${Math.floor(Math.random() * 80) + 20}%` }}
          ></div>
        ))}
      </section>
    );
  }

  if (!keywords || keywords.length === 0) {
    return (
      <section className='mt-4 card-border-2 py-3 px-2 justify-items-center text-slate-600 flex flex-wrap justify-center sm:grid grid-cols-3 md:grid-cols-5 gap-x-2 gap-y-3'>
        <p className="text-center col-span-full text-slate-400">No keywords found.</p>
      </section>
    );
  }

  return (
    <section className='mt-4 card-border-2 py-3 px-2 justify-items-center text-slate-600 flex flex-wrap justify-center sm:grid grid-cols-3 md:grid-cols-5 gap-x-2 gap-y-3'>
      {keywords.map((keyword, index) => (
        <span
          key={`${keyword.keyword}-${index}`}
          className={getSizeClass(keyword.count)}
        >
          {keyword.keyword}
        </span>
      ))}
    </section>
  );
};

Keyword.propTypes = {
  keywords: PropTypes.arrayOf(
    PropTypes.shape({
      keyword: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired,
    })
  ).isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default Keyword;