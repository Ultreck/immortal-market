import {
  Button,
  Checkbox,
  Popover,
  PopoverContent,
  PopoverTrigger,
  useDisclosure,
} from '@nextui-org/react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { TbSettings2 } from 'react-icons/tb';
import { useEffect, useState } from 'react';
import AutoCompleteNumberInput from '@/components/ui/AutoCompleteNumberInput';
import StandardStackedBarConfig from './standard-config/StandardStackedBarConfig';
import StandardBarCommonConfig from './standard-config/StandardBarCommonConfig';
import StandardPieCommonConfig from './standard-config/StandardPieCommonConfig';
import StandardAltBarConfig from './standard-config/StandardAltBarConfig';
import StandardMultipleBarConfig from './standard-config/StandardMultipleBarConfig';
import StandardBubbleChartConfig from './standard-config/StandardBubbleChartConfig';

const ChartConfig = ({ element, onChange }) => {
  const { isOpen, onOpenChange } = useDisclosure({ defaultOpen: false });

  return (
    <Popover
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      placement="left"
      showArrow
      offset={10}
      classNames={{ content: 'w-[400px]' }}
    >
      <PopoverTrigger>
        <Button isIconOnly variant="light" aria-label="Adjust font size" className="text-base">
          <TbSettings2 size="20" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 shadow border border-default-200">
        <div className="px-8 py-6 w-full">
          <ChartData element={element} onChange={onChange} onClose={onOpenChange} />
        </div>
      </PopoverContent>
    </Popover>
  );
};

