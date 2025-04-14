import React, { useEffect } from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, Button, useDisclosure } from '@heroui/react';
import { useNavigate } from 'react-router-dom';
import { IoChevronBackSharp } from 'react-icons/io5';

const CountdownModalDialog = ({ isRunning }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const timeFrame = JSON.parse(localStorage.getItem('time-function'));
  const session = timeFrame.split('-')[0];
  const navigate = useNavigate();

   
  useEffect(() => {
    if (isRunning === false) {
      onOpen();
    } else if (isRunning === true) {
      onClose();
    }
  }, []);

  return (
    <>
      <div className="flex flex-wrap gap-3">
        <Button className="capitalize" color="" variant="flat"></Button>
      </div>
      <Modal
        isDismissable={false}
        isKeyboardDismissDisabled={true}
        isOpen={isOpen}
        size="2xl"
        backdrop={'blur'}
        placement="center"
      >
        <ModalContent className="w-3xl">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <div className="text">
                  <div className="text">{`Your ${session} minute session has ended`}</div>
                  <Button color="" className="text-sky-500" onPress={() => navigate(`/markets/virtuals`)}>
                    <IoChevronBackSharp /> try new session
                  </Button>
                </div>
              </ModalHeader>
              <ModalBody>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit
                  venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit
                  venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor adipisicing. Mollit
                  dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit officia eiusmod Lorem aliqua enim laboris
                  do dolor eiusmod. Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur proident Lorem
                  eiusmod et. Culpa deserunt nostrud ad veniam.
                </p>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default CountdownModalDialog;
