import Drawer from '@/components/ui/Drawer.jsx';
import PropTypes from 'prop-types';
import { useSearchKeywords } from '../../../api/sentiment.js';
import { Skeleton, Card, Chip, Image } from '@heroui/react';
import { getImageLink } from '@/lib/utils.js';

const KeywordInsightsList = ({ isOpen, onClose, keyword }) => {
  const { data: { insights = [] } = {}, isLoading } = useSearchKeywords(keyword.toLowerCase());

  const handleClick = (slug) => {
    window.open(`https://snapshots.statisense.co/i/${slug}`, '_blank');
  };

  return (
    <Drawer isOpen={isOpen} onClose={onClose} padding={false}>
      <div className="px-10 py-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold">{keyword}</h2>
        </div>
        <div className="w-full space-y-5">
          {isLoading ? (
            <>
              <Skeleton className="h-[120px] rounded-2xl" />
              <Skeleton className="h-[120px] rounded-2xl" />
              <Skeleton className="h-[120px] rounded-2xl" />
              <Skeleton className="h-[120px] rounded-2xl" />
              <Skeleton className="h-[120px] rounded-2xl" />
            </>
          ) : (
            insights.map((insight, index) => (
              <Card key={index} shadow="none" className="border border-default-200">
                <div className="flex flex-row items-start px-7 py-6 space-x-5">
                  {!!insight.media.length && (
                    <Image
                      src={getImageLink(insight.media[0], { bucket: 'statisense' })}
                      alt={insight.title}
                      className="mt-1 aspect-square min-w-[80px] max-w-[80px] rounded-xl object-cover object-top md:min-w-[100px] md:max-w-[100px] cursor-pointer"
                      loading="lazy"
                      onClick={() => handleClick(insight.slug)}
                    />
                  )}
                  <div>
                    <h5
                      onClick={() => handleClick(insight.slug)}
                      className="cursor-pointer font-medium md:text-lg !leading-tight"
                    >
                      {insight.title}
                    </h5>
                    <p className="mt-2 line-clamp-2 text-base leading-tight opacity-70">
                      {insight.excerpt ?? insight.body}
                    </p>
                    {!!insight.source && (
                      <Chip
                        variant="bordered"
                        color="default"
                        className="bg-default-200/90 px-2 text-sm mt-2"
                        size="sm"
                      >
                        <span className="capitalize">{insight.source.name}</span>
                      </Chip>
                    )}
                  </div>
                </div>
              </Card>
            ))
          )}
        </div>
      </div>
    </Drawer>
  );
};

KeywordInsightsList.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  keyword: PropTypes.string.isRequired,
};

export default KeywordInsightsList;
