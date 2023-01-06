import { motion } from 'framer-motion';

import BackDrop from 'components/BackDrop';
import Button from 'components/Button';

const dropIn = {
  hidden: {
    y: '-100vh',
    opacity: 0,
  },
  visible: {
    y: '0',
    opacity: 1,
    transition: {
      duration: 0.5,
      type: 'spring',
      damping: 50,
      stiffness: 500,
    },
  },
  exit: {
    y: '-100vh',
    opacity: 0,
  },
};

const Modal = ({
  imgSrc,
  description,
  primaryBtnText,
  secondBtnText,
  primaryBtnAction,
  secondBtnAction,
  onClose,
}) => (
  <BackDrop onClick={onClose}>
    <motion.div
      className="modal-box"
      onClick={e => {
        e.stopPropagation();
      }}
      variants={dropIn}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {imgSrc && (
        <div className="modal-img">
          <img src={imgSrc} alt="modal-img" />
        </div>
      )}

      <p className="modal-description">{description}</p>

      <Button className={'btn-enable'} onClick={primaryBtnAction}>
        {primaryBtnText}
      </Button>

      {secondBtnText && (
        <button className="second-btn-text" onClick={secondBtnAction}>
          {secondBtnText}
        </button>
      )}
    </motion.div>
  </BackDrop>
);

export default Modal;
