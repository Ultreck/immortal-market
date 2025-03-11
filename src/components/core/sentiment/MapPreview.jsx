import React from 'react';
import { Modal, ModalContent, ModalBody } from '@heroui/react';
import PropTypes from 'prop-types';
import SentimentMap from './SentimentMap';

const MapPreview = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="5xl">
      <ModalContent>
        <ModalBody>
          <SentimentMap />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

MapPreview.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default MapPreview;
