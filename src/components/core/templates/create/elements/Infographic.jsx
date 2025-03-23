import PropTypes from 'prop-types';
import InfographicMain from '@/components/core/shared/Infographic';

export const Infographic = ({ element }) => {
  return <InfographicContent element={element} />;
};

export const InfographicPresent = ({ element }) => {
  return <InfographicContent element={element} />;
};

const InfographicContent = ({ element }) => {
  return <InfographicMain type="htd" dynamic={element.config.dynamic} data={element.config.data} />;
};

Infographic.propTypes = {
  element: PropTypes.object.isRequired,
};
InfographicPresent.propTypes = {
  element: PropTypes.object.isRequired,
};
InfographicContent.propTypes = {
  element: PropTypes.object.isRequired,
};

export default Infographic;
