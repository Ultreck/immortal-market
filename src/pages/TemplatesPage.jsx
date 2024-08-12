import DashboardTitle from '@/components/core/shared/DashboardTitle.jsx';
import { Button, Skeleton } from '@nextui-org/react';
import { TbPlus } from 'react-icons/tb';
import { HiPhoto } from 'react-icons/hi2';
import { useCreateTemplateMutation, useGetTemplates } from '@/api/business.js';
import useBusiness from '@/hooks/use-business.js';
import { useToast } from '@/hooks/use-toast.jsx';
import { Link, useNavigate } from 'react-router-dom';
import NoData from '@/components/ui/NoData.jsx';

const TemplatesPage = () => {
  const toast = useToast();
  const { id } = useBusiness();
  const navigate = useNavigate();
  const { data: { templates = [] } = {}, isLoading: isTemplatesLoading } = useGetTemplates(id);
  const { mutateAsync: createTemplate, isPending: isCreateTemplateLoading } = useCreateTemplateMutation(id);

  const handleCreateTemplate = async () => {
    try {
      const template = {
        title: 'Untitled',
        description: '',
        data: {
          pages: [
            {
              id: crypto.randomUUID(),
              title: 'Untitled',
              width: 600,
              height: 600,
              style: {
                backgroundColor: '#ffffff',
              },
              elements: [],
            },
          ],
        },
      };
      const res = await createTemplate(template);
      navigate(`/templates/${res.data.template._id}/edit`);
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
            onClick={handleCreateTemplate}
            variant="solid"
            radius="full"
            className="text-base px-6"
            color="primary"
            startContent={<TbPlus size="20" />}
            isLoading={isCreateTemplateLoading}
          >
            Create Template
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
            {templates.length > 0 ? (
              <div className="grid grid-cols-4 gap-4 md:gap-8">
                {templates.map((template, i) => (
                  <div key={i}>
                    <Link key={i} to={`/templates/${template._id}/edit`}>
                      <div className="rounded-2xl bg-default-200 dark:bg-default-50 h-[240px] flex justify-center items-center">
                        <HiPhoto size="52" className="opacity-40" />
                      </div>
                    </Link>
                    <div className="mt-4 px-2 flex items-center justify-between">
                      <h4 className="font-medium text-lg leading-tight">{template.title}</h4>
                    </div>
                  </div>
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
