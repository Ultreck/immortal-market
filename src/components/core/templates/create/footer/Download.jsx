import { useCallback, useState } from 'react';
import { addToast, Button, Select, SelectItem } from '@heroui/react';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { toBlob } from 'html-to-image';
import useDesignStore from '@/store/design';
import PropTypes from 'prop-types';
import { TbChevronLeft } from 'react-icons/tb';

const Download = ({ onBack }) => {
  const [isThumbnailLoading, setIsThumbnailLoading] = useState(false);
  const pages = useDesignStore((state) => state.pages);
  const selectElements = useDesignStore((state) => state.selectElements);
  const design = useDesignStore((state) => state.design);
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
      saveAs(zipBlob, `${design.title}.zip`);
      setIsThumbnailLoading(false);
    } catch (e) {
      setIsThumbnailLoading(false);
      addToast({
        title: 'Error',
        description: e?.response?.data?.message ?? e?.message ?? 'Something went wrong, please try again',
        color: 'danger',
      });
    }
  }, [selectElements, pages, design.title, ext]);

  return (
    <div className="w-full">
      <div className="flex items-center space-x-3 mb-6">
        <Button variant="bordered" radius="full" size="sm" isIconOnly onPress={() => onBack()}>
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
        onPress={handleDownload}
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
