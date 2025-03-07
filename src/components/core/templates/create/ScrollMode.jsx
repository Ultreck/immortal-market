import Page from '@/components/core/templates/create/Page.jsx';
import NewPageButton from '@/components/core/templates/create/NewPageButton.jsx';
import useDesignStore from '@/store/design.js';
import { useRef } from 'react';

const ScrollMode = () => {
  const root = useRef(null);
  const pages = useDesignStore((state) => state.pages);
  const updateStore = useDesignStore((state) => state.updateStore);

  const handleParentClick = (e) => {
    if (e.target === root.current) {
      updateStore({ selectedElements: [], selectedPage: null, activeElement: null });
    }
  };

  return (
    <div className="h-full w-full overflow-y-auto py-10 px-10" onClick={handleParentClick} ref={root} id="scrollable">
      <div className="mx-auto w-max">
        <div className="space-y-6 flex flex-col items-center w-max mx-auto select-none">
          {pages.map((page) => (
            <Page key={page.id} id={page.id} />
          ))}
          <NewPageButton />
        </div>
      </div>
    </div>
  );
};

export default ScrollMode;
