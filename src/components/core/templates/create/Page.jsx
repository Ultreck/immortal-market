import useDesignStore from '@/store/design.js';
import { cn } from '@/lib/utils.js';
import PropTypes from 'prop-types';
import { InView } from 'react-intersection-observer';
import PageActions from '@/components/core/templates/create/PageActions.jsx';
import PageTitle from './PageTitle';
import PageContent from '@/components/core/templates/create/PageContent.jsx';
import PageCommentBadge from '@/components/core/templates/create/comment/PageCommentBadge.jsx';
import { Chip } from '@heroui/react';
import { useEffect, useRef } from 'react';
import FormStatus from './FormStatus';
import PollStatus from './PollStatus';

const Page = ({ id }) => {
  const ref = useRef(null);
  const page = useDesignStore((state) => state.pages.find((p) => p.id === id));
  const updateStore = useDesignStore((state) => state.updateStore);
  const selected = useDesignStore((state) => state.selectedPage === id);
  const isCommentsVisible = useDesignStore((state) => state.isCommentsOpen);
  const activePage = useDesignStore((state) => state.activePage);
  const pendingActivePage = useDesignStore((state) => state.pendingActivePage);

  useEffect(() => {
    if (pendingActivePage === id && activePage !== id) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
      updateStore({ pendingActivePage: null });
    }
  }, [activePage, id, pendingActivePage, updateStore]);

  return (
    <div ref={ref}>
      <div className="flex items-center justify-between mb-2 px-1.5" style={{ minWidth: 200 }}>
        <div className="flex items-center gap-1">
          <PageTitle id={id} title={page.title} />
          {page.type === 'modal' && (
            <Chip variant="solid" color="danger" classNames={{ content: 'font-semibold' }}>
              Modal
            </Chip>
          )}
        </div>
        <div className="flex items-center gap-3">
          <FormStatus page={id} />
          <PollStatus page={id} />
          <PageActions id={id} />
        </div>
      </div>
      <div
        className={cn('border-2 relative border-transparent p-0.5 w-max radius-5', {
          'border-primary-500': selected,
        })}
      >
        {isCommentsVisible && <PageCommentBadge id={id} />}
        <InView
          as="div"
          threshold={0.5}
          onChange={(inView) => {
            if (inView) updateStore({ activePage: id });
          }}
          className="border border-default-200"
        >
          <PageContent key={id} id={id} />
        </InView>
      </div>
    </div>
  );
};

Page.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Page;
