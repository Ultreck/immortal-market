import { Modal, ModalBody, ModalContent } from '@nextui-org/react';
import { ChartContainer } from '@/components/ui/chart.jsx';
import { Bar, BarChart, XAxis } from 'recharts';
import { capitalize } from '@/lib/utils.js';
import PropTypes from 'prop-types';

const ElementModal = ({ isOpen, onClose }) => {
  return (
    <Modal size="2xl" isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        <ModalBody className="px-10 py-12">
          <div className="mb-4">
            <ChartContainer config={{}} style={{ width: '100%', height: '100%' }}>
              <BarChart
                accessibilityLayer
                data={[
                  {
                    name: 'Page A',
                    value: 4000,
                    fill: '#E66B5B',
                  },
                  {
                    name: 'Page B',
                    value: 3000,
                    fill: '#1D9085',
                  },
                  {
                    name: 'Page C',
                    value: 2000,
                    fill: '#264A5A',
                  },
                  {
                    name: 'Page D',
                    value: 2780,
                    fill: '#E8C22C',
                  },
                  {
                    name: 'Page E',
                    value: 1890,
                    fill: '#F6881F',
                  },
                ]}
              >
                <XAxis
                  dataKey="name"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                  tickFormatter={(value) => capitalize(value)}
                />
                <Bar dataKey="value" radius={8} />
              </BarChart>
            </ChartContainer>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit
            venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit
            venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam.
          </p>
          <p>
            Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor adipisicing. Mollit dolor
            eiusmod sunt ex incididunt cillum quis. Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor
            eiusmod.
          </p>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

ElementModal.propTypes = {
  element: PropTypes.object.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ElementModal;