const ChartData = ({ element, onChange, onClose }) => {
  const [tab, setTab] = useState('data');
  const { handleSubmit, control, watch } = useForm({
    defaultValues: {
      data: element.config.data,
      keys: element.config.keys,
    },
  });

  const onSubmit = async (values) => {
    // const { json, ...rest } = values;
    // const data = JSON.parse(json);
    // onChange({ ...element, config: { ...element.config, keys: rest, data } });
    // onClose();
  };

  const handleChange = (updatedItem) => {
    const updatedData = element.config.data.map((item, idx) =>
      idx === updatedItem.index ? { ...item, ...updatedItem } : item
    );
    onChange({ ...element, config: { ...element.config, data: updatedData } });
  };

  useEffect(() => {}, [element]);

  return (
    <div>
      {element.type === 'chart-s-stacked-bar' && <StandardStackedBarConfig element={element} onChange={onChange} />}
      {element.type === 'chart-s-stacked-bar-vertical' && (
        <StandardStackedBarConfig element={element} onChange={onChange} />
      )}
      {element.type === 'chart-s-line-area' && <StandardMultipleBarConfig element={element} onChange={onChange} />}
      {element.type === 'chart-s-line-area-vertical' && (
        <StandardMultipleBarConfig element={element} onChange={onChange} />
      )}
      {element.type === 'chart-s-line-bar' && <StandardBarCommonConfig element={element} onChange={onChange} />}
      {element.type === 'chart-s-area-bar' && <StandardBarCommonConfig element={element} onChange={onChange} />}
      {element.type === 'chart-s-area-bar-vertical' && (
        <StandardBarCommonConfig element={element} onChange={onChange} />
      )}
      {element.type === 'chart-s-line-bar-vertical' && (
        <StandardBarCommonConfig element={element} onChange={onChange} />
      )}
      {element.type === 'chart-s-bar' && <StandardBarCommonConfig element={element} onChange={onChange} />}
      {element.type === 'chart-s-bubble' && (
        <StandardBubbleChartConfig element={element} onChange={onChange} />
        // <>
        //   <div>
        //     <Checkbox
        //       isSelected={element.config.showXaxis}
        //       classNames={{ base: 'py-0' }}
        //       onValueChange={(v) => onChange({ ...element, config: { ...element.config, showXaxis: v } })}
        //     >
        //       Show X Axis
        //     </Checkbox>
        //   </div>
        //   <div>
        //     <Checkbox
        //       isSelected={element.config.showYaxis}
        //       classNames={{ base: 'py-0' }}
        //       onValueChange={(v) => onChange({ ...element, config: { ...element.config, showYaxis: v } })}
        //     >
        //       Show Y Axis
        //     </Checkbox>
        //   </div>
        //   <div>
        //     <Checkbox
        //       isSelected={element.config.showLegend}
        //       classNames={{ base: 'py-0' }}
        //       onValueChange={(v) => onChange({ ...element, config: { ...element.config, showLegend: v } })}
        //     >
        //       Show Legend
        //     </Checkbox>
        //   </div>
        //   <div>
        //     <Checkbox
        //       isSelected={element.config.showGridline}
        //       classNames={{ base: 'py-0' }}
        //       onValueChange={(v) =>
        //         onChange({
        //           ...element,
        //           config: { ...element.config, showGridline: v },
        //         })
        //       }
        //     >
        //       Show Grid Line
        //     </Checkbox>
        //   </div>
        //   <div className="flex items-center space-x-4">
        //     <p className="text-base opacity-75 whitespace-nowrap">No. of bubbles:</p>
        //     <AutoCompleteNumberInput
        //       onChange={(v) =>
        //         onChange({
        //           ...element,
        //           config: { ...element.config, bubbles: Number(v) },
        //         })
        //       }
        //       value={element.config.bubbles}
        //       min={1}
        //       max={element.config.data.length}
        //       ariaLabel="No of bubbles to Show"
        //     />
        //   </div>
        // </>
      )}
      {element.type === 'chart-s-area' && <StandardBarCommonConfig element={element} onChange={onChange} />}
      {element.type === 'chart-s-area-multiple' && <StandardStackedBarConfig element={element} onChange={onChange} />}
      {element.type === 'chart-s-line' && <StandardBarCommonConfig element={element} onChange={onChange} />}
      {element.type === 'chart-s-line-multiple' && <StandardStackedBarConfig element={element} onChange={onChange} />}
      {element.type === 'chart-s-bar-not-sep' && <StandardBarCommonConfig element={element} onChange={onChange} />}
      {element.type === 'chart-s-vertical-bar' && <StandardBarCommonConfig element={element} onChange={onChange} />}
      {element.type === 'chart-s-vertical-bar-no-sep' && (
        <StandardBarCommonConfig element={element} onChange={onChange} />
      )}
      {element.type === 'chart-s-bar-multiple' && <StandardMultipleBarConfig element={element} onChange={onChange} />}
      {element.type === 'chart-s-bar-multiple-vertical' && (
        <StandardMultipleBarConfig element={element} onChange={onChange} />
      )}
      {element.type === 'chart-s-pie' && <StandardPieCommonConfig element={element} onChange={onChange} />}
      {element.type === 'chart-s-semi-pie' && <StandardPieCommonConfig element={element} onChange={onChange} />}
      {element.type === 'chart-s-semi-circle' && <StandardPieCommonConfig element={element} onChange={onChange} />}
      {element.type === 'chart-s-doughnut' && <StandardPieCommonConfig element={element} onChange={onChange} />}
      {element.type === 'chart-s-doughnut-standard' && (
        <StandardPieCommonConfig element={element} onChange={onChange} />
      )}
      {element.type === 'chart-s-doughnut-crazy' && <StandardPieCommonConfig element={element} onChange={onChange} />}
      {element.type === 'chart-s-alt-bar' && <StandardAltBarConfig element={element} onChange={onChange} />}
    </div>
  );
};

const propTypes = {
  element: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    style: PropTypes.object,
    config: PropTypes.object,
  }),
  onChange: PropTypes.func.isRequired,
};

ChartConfig.propTypes = propTypes;

ChartData.propTypes = { ...propTypes, onBack: PropTypes.func, onClose: PropTypes.func };

export default ChartConfig;

