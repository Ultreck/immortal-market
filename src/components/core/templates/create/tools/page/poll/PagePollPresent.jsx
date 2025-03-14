import { useCreatePollResponse, useGetPoll, useGetPollResponse, useGetPollResponses } from '@/api/design';
import useBusiness from '@/hooks/use-business';
import { cn } from '@/lib/utils';
import useDesignStore from '@/store/design';
import { Button, Drawer, DrawerBody, DrawerContent, Spinner } from '@heroui/react';
import PropTypes from 'prop-types';
import { useState } from 'react';

const PagePollPresent = ({ page, isOpen, onClose }) => {
  const { id: business } = useBusiness();
  const id = useDesignStore((state) => state.id);
  const { data: { poll } = {}, isLoading: isPollLoading } = useGetPoll(business, id, page.id);
  const { mutateAsync: vote, isPending: isVoting } = useCreatePollResponse(business, id, page.id, poll?.id);
  const { data: { response } = {}, isLoading: isResponseLoading } = useGetPollResponse(business, id, page.id, poll?.id);
  const { data: { responses } = {} } = useGetPollResponses(business, id, page.id, poll?.id);
  const [selection, setSelection] = useState('');

  const handleVote = async () => {
    if (!selection || response) return;
    try {
      await vote({ poll: poll.id, selection });
    } catch (error) {
      console.error(error);
    }
  };

  const calculatePercentage = (option) => {
    if (!responses || responses.length === 0) return 0;
    const count = responses.filter((response) => response.selection === option).length;
    return Math.round((count / responses.length) * 100);
  };

  const handleOptionClick = (option) => {
    if (response) return;
    setSelection(option);
  };

  return (
    <Drawer isOpen={isOpen} onClose={onClose} size="xl" hideCloseButton>
      <DrawerContent>
        <DrawerBody className="py-10 px-12">
          {isPollLoading || isResponseLoading ? (
            <div className="flex justify-center items-center py-12">
              <Spinner size="lg" />
            </div>
          ) : (
            <>
              {!poll ? (
                <div className="text-center py-8">
                  <p className="text-lg">No poll available for this page.</p>
                </div>
              ) : (
                <div className="space-y-5">
                  <h4 className="text-lg font-semibold">{poll?.question}</h4>
                  <div className="space-y-4">
                    <div className="space-y-3">
                      {poll?.options.map((option) => {
                        const percentage = calculatePercentage(option);
                        const selected = response ? response.selection === option : selection === option;

                        return (
                          <div
                            key={option}
                            className={cn(
                              'relative border rounded-2xl px-5 py-3 transition-all',
                              selected ? 'border-primary bg-primary-50' : 'border-default-200 hover:border-default-300',
                              !response && 'cursor-pointer'
                            )}
                            onClick={() => handleOptionClick(option)}
                          >
                            <div className="flex justify-between items-center mb-1">
                              <div className="flex items-center gap-2">
                                <span className={selected ? 'font-medium' : ''}>{option}</span>
                              </div>
                              <span className="text-sm font-medium">{percentage}%</span>
                            </div>
                            <div className="w-full h-2 bg-default-100 rounded-full overflow-hidden mt-2">
                              <div
                                className={`h-full ${selected ? 'bg-primary' : 'bg-default-300'}`}
                                style={{ width: `${percentage}%` }}
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    {!response && (
                      <Button
                        color="primary"
                        className="w-full mt-4"
                        isLoading={isVoting}
                        isDisabled={!selection || isVoting}
                        onPress={handleVote}
                      >
                        Submit Vote
                      </Button>
                    )}
                    <div className="text-default-500 text-sm mt-4">Total votes: {responses?.length || 0}</div>
                  </div>
                </div>
              )}
            </>
          )}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

PagePollPresent.propTypes = {
  page: PropTypes.object.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default PagePollPresent;
