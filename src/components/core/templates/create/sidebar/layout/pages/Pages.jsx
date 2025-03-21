import PageThumbnail from '@/components/core/templates/create/sidebar/layout/pages/PageThumbnail.jsx';
import PageThumbnailItem from '@/components/core/templates/create/sidebar/layout/pages/PageThumbnailItem.jsx';
import { cn } from '@/lib/utils.js';
import { TbPlus } from 'react-icons/tb';
import { Card } from '@heroui/react';
import useDesignStore from '@/store/design';
import { DndContext, closestCenter, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { useState } from 'react';
import { DragOverlay } from '@dnd-kit/core';

const Pages = () => {
  const pages = useDesignStore((state) => state.pages);
  const activePage = useDesignStore((state) => state.activePage);
  const createPage = useDesignStore((state) => state.createPage);
  const updateStore = useDesignStore((state) => state.updateStore);
  const movePageTo = useDesignStore((state) => state.movePageTo);
  const [draggedPage, setDraggedPage] = useState(null);

  const sensors = useSensors(useSensor(PointerSensor));

  const handleClick = (page) => {
    updateStore({ pendingActivePage: page.id });
  };

  const sortedPages = [...pages].sort((a, b) => a.order - b.order);

  const handleDragStart = (event) => {
    const { active } = event;
    setDraggedPage(pages.find((page) => page.id === active.id));
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;
    setDraggedPage(null);
    if (!over || active.id === over.id) return;
    const overPage = sortedPages.find((page) => page.id === over.id);
    movePageTo(active.id, overPage.order);
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <div className="w-full">
        <SortableContext items={sortedPages.map((p) => p.id)} strategy={verticalListSortingStrategy}>
          {sortedPages.map((page) => {
            const active = activePage === page.id;
            return (
              <div className="w-full mb-3" key={page.id}>
                <PageThumbnailItem
                  page={page}
                  active={active}
                  thumbnail={page.thumbnail}
                  onClick={() => handleClick(page)}
                />
              </div>
            );
          })}
        </SortableContext>
        <Card
          shadow="none"
          as="button"
          isPressable
          onPress={() => createPage()}
          className={cn(
            'flex items-center relative justify-center w-full h-[130px] bg-black/5 dark:bg-white/5 rounded-2xl'
          )}
        >
          <TbPlus size={24} />
        </Card>
      </div>

      <DragOverlay>
        {draggedPage ? (
          <PageThumbnail
            page={draggedPage}
            active={activePage === draggedPage.id}
            thumbnail={pages.find((p) => p.id === draggedPage.id)?.thumbnail}
          />
        ) : null}
      </DragOverlay>
    </DndContext>
  );
};

export default Pages;
