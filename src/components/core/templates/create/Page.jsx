import useTemplateStore from '@/store/template.js';
import { cn } from '@/lib/utils.js';
import PropTypes from 'prop-types';
import { InView } from 'react-intersection-observer';
import PageActions from '@/components/core/templates/create/PageActions.jsx';
import PageTitle from './PageTitle';
import PageContent from '@/components/core/templates/create/PageContent.jsx';

const Page = ({ id }) => {
  const updateTemplate = useTemplateStore((state) => state.updateTemplate);
  const selected = useTemplateStore((state) => state.template.selectedPage === id);

  return (
    <div>
      <div className="flex items-center justify-between mb-2 px-1.5" style={{ minWidth: 200 }}>
        <PageTitle id={id} />
        <PageActions id={id} />
      </div>
      <div className={cn('border-2 border-transparent p-0.5 w-max', { 'border-primary-500': selected })}>
        <InView
          as="div"
          threshold={0.5}
          onChange={(inView) => {
            if (inView) {
              updateTemplate({ activePage: id });
            }
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
};

export default Page;
