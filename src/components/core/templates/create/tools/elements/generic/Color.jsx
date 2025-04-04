import PropTypes from 'prop-types';
import useResolveValue from '@/hooks/template/use-resolve-value.js';
import ColorPicker from '@/components/ui/ColorPicker.jsx';
import useDesignStore from '@/store/design.js';

const Color = ({ elements }) => {
  const tool = useDesignStore((state) => state.tool);
  const openTool = useDesignStore((state) => state.openTool);
  const closeTool = useDesignStore((state) => state.closeTool);
  const updateElements = useDesignStore((state) => state.updateElements);
  const value = useResolveValue(elements.map((e) => e.style.color));

  const handleChange = (v) => {
    if (!v) return;
    updateElements(
      elements.map((e) => {
        return {
          elementId: e.id,
          updates: { style: { ...e.style, color: v } },
        };
      })
    );
  };

  return (
    <div className="my-1">
      <ColorPicker
        color={value}
        onChange={handleChange}
        isOpen={tool === 'color'}
        onOpenChange={(v) => (v ? openTool('color') : closeTool())}
        trigger={
          <button
            className="my-2 w-[22px] h-[22px] rounded-full hover:brightness-105 cursor-pointer border-2"
            style={{ background: value }}
          />
        }
      />
    </div>
  );
};

Color.propTypes = {
  elements: PropTypes.arrayOf(PropTypes.object),
};

export default Color;
