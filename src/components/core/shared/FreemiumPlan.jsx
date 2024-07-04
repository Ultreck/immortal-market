import { Button, Card } from '@nextui-org/react';
import useGlobalStore from '@/store/global.js';
import { HiChartPie } from 'react-icons/hi2';

const FreemiumPlan = () => {
  const updateData = useGlobalStore((state) => state.updateData);

  return (
    <Card
      hover
      role="button"
      tabIndex={0}
      aria-label="Upload a new document"
      aria-describedby="Upload a new document"
      aria-hidden={false}
      aria-disabled={false}
      className="card-shadow px-8 py-6 flex-1"
    >
      <h4 className="text-xl font-semibold">Dashboard View</h4>
      <p className="text-md mt-1 opacity-70">Get efficient data insigths</p>
      <div className="mt-auto">
        <Button
          color="primary"
          radius="full"
          variant="ghost"
          className="text-base"
          onClick={() => updateData({ isDashboardModalOpen: true })}
        >
          Create
        </Button>
      </div>

      <HiChartPie size="120" className="absolute right-0 bottom-0 opacity-20 rotate-90" />
    </Card>
  );
};

export default FreemiumPlan;
