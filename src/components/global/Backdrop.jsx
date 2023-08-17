import { useRef } from 'react';
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const Backdrop = ({ children, onClick }) => {
  const ref = useRef(null);

  return (
    <motion.div
      ref={ ref }
      onClick={ (e) => {
        if (e.currentTarget === ref.current) onClick?.()
      } }
      initial={ { opacity: 0 } }
      animate={ { opacity: 1 } }
      exit={ { opacity: 0 } }
      className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-[99] !m-0 p-0"
    >
      { children }
    </motion.div>
  );
};

Backdrop.propTypes = {
  children: PropTypes.any,
  onClick: PropTypes.func.isRequired
};

export default Backdrop;
