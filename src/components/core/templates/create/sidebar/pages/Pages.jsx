import useTemplateStore from '@/store/template.js';
import TabThumbnailItem from '@/components/core/templates/create/sidebar/pages/TabThumbnailItem.jsx';
import { useGetDesign } from '@/api/business.js';
import useBusiness from '@/hooks/use-business.js';
import { useParams } from 'react-router-dom';
import { cn } from '@/lib/utils.js';
import { TbPlus } from 'react-icons/tb';
import { Card } from '@heroui/react';
import { Reorder } from 'motion/react';

const Pages = () => {
  const updateTemplate = useTemplateStore((state) => state.updateTemplate);
  const pages = useTemplateStore((state) => state.template.pages);
  const activePage = useTemplateStore((state) => state.template.activePage);
  const { id } = useParams();
  const { id: business } = useBusiness();
  const { data: { design = {} } = {} } = useGetDesign(business, id);
  const addPage = useTemplateStore((state) => state.addPage);

  const handleClick = (page) => {
    updateTemplate({ activePage: page.id });
  };

  return (
    <Reorder.Group
      onReorder={(items) => {
        updateTemplate({ pages: items.map((id) => pages.find((p) => p.id === id)) });
      }}
      values={pages.map((p) => p.id)}
      axis="y"
      layoutScroll
      className="py-4 px-4 w-full"
    >
      <div className="items-center gap-5 mx-auto w-max">
        {pages.map((page, i) => {
          const active = activePage === page.id;
          const thumbnail = design?.thumbnails.find((t) => t.includes(page.id));
          return (
            <Reorder.Item value={page.id} key={page.id} className="flex h-[130px] my-2">
              <TabThumbnailItem
                page={page}
                active={active}
                thumbnail={thumbnail}
                index={i}
                key={page.id}
                onClick={() => handleClick(page)}
              />
            </Reorder.Item>
          );
        })}
        <Card
          shadow="none"
          as="button"
          isPressable
          onPress={() => addPage()}
          className={cn(
            'flex items-center relative justify-center w-[220px] h-[130px] aspect-square bg-black/5 dark:bg-white/5 rounded-2xl'
          )}
        >
          <TbPlus size={24} />
        </Card>
      </div>
    </Reorder.Group>
  );
};

export default Pages;
