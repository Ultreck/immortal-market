import { AnimatePresence, motion } from 'framer-motion';
import Bold from '@/components/core/templates/create/tools/elements/Bold.jsx';
import Italic from '@/components/core/templates/create/tools/elements/Italic.jsx';
import Underline from '@/components/core/templates/create/tools/elements/Underline.jsx';
import TextColor from '@/components/core/templates/create/tools/elements/TextColor.jsx';
import Background from './elements/Background.jsx';
import ChartConfig from './elements/ChartConfig.jsx';
import useTemplateStore from '@/store/template.js';
import TextAlign from './elements/TextAlign.jsx';
import { createElement, Fragment, useMemo } from 'react';
import Border from './elements/Border.jsx';
import Opacity from './elements/Opacity.jsx';
import TableConfig from '@/components/core/templates/create/tools/elements/TableConfig.jsx';
import Line from './elements/Line.jsx';
import IconConfig from './elements/IconConfig.jsx';
import { getElementTools } from '@/lib/elements.js';
import Animation from './elements/Animation.jsx';
import AdvancedChartConfig from './elements/AdvancedChartConfig.jsx';
import Shadow from './elements/Shadow.jsx';
import FrameTabsConfig from './elements/FrameTabsConfig.jsx';
import FrameCarouselConfig from './elements/FrameCarouselConfig.jsx';
import InfographicConfig from '@/components/core/templates/create/tools/elements/InfographicConfig.jsx';
import Colors from './elements/Colors.jsx';
import Font from '@/components/core/templates/create/tools/elements/Font.jsx';
import MapConfig from '@/components/core/templates/create/tools/elements/map/MapConfig.jsx';

const mapping = {
  bold: { type: 'multiple', component: Bold },
  italic: { type: 'multiple', component: Italic },
  underline: { type: 'multiple', component: Underline },
  font: { type: 'multiple', component: Font },
  'text-color': { type: 'multiple', component: TextColor },
  'background-color': { type: 'multiple', component: Background },
  'text-align': { type: 'multiple', component: TextAlign },
  chart: { type: 'single', component: ChartConfig },
  icon: { type: 'single', component: IconConfig },
  table: { type: 'single', component: TableConfig },
  border: { type: 'multiple', component: Border },
  opacity: { type: 'multiple', component: Opacity },
  line: { type: 'multiple', component: Line },
  animation: { type: 'multiple', component: Animation },
  'advanced-chart': { type: 'single', component: AdvancedChartConfig },
  shadow: { type: 'multiple', component: Shadow },
  tabs: { type: 'single', component: FrameTabsConfig },
  carousel: { type: 'single', component: FrameCarouselConfig },
  infographic: { type: 'single', component: InfographicConfig },
  colors: { type: 'single', component: Colors },
  map: { type: 'single', component: MapConfig },
};

const ElementTools = () => {
  const selectedElements = useTemplateStore((state) => state.template.selectedElements);
  const updateElements = useTemplateStore((state) => state.updateElements);
  const page = useTemplateStore(({ template }) => {
    return template.pages.find((p) => p.elements.some((el) => selectedElements.includes(el.id)));
  });
  const elements = selectedElements.map((id) => page?.elements.find((el) => el.id === id));

  const tools = useMemo(() => {
    if (!page) return [];
    let _tools = elements.map((el) => getElementTools(el) || []);
    _tools = _tools.reduce((acc, tools) => acc.filter((tool) => tools.includes(tool)), _tools[0]);
    const singles = Object.keys(mapping).filter((tool) => mapping[tool].type === 'single');
    if (_tools.some((tool) => singles.includes(tool)) && selectedElements.length > 1) {
      return _tools.filter((tool) => !singles.includes(tool));
    }
    return _tools;
  }, [elements, page, selectedElements.length]);

  const handleUpdateElements = (elements) => {
    updateElements(elements, page.id, true);
  };

  return (
    <AnimatePresence>
      {tools.length > 0 && (
        <div className="fixed top-1/2 -translate-y-1/2 right-0">
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="rounded-l-3xl rounded-r bg-default-200 dark:bg-default-100 flex flex-col items-center py-4 space-y-2 px-4"
          >
            {tools.map((tool) => {
              const { type, component } = mapping[tool];
              return (
                <Fragment key={tool}>
                  {type === 'single' && elements.length === 1 && (
                    <>
                      {createElement(component, {
                        key: tool,
                        element: elements[0],
                        onChange: (el) => handleUpdateElements([el]),
                      })}
                    </>
                  )}
                  {type === 'multiple' && (
                    <>
                      {createElement(component, {
                        key: tool,
                        elements,
                        onChange: (els) => handleUpdateElements(els),
                      })}
                    </>
                  )}
                </Fragment>
              );
            })}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ElementTools;
