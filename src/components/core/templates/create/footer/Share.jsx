import {
  Button,
  Listbox,
  ListboxItem,
  Popover,
  PopoverContent,
  PopoverTrigger,
  useDisclosure,
} from '@nextui-org/react';
import { TbDownload, TbShare, TbShare2 } from 'react-icons/tb';
import { RiArrowRightSLine, RiLink, RiVideoLine } from 'react-icons/ri';
import useTemplateStore from '@/store/template.js';
import { useToast } from '@/hooks/use-toast.jsx';

const Share = () => {
  const toast = useToast();
  const { isOpen, onOpenChange } = useDisclosure();
  const id = useTemplateStore((state) => state.template.id);

  const menu = [
    { key: 'download', label: 'Download', icon: <TbDownload size="18" /> },
    { key: 'social', label: 'Share on social', icon: <TbShare2 size="18" /> },
  ];

  const handleCopyLink = () => {
    navigator.clipboard.writeText(`${window.location.origin}/designs/${id}/present`);
    toast.success('Link copied to clipboard');
  };

  return (
    <div>
      <Popover
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top"
        showArrow
        offset={10}
        classNames={{ content: 'w-[300px]' }}
      >
        <PopoverTrigger>
          <Button
            variant="flat"
            color="default"
            radius="full"
            className="px-4 text-base"
            startContent={<TbShare size="20" />}
            size="sm"
          >
            Share
          </Button>
        </PopoverTrigger>
        <PopoverContent className="px-3 py-5 shadow border border-default-200">
          <div className="w-full">
            <div className="px-4 w-full">
              <h2 className="text-base font-semibold mb-4">Share</h2>
              <div className="grid grid-cols-2 gap-4">
                <div
                  onClick={handleCopyLink}
                  className="flex flex-col items-center justify-center border rounded-2xl border-default-200 p-4 text-center cursor-pointer hover:bg-default-100/30"
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-default-100">
                    <RiLink size="20" />
                  </div>
                  <p className="text-center mt-2">Copy link</p>
                </div>
                <div className="flex flex-col items-center justify-center border rounded-2xl border-default-200 p-4 text-center cursor-pointer hover:bg-default-100/30 disabled">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-default-100">
                    <RiVideoLine size="20" />
                  </div>
                  <p className="text-center mt-2">Present</p>
                </div>
              </div>
            </div>
            <Listbox
              aria-label="Actions"
              onAction={(key) => {
                console.log(key);
              }}
              itemClasses={{ title: 'text-base' }}
              className="mt-4"
            >
              {menu.map((item) => (
                <ListboxItem
                  key={item.key}
                  startContent={item.icon}
                  showDivider={item.showDivider}
                  endContent={<RiArrowRightSLine size="18" />}
                >
                  {item.label}
                </ListboxItem>
              ))}
            </Listbox>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default Share;
