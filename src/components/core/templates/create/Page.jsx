import useTemplateStore from '@/store/template.js';
import { cn } from '@/lib/utils.js';
import PropTypes from 'prop-types';
import { InView } from 'react-intersection-observer';
import PageActions from '@/components/core/templates/create/PageActions.jsx';
import PageTitle from './PageTitle';
import PageContent from '@/components/core/templates/create/PageContent.jsx';
import PageCommentBadge from '@/components/core/templates/create/comment/PageCommentBadge.jsx';
import { Chip } from '@heroui/react';
import { useEffect, useRef } from 'react';

const Page = ({ id, showTitle = true }) => {
  const ref = useRef(null);
  const type = useTemplateStore((state) => state.template.pages.find((p) => p.id === id).type);
  const updateTemplate = useTemplateStore((state) => state.updateTemplate);
  const selected = useTemplateStore((state) => state.template.selectedPage === id);
  const isCommentsVisible = useTemplateStore((state) => state.template.isCommentsVisible);
  const activePage = useTemplateStore((state) => state.template.activePage);
  const pendingActivePage = useTemplateStore((state) => state.template.pendingActivePage);

  useEffect(() => {
    if (pendingActivePage === id && activePage !== id) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
      updateTemplate({ pendingActivePage: null });
    }
  }, [activePage, id, pendingActivePage, updateTemplate]);

  return (
    <div ref={ref}>
      {showTitle && (
        <div className="flex items-center justify-between mb-2 px-1.5" style={{ minWidth: 200 }}>
          <PageTitle id={id} />
          <div className="flex items-center space-x-2">
            {type === 'modal' && (
              <Chip variant="solid" color="danger" classNames={{ content: 'font-semibold' }}>
                Modal
              </Chip>
            )}
            <PageActions id={id} />
          </div>
        </div>
      )}
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
            if (inView) updateTemplate({ activePage: id });
          }}
          className="border border-default-200"
        >
          <PageContent id={id} />
        </InView>
      </div>
    </div>
  );
};

Page.propTypes = {
  id: PropTypes.string.isRequired,
  showTitle: PropTypes.bool,
};

export default Page;
