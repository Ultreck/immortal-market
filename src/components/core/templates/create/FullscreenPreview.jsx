import useTemplateStore from '@/store/template.js';
import Present from '@/components/core/templates/create/Present.jsx';
import PropTypes from 'prop-types';
import { useKey } from 'react-use';

const FullscreenPreview = ({ isOpen, onClose }) => {
  const template = useTemplateStore((state) => state.template);
  useKey('Escape', onClose);

  return <div>{isOpen && <Present pages={template.pages} />}</div>;
};

FullscreenPreview.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default FullscreenPreview;
