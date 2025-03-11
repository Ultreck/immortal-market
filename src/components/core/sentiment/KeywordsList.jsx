import { useState } from 'react';
import { Button, Skeleton, Tooltip, useDisclosure } from '@heroui/react';
import PropTypes from 'prop-types';
import KeywordChat from './KeywordChat';
import KeywordInsightsList from './KeywordInsightsList';
import { useGetTrendingKeywords } from '@/api/sentiment';
import { LuMessageCircle } from 'react-icons/lu';

const KeywordsList = ({ category }) => {
  const [query, setQuery] = useState('');
  const { data: { keywords = [] } = {}, isLoading: isKeywordsLoading } = useGetTrendingKeywords(category);
  const { isOpen: isSnapShotOpen, onOpen: onSnapShotOpen, onClose: onSnapShotClose } = useDisclosure();
  const { isOpen: isChatOpen, onOpen: onChatOpen, onClose: onChatClose } = useDisclosure();

  const handleClick = (keyword) => {
    setQuery(keyword);
    onSnapShotOpen();
  };

  return (
    <>
      <div className="border border-default-200 rounded-2xl h-[calc(100vh-200px)] overflow-y-auto">
        {isKeywordsLoading ? (
          <section className="divide-y divide-default-200">
            {Array.from({ length: 9 }).map((_, index) => (
              <div className="flex flex-col py-4 px-5" key={`skeleton-${index}`}>
                <div className="flex items-center justify-between">
                  <Skeleton className="h-4 rounded-full w-1/3"></Skeleton>
                  <Skeleton className="w-6 h-6 rounded-full"></Skeleton>
                </div>
                <Skeleton className="h-4 rounded-full w-1/4 mt-1"></Skeleton>
              </div>
            ))}
          </section>
        ) : (
          <div>
            {!keywords.length ? (
              <p className="text-md opacity-50 px-5 py-4">No keywords found</p>
            ) : (
              <section className="divide-y divide-default-200 py-1">
                {keywords.map((keyword, index) => (
                  <div className="flex items-center justify-between py-3 pl-5 pr-3" key={`${keyword.keyword}-${index}`}>
                    <div>
                      <h1
                        className="font-semibold cursor-pointer leading-tight"
                        onClick={() => handleClick(keyword.keyword)}
                      >
                        {keyword.keyword}
                      </h1>
                      <p onClick={() => handleClick(keyword.keyword)} className="text-sm opacity-70">
                        {keyword.count} occurrences
                      </p>
                    </div>
                    <Tooltip
                      content={
                        <div className="p-1">
                          <p>Ask AI</p>
                        </div>
                      }
                      placement="top"
                    >
                      <Button isIconOnly variant="light" size="sm" onPress={onChatOpen}>
                        <LuMessageCircle size="16" />
                      </Button>
                    </Tooltip>
                  </div>
                ))}
              </section>
            )}
          </div>
        )}
      </div>

      <KeywordChat isOpen={isChatOpen} onClose={onChatClose} />
      <KeywordInsightsList keyword={query} isOpen={isSnapShotOpen} onClose={onSnapShotClose} />
    </>
  );
};

KeywordsList.propTypes = {
  category: PropTypes.string.isRequired,
};

export default KeywordsList;
