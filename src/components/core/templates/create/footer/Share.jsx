import {
  Button,
  Listbox,
  ListboxItem,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Select,
  SelectItem,
  useDisclosure,
} from '@nextui-org/react';
import { TbDownload, TbShare, TbShare2 } from 'react-icons/tb';
import { RiArrowRightSLine, RiLink, RiVideoLine } from 'react-icons/ri';
import { useToast } from '@/hooks/use-toast.jsx';
import { useState, useCallback } from 'react';
import { HiArrowLeftCircle } from 'react-icons/hi2';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';

import { toBlob } from 'html-to-image';
import useTemplateStore from '@/store/template.js';

const Share = () => {
  const toast = useToast();
  const [isThumbnailLoading, setIsThumbnailLoading] = useState(false);
  const id = useTemplateStore((state) => state.template.id);
  const pages = useTemplateStore((state) => state.template.pages);
  const selectElements = useTemplateStore((state) => state.selectElements);
  const { isOpen, onOpenChange } = useDisclosure();
  const [section, setSection] = useState('');
  const title = useTemplateStore((state) => state.template.title);
  const [fileFormat, setFileFormat] = useState("");
  const menu = [
    { key: 'download', label: 'Download', icon: <TbDownload size="18" /> },
    { key: 'social', label: 'Share on social', icon: <TbShare2 size="18" /> },
  ];

  const handleCopyLink = () => {
    navigator.clipboard.writeText(`${window.location.origin}/designs/${id}/present`);
    toast.success('Link copied to clipboard');
  };

  const handleDownload = useCallback(async () => {
    try {
      selectElements([]);
      setIsThumbnailLoading(true);
      const zip = new JSZip();
      const imagesFolder = zip.folder('images');

      const titleMap = {};

      await Promise.all(
        pages.map(async (page, index) => {
          const blob = await toBlob(document.getElementById(`canvas-${page.id}`), {
            cacheBust: true,
            skipFonts: true,
          });

          let pageTitle = page.title || `page-${index + 1}`;

          if (titleMap[pageTitle]) {
            titleMap[pageTitle] += 1;
            pageTitle = `${pageTitle}-${titleMap[pageTitle]}`;
          } else {
            titleMap[pageTitle] = 1;
          }

          const fileType = fileFormat === 'png' ? 'image/png' : 'image/jpeg';
          const fileExtension = fileFormat === 'png' ? 'png' : 'jpg';

          const file = new File([blob], `${pageTitle}.${fileExtension}`, { type: fileType });

          imagesFolder.file(`${pageTitle}.${fileExtension}`, file);
        })
      );

      const zipBlob = await zip.generateAsync({ type: 'blob' });
      saveAs(zipBlob, `${title}.zip`);

      setIsThumbnailLoading(false);
      toast.success('Download completed successfully');
    } catch (error) {
      setIsThumbnailLoading(false);
      toast.error(error?.response?.data?.message || error.message);
    }
  }, [selectElements, pages, title, toast, fileFormat]);

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
        <PopoverContent className="px-5 py-5 shadow border border-default-200">
          {
            // eslint-disable-next-line no-nested-ternary
            section === 'download' ? (
              <div className="w-full">
                <h2 className="text-base font-semibold mb-4 flex items-center gap-2">
                  {' '}
                  <HiArrowLeftCircle className="cursor-pointer" onClick={() => setSection('')} /> Download
                </h2>
                <Select
                  label="Choose a format"
                  placeholder="Choose a format"
                  className="max-w-xs"
                  // onSelectionChange={setFileFormat}
                  selectedKeys={fileFormat ? [fileFormat] : []}
                  onChange={(e) => {
                    return setFileFormat(e.target.value);
                  }}
                >
                  <SelectItem key="jpg">Jpg</SelectItem>
                  <SelectItem key="png">Png</SelectItem>
                </Select>
                <Button
                  type="submit"
                  color="primary"
                  radius="md"
                  className="w-full mt-6 mb-2 text-base"
                  isLoading={isThumbnailLoading}
                  isDisabled={isThumbnailLoading || !fileFormat}
                  onClick={handleDownload}
                >
                  Download
                </Button>
              </div>
            ) : section === 'social' ? (
              <div className="w-full">
                <h2 className="text-base font-semibold mb-4 flex items-center gap-2">
                  <HiArrowLeftCircle className="cursor-pointer" onClick={() => setSection('')} />
                  Share on social
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col items-center justify-center border rounded-2xl border-default-200 p-4 text-center cursor-pointer hover:bg-default-100/30">
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
            ) : (
              <div className="w-full">
                <div className="px-1 w-full">
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
                  itemClasses={{ title: 'text-base' }}
                  className="mt-4"
                >
                  {menu.map((item) => (
                    <ListboxItem
                      key={item.key}
                      startContent={item.icon}
                      showDivider={item.showDivider}
                      endContent={<RiArrowRightSLine size="18" />}
                      onClick={() => setSection(item.key)}
                    >
                      {item.label}
                    </ListboxItem>
                  ))}
                </Listbox>
              </div>
            )
          }
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default Share;

