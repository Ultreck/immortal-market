import useTemplateStore from '@/store/template.js';

const PageIndicator = () => {
  const current = useTemplateStore(({ template }) => {
    return template.pages.findIndex((p) => p.id === template.activePage) + 1;
  });
  const total = useTemplateStore(({ template }) => template.pages.length);

  return (
    <p className="leading-none">
      Page {current}/{total}
    </p>
  );
};

export default PageIndicator;
