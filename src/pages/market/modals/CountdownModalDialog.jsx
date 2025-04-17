import React, { useEffect } from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, Button, useDisclosure } from '@heroui/react';
import { useNavigate } from 'react-router-dom';
import { IoChevronBackSharp } from 'react-icons/io5';
import TimeoutComponent from '@/hooks/use-timeOut';

const CountdownModalDialog = ({ endTime, shouldStart, startTime, startIn, setstartIn, setshouldStart }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const timeFrame = JSON.parse(localStorage.getItem('time-function'));
  const session = timeFrame.split('-')[0];
  const navigate = useNavigate();

  useEffect(() => {
    onClose();
    if (shouldStart) {
      onOpen();
    } else {
      onClose();
    }
  }, [shouldStart]);

  return (
    <>
      <div className="flex flex-wrap gap-3">
        <Button className="capitalize" color="" variant="flat"></Button>
      </div>
      <Modal
        isDismissable={false}
        isKeyboardDismissDisabled={true}
        isOpen={isOpen}
        size="xl"
        backdrop={'blur'}
        placement="center"
      >
        <ModalContent className="w-3xl">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <div className="text">
                  <div className="text-center">{`Your ${session} ${session > 1 ? 'minutes' : 'minute'} session has ended`}</div>
                  <div className="text-center">
                  <Button color="" className="text-sky-500 text-center" onPress={() => navigate(`/markets/virtuals`)}>
                    <IoChevronBackSharp /> try new session
                  </Button>
                  </div>
                </div>
              </ModalHeader>
              <ModalBody>
                <p className={`w-full h-full flex justify-center items-center`}>
                  <TimeoutComponent
                    text={'new session Starts in:'}
                    className="text-5xl text-[#4691c5]"
                    endTime={endTime}
                    startTime={startTime}
                    startIn={startIn}
                    setstartIn={setstartIn}
                    shouldStart={shouldStart}
                    setshouldStart={setshouldStart}
                  />
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
