import { useCallback, useState } from 'react';
import { Button, Select, SelectItem } from '@nextui-org/react';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { toBlob } from 'html-to-image';
import useTemplateStore from '@/store/template.js';
import { useToast } from '@/hooks/use-toast.jsx';
import PropTypes from 'prop-types';
import { TbChevronLeft } from 'react-icons/tb';

const Download = ({ onBack }) => {
  const toast = useToast();
  const [isThumbnailLoading, setIsThumbnailLoading] = useState(false);
  const pages = useTemplateStore((state) => state.template.pages);
  const selectElements = useTemplateStore((state) => state.selectElements);
  const title = useTemplateStore((state) => state.template.title);
  const [ext, setExt] = useState('');

  const handleDownload = useCallback(async () => {
    try {
      selectElements([]);
      setIsThumbnailLoading(true);
      const zip = new JSZip();
      const folder = zip.folder('images');
      const titleMap = {};
      await Promise.all(
        pages.map(async (page, index) => {
          const blob = await toBlob(document.getElementById(`canvas-${page.id}`), {
            cacheBust: true,
            skipFonts: true,
          });
          let name = page.title || `page-${index + 1}`;
          if (titleMap[name]) {
            titleMap[name] += 1;
            name = `${name}-${titleMap[name]}`;
          } else {
            titleMap[name] = 1;
          }
          const types = {
            jpg: 'image/jpeg',
            png: 'image/png',
          };
          const type = types[ext];
          const file = new File([blob], `${name}.${ext}`, { type });
          folder.file(`${name}.${ext}`, file);
        })
      );
      const zipBlob = await zip.generateAsync({ type: 'blob' });
      saveAs(zipBlob, `${title}.zip`);
      setIsThumbnailLoading(false);
    } catch (error) {
      setIsThumbnailLoading(false);
      toast.error(error?.response?.data?.message || error.message);
    }
  }, [selectElements, pages, title, toast, ext]);

  return (
    <div className="w-full">
      <div className="flex items-center space-x-3 mb-6">
        <Button variant="bordered" radius="full" size="sm" isIconOnly onClick={() => onBack()}>
          <TbChevronLeft size="20" />
        </Button>
        <h2 className="text-base font-semibold">Download</h2>
      </div>
      <Select
        label="File type"
        placeholder="File type"
        className="max-w-xs"
        size="lg"
        selectedKeys={ext ? [ext] : []}
        onChange={(e) => {
          return setExt(e.target.value);
        }}
      >
        <SelectItem key="jpg">JPG</SelectItem>
        <SelectItem key="png">PNG</SelectItem>
      </Select>
      <Button
        type="submit"
        color="primary"
        radius="md"
        className="mt-6 text-base"
        isLoading={isThumbnailLoading}
        isDisabled={isThumbnailLoading || !ext}
        onClick={handleDownload}
      >
        Download
      </Button>
    </div>
  );
};

Download.propTypes = {
  onBack: PropTypes.func.isRequired,
};

export default Download;
