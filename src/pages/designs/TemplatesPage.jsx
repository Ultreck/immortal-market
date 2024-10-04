import DashboardTitle from '@/components/core/shared/DashboardTitle.jsx';
import { Button, Skeleton } from '@nextui-org/react';
import { useCreateDesign, useGetDesigns } from '@/api/business.js';
import useBusiness from '@/hooks/use-business.js';
import { useToast } from '@/hooks/use-toast.jsx';
import { useNavigate } from 'react-router-dom';
import NoData from '@/components/ui/NoData.jsx';
import { RiAddLine } from 'react-icons/ri';
import DesignCard from '@/components/core/project/DesignCard.jsx';

const TemplatesPage = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const { id: business } = useBusiness();
  const { mutateAsync: create, isPending: isCreateTemplateLoading } = useCreateDesign(business);
  const { data: { designs = [] } = {}, isLoading: isTemplatesLoading } = useGetDesigns({ business, type: 'template' });

  const handleCreateTemplate = async () => {
    try {
      const res = await create({
        title: 'Untitled',
        description: '',
        type: 'template',
        data: {
          pages: [
            {
              id: crypto.randomUUID(),
              title: 'Untitled',
              width: 600,
              height: 600,
              style: {
                background: '#ffffff',
              },
              elements: [],
            },
          ],
        },
      });
      navigate(`/designs/${res.data.design._id}/edit`);
    } catch (e) {
      toast.error(e?.response?.data?.message || e.message);
    }
  };

  return (
    <>
      <DashboardTitle
        text="Templates"
        breadcrumbs={[
          { text: 'Home', href: '/' },
          { text: 'Templates', href: '/templates' },
        ]}
        after={
          <Button
            color="primary"
            radius="2xl"
            className="text-base"
            startContent={<RiAddLine size="20" />}
            isLoading={isCreateTemplateLoading}
            onClick={handleCreateTemplate}
          >
            Create template
          </Button>
        }
      />
      <div className="container py-8 md:py-10 min-h-screen flex flex-col space-y-10">
        {isTemplatesLoading ? (
          <div className="grid grid-cols-4 gap-4 md:gap-8">
            <Skeleton className="aspect-square w-full rounded-2xl" />
            <Skeleton className="aspect-square w-full rounded-2xl" />
            <Skeleton className="aspect-square w-full rounded-2xl" />
            <Skeleton className="aspect-square w-full rounded-2xl" />
          </div>
        ) : (
          <>
            {designs.length > 0 ? (
              <div className="grid grid-cols-4 gap-4 md:gap-8">
                {designs.map((design, i) => (
                  <DesignCard key={i} id={design._id} title={design.title} thumbnail={design.thumbnail} />
                ))}
              </div>
            ) : (
              <NoData text="No templates created yet" />
            )}
          </>
        )}
      </div>
    </>
  );
};

export default TemplatesPage;
