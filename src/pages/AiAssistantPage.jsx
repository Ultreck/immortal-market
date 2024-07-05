import DashboardTitle from '@/components/core/shared/DashboardTitle.jsx';
import { Button, Card, useDisclosure } from '@nextui-org/react';
import { HiChevronRight, HiQuestionMarkCircle } from 'react-icons/hi2';
import Drawer from '@/components/ui/Drawer.jsx';

const AiAssistantPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <DashboardTitle
        text="Ai Assistant"
        breadcrumbs={[
          { text: 'Home', href: '/' },
          { text: 'Ai Assistant', href: '/assistant' },
        ]}
      />
      <div className="container py-10 space-y-10">
        <Card className="card-shadow px-12 py-10 rounded-xl gap-10 relative overflow-hidden">
          <div className="text-4xl font-semibold">Ask Immortal AI anything</div>
          <ul className="flex flex-col gap-2 ml-4 list-disc">
            <li>What is the total revenue of the company?</li>
            <li>What is the total number of employees?</li>
            <li>What is the total number of customers?</li>
          </ul>
          <Button onClick={onOpen} className="mr-auto" color="primary" size="lg" radius="full">
            Ask Question
          </Button>
          <div className="absolute bottom-0 -right-0 hidden sm:block ">
            <HiQuestionMarkCircle size="260" className="text-warning-100" />
          </div>
        </Card>
      </div>

      <Drawer onClose={onClose} isOpen={isOpen} placement="right" title="Ask Immortal AI">
        <p className="mb-8">
          Select a project to ask a question. You can also ask questions about the entire company, or about a specific
          project.
        </p>
        <div className="grid grid-cols-! gap-4">
          {Array(3)
            .fill(null)
            .map((_, index) => (
              <div
                className="border border-default-200 rounded-2xl px-6 py-4 flex items-center gap-4 justify-between hover:bg-default-100 cursor-pointer"
                key={index}
              >
                <div>
                  <div>Project {index + 1}</div>
                  <div className="opacity-75 text-md mt-0.5">Last updated: 2 months ago</div>
                </div>
                <HiChevronRight size="20" className="opacity-75" />
              </div>
            ))}
        </div>

        <div className="absolute bottom-0 -right-0 hidden sm:block ">
          <HiQuestionMarkCircle size="260" className="text-warning-100" />
        </div>
      </Drawer>
    </>
  );
};

export default AiAssistantPage;
