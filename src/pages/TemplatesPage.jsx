import DashboardTitle from '@/components/core/shared/DashboardTitle.jsx';
import { Button } from '@nextui-org/react';
import { TbPlus } from 'react-icons/tb';
import { HiPhoto } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

const TemplatesPage = () => {
  return (
    <>
      <DashboardTitle
        text="Templates"
        breadcrumbs={[
          { text: 'Home', href: '/' },
          { text: 'Templates', href: '/templates' },
        ]}
        after={
          <Link to="/templates/create">
            <Button
              variant="solid"
              radius="full"
              className="text-base px-6"
              color="primary"
              startContent={<TbPlus size="20" />}
            >
              Create Template
            </Button>
          </Link>
        }
      />
      <div className="container py-8 md:py-10 min-h-screen flex flex-col space-y-10">
        <div className="grid grid-cols-4 gap-4 md:gap-8">
          {Array(12)
            .fill(0)
            .map((_, i) => (
              <div key={i}>
                <div className="rounded-2xl bg-default-50 h-[240px] flex justify-center items-center">
                  <HiPhoto size="52" className="opacity-40" />
                </div>
                <div className="mt-4 px-2">
                  <h4 className="font-medium text-lg leading-tight">Template 1</h4>
                  <p className="leading-tight mt-1 opacity-80">Template 1 description</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default TemplatesPage;
