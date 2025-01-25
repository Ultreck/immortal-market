import { useAddToWatchList, useGetWatchList, useRemoveFromWatchList } from '@/api/market';
import { Button, Skeleton } from '@nextui-org/react';
import { TbMinus, TbPlus } from 'react-icons/tb';
import { useToast } from '@/hooks/use-toast';
import { useQueryClient } from '@tanstack/react-query';
import PropTypes from 'prop-types';
// import AuthOnly from '@/components/core/shared/AuthOnly';
// import useGlobalStore from '@/store/global';
// import { useShallow } from 'zustand/react/shallow';

const WatchlistButton = ({ stock }) => {
  return (
    <LoggedIn stock={stock} />
    // <AuthOnly fallback={<NotLoggedIn />} loader={<Skeleton className="h-[30px] w-[120px] rounded-full" />}>
    // </AuthOnly>
  );
};

WatchlistButton.propTypes = {
  stock: PropTypes.object.isRequired,
};

export default WatchlistButton;
//
// const NotLoggedIn = () => {
//   const updateData = useGlobalStore(useShallow((s) => s.updateData));
//
//   return (
//     <Button
//       onClick={() => updateData({ isLoginModalOpen: true })}
//       startContent={<TbPlus size="20" />}
//       radius="full"
//       variant="bordered"
//       className="px-4 text-base"
//     >
//       Watchlist
//     </Button>
//   );
// };

const LoggedIn = ({ stock }) => {
  const toast = useToast();
  const qc = useQueryClient();
  const { mutateAsync: addToWatchlist, isPending: isAddToWatchlistLoading } = useAddToWatchList();
  const { mutateAsync: removeFromWatchlist, isPending: isRemoveFromWatchlistLoading } = useRemoveFromWatchList();
  const { data: { watchlist = [] } = {}, isLoading: isWatchlistLoading } = useGetWatchList();

  const isInWatchlist = watchlist.find((c) => c.stock._id === stock._id);

  const query = qc.getQueryState(['market', 'watchlist']);
  const isFetching = query.isInvalidated && query.fetchStatus === 'fetching';

  const handleAddToWatchlist = async () => {
    try {
      await addToWatchlist({ stock: stock._id });
      toast.success(`${stock.name} added to watchlist`);
      await qc.invalidateQueries({ queryKey: ['market', 'watchlist'] });
    } catch (e) {
      toast.error(e?.response?.data?.message ?? 'Something went wrong, please try again');
    }
  };

  const handleRemoveFromWatchlist = async () => {
    try {
      const w = watchlist.find((w) => w.stock._id === stock.id);
      await removeFromWatchlist({ id: w._id });
      toast.success(`${stock.name} removed from watchlist`);
      await qc.invalidateQueries({ queryKey: ['market', 'watchlist'] });
    } catch (e) {
      toast.error(e?.response?.data?.message ?? 'Something went wrong, please try again');
    }
  };

  return (
    <>
      {isWatchlistLoading ? (
        <Skeleton className="h-[30px] w-[120px] rounded-full" />
      ) : (
        <>
          {!isInWatchlist ? (
            <Button
              onClick={handleAddToWatchlist}
              isLoading={isAddToWatchlistLoading || isFetching}
              startContent={!(isAddToWatchlistLoading || isFetching) ? <TbPlus size="20" /> : null}
              radius="full"
              variant="bordered"
              className="px-4 text-base"
            >
              Watchlist
            </Button>
          ) : (
            <Button
              onClick={handleRemoveFromWatchlist}
              isLoading={isRemoveFromWatchlistLoading || isFetching}
              startContent={!(isRemoveFromWatchlistLoading || isFetching) ? <TbMinus size="20" /> : null}
              radius="full"
              variant="bordered"
              className="px-4 text-base"
            >
              Watchlist
            </Button>
          )}
        </>
      )}
    </>
  );
};

LoggedIn.propTypes = {
  stock: PropTypes.object.isRequired,
};
