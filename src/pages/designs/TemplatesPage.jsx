import DashboardTitle from '@/components/core/shared/DashboardTitle.jsx';
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
  Image,
  Skeleton,
} from '@nextui-org/react';
import { useCreateDesign, useGetDesigns } from '@/api/business.js';
import useBusiness from '@/hooks/use-business.js';
import { useToast } from '@/hooks/use-toast.jsx';
import { Link, useNavigate } from 'react-router-dom';
import NoData from '@/components/ui/NoData.jsx';
import { RiAddLine, RiLayout2Line, RiLayoutRowLine } from 'react-icons/ri';
import { getImageLink } from '@/lib/utils.js';
import { TbPhotoCircle } from 'react-icons/tb';

const TemplatesPage = () => {
  const toast = useToast();
  const { id: business } = useBusiness();
  const navigate = useNavigate();
  const { data: { designs = [] } = {}, isLoading: isTemplatesLoading } = useGetDesigns({ business });
  const { mutateAsync: create, isPending: isCreateTemplateLoading } = useCreateDesign(business);

  const handleCreateDesign = async (type) => {
    try {
      const template = {
        title: 'Untitled',
        description: '',
        type,
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
      const res = await create(template);
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
          <>
            <Dropdown classNames={{ content: 'shadow border border-default-200 w-[320px]' }} placement="bottom-end">
              <DropdownTrigger>
                <Button
                  color="primary"
                  radius="full"
                  className="text-base"
                  startContent={<RiAddLine size="20" />}
                  isLoading={isCreateTemplateLoading}
                >
                  Create
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                variant="faded"
                aria-label="Dropdown menu with description"
                onAction={async (key) => {
                  if (key === 'project') await handleCreateDesign('project');
                  if (key === 'template') await handleCreateDesign('template');
                }}
              >
                <DropdownSection classNames={{ base: 'p-1', heading: 'px-2' }}>
                  <DropdownItem
                    key="project"
                    description="Design a report, infographic, etc"
                    classNames={{
                      title: 'text-base',
                      description: 'text-sm',
                      wrapper: 'px-2 py-1',
                      base: 'rounded-xl',
                    }}
                    startContent={<RiLayoutRowLine size="20" className="ml-1" />}
                  >
                    Project
                  </DropdownItem>
                  <DropdownItem
                    key="template"
                    description="Publish a template to all users"
                    classNames={{
                      title: 'text-base',
                      description: 'text-sm',
                      wrapper: 'px-2 py-1',
                      base: 'rounded-xl',
                    }}
                    startContent={<RiLayout2Line size="20" className="ml-1" />}
                  >
                    Template
                  </DropdownItem>
                </DropdownSection>
              </DropdownMenu>
            </Dropdown>
          </>
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
                  <div key={i}>
                    <Link
                      key={i}
                      to={`/designs/${design._id}/edit`}
                      className="flex items-center justify-center p-5 bg-default-200 dark:bg-default-50 rounded-3xl aspect-square"
                    >
                      {design.thumbnail ? (
                        <Image
                          src={getImageLink(design.thumbnail)}
                          alt={design.title}
                          removeWrapper
                          className="object-contain rounded-2xl"
                        />
                      ) : (
                        <div className="">
                          <TbPhotoCircle size="48" className="opacity-50" />
                        </div>
                      )}
                    </Link>
                    <div className="mt-4 px-2 flex items-center justify-between">
                      <h4 className="font-medium text-lg leading-tight">{design.title}</h4>
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
