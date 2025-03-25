import { createElement, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { AnimatePresence, motion } from 'motion/react';
import { cn } from '@/lib/utils.js';
import { getElementConfig, getElementPresentComponent } from '@/lib/elements.js';
import ElementWrapperPresent from '@/components/core/templates/create/ElementWrapperPresent.jsx';
import useDesignStore from '@/store/design';
import useBusiness from '@/hooks/use-business';
import { useGetForm, useGetPoll } from '@/api/design';
import { Button, useDisclosure } from '@heroui/react';
import { TbForms } from 'react-icons/tb';
import { CgPoll } from 'react-icons/cg';
import PageFormPresent from './tools/page/form/PageFormPresent';
import PagePollPresent from './tools/page/poll/PagePollPresent';
import { useCreateDesignActivity } from '@/api/business';

const PagePresent = ({ page }) => {
  const el = useRef(null);
  const [scale, setScale] = useState(1);
  const { id: business } = useBusiness();
  const id = useDesignStore((state) => state.id);
  const { data: { form } = {} } = useGetForm(business, id, page.id);
  const { data: { poll } = {} } = useGetPoll(business, id, page.id);
  const elements = useDesignStore((state) => state.elements.filter((el) => el.page === page.id));
  const { isOpen: isFormOpen, onOpen: onFormOpen, onClose: onFormClose } = useDisclosure();
  const { isOpen: isPollOpen, onOpen: onPollOpen, onClose: onPollClose } = useDisclosure();
  const { mutateAsync: createActivity } = useCreateDesignActivity(business, id);

  useEffect(() => {
    if (page.id) createActivity({ type: 'view', page: page.id });
    setTimeout(() => {
      const pw = el.current.parentElement.clientWidth;
      const w = el.current.clientWidth;
      const scale = pw / w;
      setScale(scale);
    }, 50);
  }, [createActivity, page]);

  return (
    <div className="w-full relative">
      <div className="fixed bottom-5 right-12 z-10 flex flex-row gap-3 items-end">
        {!!form && (
          <div>
            <Button
              onPress={onFormOpen}
              variant="solid"
              size="lg"
              color="warning"
              className="text-base"
              startContent={<TbForms size="20" />}
              radius="full"
            >
              Open form
            </Button>
          </div>
        )}
        {!!poll && (
          <div>
            <Button
              onPress={onPollOpen}
              variant="solid"
              size="lg"
              color="success"
              className="text-base"
              startContent={<CgPoll size="20" />}
              radius="full"
            >
              Take poll
            </Button>
          </div>
        )}
      </div>
      <motion.div
        ref={el}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{
          width: page.size.width,
          height: page.size.height,
          background: page.background.value,
          transform: `scale(${scale})`,
        }}
        className={cn('origin-top-left relative overflow-hidden')}
      >
        <AnimatePresence>
          {elements.map((element) => {
            const component = getElementPresentComponent(element);
            const config = getElementConfig(element);
            return (
              <motion.div
                key={element.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="pointer-events-auto"
              >
                {config?.wrapper ? (
                  <ElementWrapperPresent element={element}>
                    {createElement(component, { element })}
                  </ElementWrapperPresent>
                ) : (
                  createElement(component, { element })
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {!!form && <PageFormPresent page={page} isOpen={isFormOpen} onClose={onFormClose} />}
      {!!poll && <PagePollPresent page={page} isOpen={isPollOpen} onClose={onPollClose} />}
    </div>
  );
};

PagePresent.propTypes = {
  page: PropTypes.object.isRequired,
};

export default PagePresent;
