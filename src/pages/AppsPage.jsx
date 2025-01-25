import DashboardHeader from '@/components/core/shared/DashboardHeader.jsx';
import { TbSearch } from 'react-icons/tb';
import { Input, ScrollShadow } from '@heroui/react';
import { FaPlusSquare, FaRegBookmark, FaRegHeart } from 'react-icons/fa';
import { FiShare2 } from 'react-icons/fi';
import { ReactTyped } from 'react-typed';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

const OverviewPage2 = () => {
  const cards = [
    'https://loremflickr.com/320/240/art',
    'https://loremflickr.com/320/241/art',
    'https://loremflickr.com/320/242/art',
    'https://loremflickr.com/320/243/art',
    'https://loremflickr.com/320/244/art',
    'https://loremflickr.com/320/245/art',
    'https://loremflickr.com/320/246/art',
    'https://loremflickr.com/320/247/art',
    'https://loremflickr.com/320/248/art',
    'https://loremflickr.com/320/249/art',
    'https://loremflickr.com/320/250/art',
    'https://loremflickr.com/320/251/art',
    'https://loremflickr.com/320/252/art',
    'https://loremflickr.com/320/253/art',
  ];

  const bannerCards = [
    { description: 'Create Maps', icon: FaPlusSquare },
    { description: 'New Design', url: 'https://loremflickr.com/320/247/art' },
    { description: 'New Template', url: 'https://loremflickr.com/320/248/art' },
    { description: 'Create Banner', url: 'https://loremflickr.com/320/249/art' },
    { description: 'Create Charts', url: 'https://loremflickr.com/320/250/art' },
  ];

  return (
    <div>
      <DashboardHeader
        content={
          <div className="relative">
            <Input
              type="text"
              name="query"
              id="query"
              size="lg"
              classNames={{
                input: 'text-base',
                base: 'transition-all duration-300 w-[320px]',
                inputWrapper: 'h-13 rounded-full',
              }}
              startContent={<TbSearch size="24" className="mx-3 opacity-30" />}
              placeholder="Search.."
            />
          </div>
        }
      />
      <div className="px-5">
        <section className="container">
          <div className="bg-[#B4D7FF] flex items-center justify-between rounded-3xl px-16 py-10 overflow-hidden relative">
            <div>
              <h1 className="text-4xl font-bold my-3">
                What are you{' '}
                <ReactTyped
                  className="bg-transparent"
                  strings={['creating', 'analyzing', 'building', 'presenting', 'reporting']}
                  typeSpeed={40}
                  backSpeed={50}
                  backDelay={3000}
                  loop
                />{' '}
                today
              </h1>
              <p className="text-lg leading-none mt-2">
                Start by creating a new design or exploring banking templates.
              </p>
              <p className="text-[16px]">Adjust gradients, stylize, and more.</p>
              <button className="text-white rounded-xl px-5 py-3 mt-5 my-3 bg-[#8B3DFF] ">Design with Ease</button>
            </div>
            <div className="text w-1/3 absolute -right-20 top-30 scale-125 rotate-[10deg]">
              <img src="https://loremflickr.com/320/240/computer" alt="" className="rounded-3xl" />
            </div>
          </div>
        </section>
        <section className="container mt-12">
          <h1 className="text-2xl font-bold mb-6">You may want to try</h1>
          <ScrollShadow hideScrollBar offset={100} orientation="horizontal" className="max-w-[100%]">
            <div className="text flex gap-5">
              {bannerCards.map((card) => (
                <BannerCard key={card.rul} data={card} />
              ))}
            </div>
          </ScrollShadow>
        </section>
        <section className="container mt-12">
          <h1 className="text-2xl font-bold mb-6">Start with templates</h1>
          <div className="text grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-auto lg:grid-cols-4 xl:grid-cols-5 gap-5 pb-5">
            {cards.map((url) => {
              return (
                <CardComponents imgUrl={url} key={url}>
                  <button className="bg-red-500 absolute top-2 text-xs px-2 py-1 gap-2 right-2 flex items-center justify-center rounded-lg">
                    <FaRegHeart className="text-lg " /> 1000
                  </button>
                  <div className="text flex justify-between items-center px-3 py-3 space-x-4">
                    <button className="bg-gray-500/80 w-8 h-8 flex items-center justify-center rounded-lg">
                      <FiShare2 />
                    </button>
                    <button className="bg-gray-500/80 w-8 h-8 flex items-center justify-center rounded-lg">
                      <FaRegBookmark />
                    </button>
                  </div>
                </CardComponents>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

const BannerCard = ({ data }) => {
  return (
    <div
      className={`relative flex justify-center items-center p-3 max-w-xs bg-gray-200 w-60 h-40 overflow-hidden mx-auto rounded-2xl shadow-lg group`}
    >
      {data.icon && (
        <span className="text transition-transform group-hover:scale-110 text-2xl">
          <data.icon />
        </span>
      )}
      {data.url && <img className="transition-transform group-hover:scale-110 w-full h-full" src={data.url} alt="" />}
    </div>
  );
};

BannerCard.propTypes = {
  data: PropTypes.any,
};

const CardComponents = ({ children, imgUrl }) => {
  const [randomHeight, setRandomHeight] = useState(null);

  useEffect(() => {
    const minHeight = 250;
    const maxHeight = 350;
    const randomValue = Math.floor(Math.random() * (maxHeight - minHeight + 1)) + minHeight;
    setRandomHeight(`${randomValue}px`);
  }, []);
  return (
    <div
      className={`relative max-w-xs overflow-hidden mx-auto rounded-2xl shadow-lg group`}
      style={{ height: randomHeight }}
    >
      <img className="transition-transform group-hover:scale-110 w-full h-full" src={imgUrl} alt="" />
      <div className="text absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent">
        <div className="text-white">{children}</div>
      </div>
    </div>
  );
};

CardComponents.propTypes = {
  children: PropTypes.any,
  imgUrl: PropTypes.string,
};

export default OverviewPage2;
