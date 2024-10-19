import { Input, Skeleton, Spinner } from '@nextui-org/react';
import { useCreateDesign, useGetDesigns } from '@/api/business.js';
import useBusiness from '@/hooks/use-business.js';
import { useToast } from '@/hooks/use-toast.jsx';
import { useNavigate } from 'react-router-dom';
import NoData from '@/components/ui/NoData.jsx';
import DesignCard from '@/components/core/project/DesignCard.jsx';
import DashboardHeader from '@/components/core/shared/DashboardHeader.jsx';
import { TbSearch } from 'react-icons/tb';
import { RiAddLine } from 'react-icons/ri';
import { cn } from '@/lib/utils.js';

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
    <div className="mb-10">
      <DashboardHeader
        content={
          <div className="relative">
            <Input
              type="text"
              name="query"
              id="query"
              size="lg"
              classNames={{
                input: 'text-base',
                base: 'transition-all duration-300 w-[320px]',
                inputWrapper: 'h-13 rounded-full',
              }}
              startContent={<TbSearch size="24" className="mx-3 opacity-30" />}
              placeholder="Search templates.."
            />
          </div>
        }
      />
      <div className="container min-h-screen flex flex-col space-y-10">
        <div className="rounded-3xl bg-cover py-10 px-16 bg-gradient-to-r from-emerald-200 dark:from-emerald-400 to-cyan-200 dark:to-cyan-400 text-black">
          <h1 className="text-4xl font-bold">Templates</h1>
          <p className="text-lg leading-none mt-3">Immortal&#39;s templates are the best way to start.</p>
        </div>
        {isTemplatesLoading ? (
          <div className="grid grid-cols-5 gap-4 md:gap-8">
            <Skeleton className="aspect-square w-full rounded-2xl" />
            <Skeleton className="aspect-square w-full rounded-2xl" />
            <Skeleton className="aspect-square w-full rounded-2xl" />
            <Skeleton className="aspect-square w-full rounded-2xl" />
            <Skeleton className="aspect-square w-full rounded-2xl" />
          </div>
        ) : (
          <>
            {designs.length > 0 ? (
              <div className="grid grid-cols-5 gap-4 md:gap-8">
                <button
                  onClick={handleCreateTemplate}
                  disabled={isCreateTemplateLoading}
                  className={cn(
                    'flex items-center justify-center p-5 bg-black/5 dark:bg-white/5 hover:bg-black/[.06] hover:dark:bg-white/[.07] rounded-2xl aspect-square cursor-pointer',
                    {
                      'pointer-events-none': isCreateTemplateLoading,
                    }
                  )}
                >
                  <div className="border-dashed-custom rounded-xl w-full h-full flex items-center justify-center">
                    {isCreateTemplateLoading ? (
                      <Spinner color="current" />
                    ) : (
                      <RiAddLine size="32" className="opacity-50" />
                    )}
                  </div>
                </button>
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
    </div>
  );
};

export default TemplatesPage;
