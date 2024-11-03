import useTemplateStore from '@/store/template.js';

export const useActions = ({ id }) => {
  const deleteElements = useTemplateStore((state) => state.deleteElements);
  const addElements = useTemplateStore((state) => state.addElements);
  const updatePage = useTemplateStore((state) => state.updatePage);
  const updateElements = useTemplateStore((state) => state.updateElements);
  const groupElements = useTemplateStore((state) => state.groupElements);
  const ungroupElements = useTemplateStore((state) => state.ungroupElements);
  const selectedElements = useTemplateStore((state) => state.template.selectedElements);
  const getPage = useTemplateStore((state) => state.getPage);
  const addPage = useTemplateStore((state) => state.addPage);
  const deletePage = useTemplateStore((state) => state.deletePage);
  const movePageUp = useTemplateStore((state) => state.movePageUp);
  const movePageDown = useTemplateStore((state) => state.movePageDown);

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
    if (action === 'page-add') handleAddPage();
    if (action === 'page-delete') handleDeletePage();
    if (action === 'page-move-up') handleMovePageUp();
    if (action === 'page-move-down') handleMovePageDown();
    if (action === 'page-duplicate') handleDuplicatePage();
  };

  const handleDuplicate = () => {
    const page = getPage(id);
    const _elements = page.elements.filter((element) => selectedElements.includes(element.id));
    const duplicatedElements = _elements.map((element) => {
      return { ...element, id: crypto.randomUUID(), x: element.x + 10, y: element.y + 10 };
    });
    addElements(duplicatedElements, page.id);
  };

  const handleDelete = () => deleteElements(selectedElements, id);

  const handleMoveToTop = () => {
    const page = getPage(id);
    const right = page.elements.filter((el) => selectedElements.includes(el.id));
    const left = page.elements.filter((el) => !selectedElements.includes(el.id));
    updatePage({ elements: [...left, ...right] }, page.id, true);
  };

  const handleMoveToBottom = () => {
    const page = getPage(id);
    const left = page.elements.filter((el) => selectedElements.includes(el.id));
    const right = page.elements.filter((el) => !selectedElements.includes(el.id));
    updatePage({ elements: [...left, ...right] }, page.id, true);
  };

  const handleMoveUp = () => {
    const page = getPage(id);
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
    const page = getPage(id);
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
    const page = getPage(id);
    const _elements = page.elements.filter((element) => selectedElements.includes(element.id));
    const textBlob = new Blob([JSON.stringify(_elements)], { type: 'text/plain' });
    await navigator.clipboard.write([new ClipboardItem({ 'text/plain': textBlob })]);
  };

  const handleGroup = () => {
    groupElements(selectedElements, id);
  };

  const handleUngroup = () => {
    const page = getPage(id);
    const group = page.elements.find((el) => el.id === selectedElements[0]).group;
    ungroupElements(group, page.id);
  };

  const handleAlignLeft = () => {
    const page = getPage(id);
    let _elements = page.elements.filter((element) => selectedElements.includes(element.id));
    const x = Math.min(..._elements.map((el) => el.x));
    _elements = _elements.map((el) => ({ ...el, x }));
    updateElements(_elements, page.id, true);
  };

  const handleAlignCenter = () => {
    const page = getPage(id);
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
    const page = getPage(id);
    let _elements = page.elements.filter((element) => selectedElements.includes(element.id));
    const maxRight = Math.max(..._elements.map((el) => el.x + el.width));
    _elements = _elements.map((el) => ({
      ...el,
      x: maxRight - el.width,
    }));
    updateElements(_elements, page.id, true);
  };

  const handleAlignTop = () => {
    const page = getPage(id);
    let _elements = page.elements.filter((element) => selectedElements.includes(element.id));
    const y = Math.min(..._elements.map((el) => el.y));
    _elements = _elements.map((el) => ({ ...el, y }));
    updateElements(_elements, page.id, true);
  };

  const handleAlignMiddle = () => {
    const page = getPage(id);
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
    const page = getPage(id);
    let _elements = page.elements.filter((element) => selectedElements.includes(element.id));
    const maxBottom = Math.max(..._elements.map((el) => el.y + el.height));
    _elements = _elements.map((el) => ({
      ...el,
      y: maxBottom - el.height,
    }));
    updateElements(_elements, page.id, true);
  };

  const handleAddPage = () => {
    addPage(null, id);
  };

  const handleMovePageUp = () => {
    movePageUp(id);
  };

  const handleMovePageDown = () => {
    movePageDown(id);
  };

  const handleDeletePage = () => {
    deletePage(id);
  };

  const handleDuplicatePage = () => {
    const page = getPage(id);
    const payload = {
      ...page,
      id: crypto.randomUUID(),
      elements: page.elements.map((el) => ({ ...el, id: crypto.randomUUID() })),
    };
    addPage(payload, page.id);
  };

  return {
    handleAction,
  };
};
