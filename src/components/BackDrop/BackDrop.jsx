import { motion } from 'framer-motion';

// eslint-disable-next-line arrow-body-style
const BackDrop = ({ children, onClick, className }) => {
  return (
    <motion.div
      onClick={onClick}
      className={className ? `backdrop ${className}` : 'backdrop'}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default BackDrop;
