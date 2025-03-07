import useDesignStore from '@/store/design.js';

const PageIndicator = () => {
  const current = useDesignStore((state) => {
    return state.pages.findIndex((p) => p.id === state.activePage) + 1;
  });
  const total = useDesignStore((state) => state.pages.length);

  return (
    <p className="leading-none whitespace-nowrap">
      Page {current}/{total}
    </p>
  );
};

export default PageIndicator;
