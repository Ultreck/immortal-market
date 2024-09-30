import useTemplateStore from '@/store/template.js';

export const useSelectionActions = ({ id }) => {
  const deleteElements = useTemplateStore((state) => state.deleteElements);
  const addElements = useTemplateStore((state) => state.addElements);
  const updatePage = useTemplateStore((state) => state.updatePage);
  const updateElements = useTemplateStore((state) => state.updateElements);
  const groupElements = useTemplateStore((state) => state.groupElements);
  const ungroupElements = useTemplateStore((state) => state.ungroupElements);
  const selectedElements = useTemplateStore((state) => state.template.selectedElements);
  const page = useTemplateStore(({ template }) => template.pages.find((page) => page.id === id));

  const handleAction = async (action) => {
    if (action === 'copy') await handleCopy();
    if (action === 'duplicate') handleDuplicate();
    if (action === 'delete') handleDelete();
    if (action === 'move-top') handleMoveToTop();
    if (action === 'move-bottom') handleMoveToBottom();
    if (action === 'move-up') handleMoveUp();
    if (action === 'move-down') handleMoveDown();
    if (action === 'group') handleGroup();
    if (action === 'ungroup') handleUngroup();
    if (action === 'align-left') handleAlignLeft();
    if (action === 'align-center') handleAlignCenter();
    if (action === 'align-right') handleAlignRight();
    if (action === 'align-top') handleAlignTop();
    if (action === 'align-middle') handleAlignMiddle();
    if (action === 'align-bottom') handleAlignBottom();
  };

  const handleDuplicate = () => {
    const _elements = page.elements.filter((element) => selectedElements.includes(element.id));
    const duplicatedElements = _elements.map((element) => {
      return { ...element, id: crypto.randomUUID(), x: element.x + 10, y: element.y + 10 };
    });
    addElements(duplicatedElements, page.id);
  };

  const handleDelete = () => deleteElements(selectedElements, page.id);

  const handleMoveToTop = () => {
    const right = page.elements.filter((el) => selectedElements.includes(el.id));
    const left = page.elements.filter((el) => !selectedElements.includes(el.id));
    updatePage({ elements: [...left, ...right] }, page.id, true);
  };

  const handleMoveToBottom = () => {
    const left = page.elements.filter((el) => selectedElements.includes(el.id));
    const right = page.elements.filter((el) => !selectedElements.includes(el.id));
    updatePage({ elements: [...left, ...right] }, page.id, true);
  };

  const handleMoveUp = () => {
    const _elements = [...page.elements];
    const selectedIndices = selectedElements.map((id) => _elements.findIndex((el) => el.id === id));
    for (let i = selectedIndices.length - 1; i >= 0; i--) {
      const index = selectedIndices[i];
      if (index < _elements.length - 1) {
        [_elements[index], _elements[index + 1]] = [_elements[index + 1], _elements[index]];
      }
    }
    updatePage({ elements: _elements }, page.id, true);
  };

  const handleMoveDown = () => {
    const _elements = [...page.elements];
    const selectedIndices = selectedElements.map((id) => _elements.findIndex((el) => el.id === id));
    for (let i = 0; i < selectedIndices.length; i++) {
      const index = selectedIndices[i];
      if (index > 0) {
        [_elements[index], _elements[index - 1]] = [_elements[index - 1], _elements[index]];
      }
    }
    updatePage({ elements: _elements }, page.id, true);
  };

  const handleCopy = async () => {
    const _elements = page.elements.filter((element) => selectedElements.includes(element.id));
    const textBlob = new Blob([JSON.stringify(_elements)], { type: 'text/plain' });
    await navigator.clipboard.write([new ClipboardItem({ 'text/plain': textBlob })]);
  };

  const handleGroup = () => {
    groupElements(selectedElements, page.id);
  };

  const handleUngroup = () => {
    const group = page.elements.find((el) => el.id === selectedElements[0]).group;
    ungroupElements(group, page.id);
  };

  const handleAlignLeft = () => {
    let _elements = page.elements.filter((element) => selectedElements.includes(element.id));
    const x = Math.min(..._elements.map((el) => el.x));
    _elements = _elements.map((el) => ({ ...el, x }));
    updateElements(_elements, page.id, true);
  };

  const handleAlignCenter = () => {
    let _elements = page.elements.filter((element) => selectedElements.includes(element.id));
    const minX = Math.min(..._elements.map((el) => el.x));
    const maxX = Math.max(..._elements.map((el) => el.x + el.width));
    const centerX = (minX + maxX) / 2;
    _elements = _elements.map((el) => ({
      ...el,
      x: centerX - el.width / 2,
    }));
    updateElements(_elements, page.id, true);
  };

  const handleAlignRight = () => {
    let _elements = page.elements.filter((element) => selectedElements.includes(element.id));
    const maxRight = Math.max(..._elements.map((el) => el.x + el.width));
    _elements = _elements.map((el) => ({
      ...el,
      x: maxRight - el.width,
    }));
    updateElements(_elements, page.id, true);
  };

  const handleAlignTop = () => {
    let _elements = page.elements.filter((element) => selectedElements.includes(element.id));
    const y = Math.min(..._elements.map((el) => el.y));
    _elements = _elements.map((el) => ({ ...el, y }));
    updateElements(_elements, page.id, true);
  };

  const handleAlignMiddle = () => {
    let _elements = page.elements.filter((element) => selectedElements.includes(element.id));
    const minY = Math.min(..._elements.map((el) => el.y));
    const maxY = Math.max(..._elements.map((el) => el.y + el.height));
    const centerY = (minY + maxY) / 2;
    _elements = _elements.map((el) => ({
      ...el,
      y: centerY - el.height / 2,
    }));
    updateElements(_elements, page.id, true);
  };

  const handleAlignBottom = () => {
    let _elements = page.elements.filter((element) => selectedElements.includes(element.id));
    const maxBottom = Math.max(..._elements.map((el) => el.y + el.height));
    _elements = _elements.map((el) => ({
      ...el,
      y: maxBottom - el.height,
    }));
    updateElements(_elements, page.id, true);
  };

  return {
    handleAction,
  };
};
