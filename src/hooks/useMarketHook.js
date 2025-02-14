
const timeFrames = [
  '30s',
  '5m',
  '15m',
  '20m',
  '1h',
  '4h',
  '1m',
  '2m',
  '3m',
  '30m',
  '2h',
  '6h',
  '8h',
  '12h',
  '1D',
  '3D',
  '1W',
  '1M',
  '3M',
];
const useMarketHook = () => {
  const [timeTab, setTimeTab] = useState('30s');
  const [visibleTimeFrames, setVisibleTimeFrames] = useState(timeFrames.slice(0, 6)); 
  const [isOpen, setIsOpen] = useState(false);
  const hiddenTimeFrames = timeFrames.slice(6);
  

  const handleTimeFrameChange = (key) => {
    setTimeTab(key);
    const updatedTabs = [...visibleTimeFrames];
    updatedTabs[updatedTabs.length - 1] = key;
    setVisibleTimeFrames(updatedTabs);
  };
  return {
    handleTimeFrameChange,
    setTimeTab,
    setIsOpen,
    timeTab,
    isOpen,
    timeFrames,
    hiddenTimeFrames,
    visibleTimeFrames,
  };
};

export default useMarketHook;
