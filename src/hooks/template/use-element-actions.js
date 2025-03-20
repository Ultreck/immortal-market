import useDesignStore from '@/store/design.js';

export const useElementActions = () => {
  const deleteElements = useDesignStore((state) => state.deleteElements);
  const selectedElements = useDesignStore((state) => state.selectedElements);
  const getElements = useDesignStore((state) => state.getElements);
  const duplicateElements = useDesignStore((state) => state.duplicateElements);
  const bringElementsForward = useDesignStore((state) => state.bringElementsForward);
  const sendElementsBackward = useDesignStore((state) => state.sendElementsBackward);
  const bringElementsToFront = useDesignStore((state) => state.bringElementsToFront);
  const sendElementsToBack = useDesignStore((state) => state.sendElementsToBack);
  const alignElementsLeft = useDesignStore((state) => state.alignElementsLeft);
  const alignElementsCenter = useDesignStore((state) => state.alignElementsCenter);
  const alignElementsRight = useDesignStore((state) => state.alignElementsRight);
  const alignElementsTop = useDesignStore((state) => state.alignElementsTop);
  const alignElementsMiddle = useDesignStore((state) => state.alignElementsMiddle);
  const alignElementsBottom = useDesignStore((state) => state.alignElementsBottom);
  const groupElements = useDesignStore((state) => state.groupElements);
  const ungroupElements = useDesignStore((state) => state.ungroupElements);

  const handleCopy = async () => {
    const elements = getElements((el) => selectedElements.includes(el.key));
    const textBlob = new Blob([JSON.stringify(elements)], { type: 'text/plain' });
    await navigator.clipboard.write([new ClipboardItem({ 'text/plain': textBlob })]);
  };

  const handleAction = async (action) => {
    if (action === 'copy') await handleCopy();
    if (action === 'duplicate') duplicateElements(selectedElements);
    if (action === 'delete') deleteElements(selectedElements);
    if (action === 'bring-forward') bringElementsForward(selectedElements);
    if (action === 'send-backward') sendElementsBackward(selectedElements);
    if (action === 'bring-to-front') bringElementsToFront(selectedElements);
    if (action === 'send-to-back') sendElementsToBack(selectedElements);
    if (action === 'align-left') alignElementsLeft(selectedElements);
    if (action === 'align-center') alignElementsCenter(selectedElements);
    if (action === 'align-right') alignElementsRight(selectedElements);
    if (action === 'align-top') alignElementsTop(selectedElements);
    if (action === 'align-middle') alignElementsMiddle(selectedElements);
    if (action === 'align-bottom') alignElementsBottom(selectedElements);
    if (action === 'group') groupElements(selectedElements);
    if (action === 'ungroup') ungroupElements(selectedElements[0]);
  };

  return {
    handleAction,
  };
};
