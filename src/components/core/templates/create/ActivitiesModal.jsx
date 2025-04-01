import {
  Button,
  Card,
  Drawer,
  DrawerBody,
  DrawerContent,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Select,
  SelectItem,
} from '@heroui/react';
import useBusiness from '@/hooks/use-business';
import { useGetDesignActivity } from '@/api/design';
import { useState } from 'react';
import useDesignStore from '@/store/design.js';
import PropTypes from 'prop-types';
import { HiX } from 'react-icons/hi';
import { LuListFilter, LuMessageSquare } from 'react-icons/lu';
import { HiChevronDown } from 'react-icons/hi2';
import { FaRegCalendarAlt, FaUsers } from 'react-icons/fa';
import { BsCheckCircle } from 'react-icons/bs';
import { GrFormView } from 'react-icons/gr';
import { PiFolderOpenLight } from 'react-icons/pi';
import { formatDistanceToNow } from 'date-fns';
import NoData from '@/components/ui/NoData';

const icons = {
  event: <FaRegCalendarAlt size={30} className="text-blue-500" />,
  comment: <LuMessageSquare size={30} className="text-green-500" />,
  task: <BsCheckCircle size={30} className="text-yellow-500" />,
  group: <FaUsers size={30} className="text-purple-500" />,
  view: <GrFormView size={30} className="text-purple-500" />,
  open: <PiFolderOpenLight size={30} className="text-blue-500" />,
};

const texts = {
  view: (name) => `${name} viewed this page`,
  form: (name) => `${name} completed and submitted a form`,
  poll: (name) => `${name} participated in a poll`,
  'Thumb Up': (name) => `${name} 👍 reacted with Thumbs Up`,
  'Thumb Down': (name) => `${name} 👎 reacted with Thumbs Down`,
  Happy: (name) => `${name} 😄 is feeling Happy`,
  Celebrate: (name) => `${name} 🎉 is celebrating`,
  Confused: (name) => `${name} 😕 looks confused`,
  Heart: (name) => `${name} ❤️ loved this`,
  Fire: (name) => `${name} 🔥 thinks this is fire`,
};

const PageActivitiesModal = ({ page: initialPage, isOpen, onClose }) => {
  const [filter, setFilter] = useState('all');
  const [selectedPage, setSelectedPage] = useState(initialPage);
  const { id: business } = useBusiness();
  const design = useDesignStore((state) => state.id);
  const pages = useDesignStore((state) => state.pages);
  const { data: { activities = [] } = {} } = useGetDesignActivity(business, design, selectedPage);
  const filtered = filter === 'all' ? activities : activities.filter((val) => val.type === filter);

  return (
    <Drawer isOpen={isOpen} onClose={onClose} size="2xl" hideCloseButton>
      <DrawerContent>
        <DrawerBody className="px-12 py-8">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-4">
              <h2 className="text-lg font-bold"> Activities</h2>
            </div>
            <Button onPress={onClose} isIconOnly variant="light" color="danger">
              <HiX size="20" />
            </Button>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <Select
              variant="bordered"
              placeholder="Select Page"
              selectedKeys={[selectedPage]}
              className="min-w-[200px]"
              onChange={(e) => setSelectedPage(e.target.value)}
              defaultSelectedKeys={[initialPage]}
              size="lg"
              classNames={{ value: 'text-base px-1', popoverContent: 'bg-default-100' }}
            >
              {pages.map((p) => (
                <SelectItem key={p.id} value={p.id} classNames={{ title: 'text-base px-1' }}>
                  {p.title}
                </SelectItem>
              ))}
            </Select>
            <Dropdown placement="bottom-start">
              <DropdownTrigger>
                <Button
                  variant="bordered"
                  className="text-base capitalize"
                  size="lg"
                  startContent={<LuListFilter size="20" />}
                  endContent={<HiChevronDown size="20" />}
                >
                  {filter}
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                aria-label="Comments filter"
                variant="flat"
                disallowEmptySelection
                selectionMode="single"
                selectedKeys={[filter]}
                onSelectionChange={(e) => {
                  if (e.size) setFilter(Array.from(e)[0]);
                }}
              >
                {['all', 'view', 'poll', 'form'].map((val) => (
                  <DropdownItem key={val} textValue={val}>
                    <span className="text-base capitalize">{val}</span>
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
          </div>
          <div className="space-y-3">
            {!filtered.length && <NoData text="No activity found for this page" />}
            {filtered.map((activity) => (
              <Card
                key={activity.id}
                shadow="none"
                className="grid grid-cols-[auto_1fr] rounded-2xl items-center gap-4 px-5 py-3 bg-default-200/70"
              >
                {icons[activity.type] || <BsCheckCircle />}
                <div className="flex justify-between">
                  <p className="text-base first-letter:capitalize">{texts[activity.type]?.(activity.user.username)}</p>
                  <span className="text-gray-500 text-[0.8rem]">
                    {formatDistanceToNow(new Date(activity.createdAt))}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

PageActivitiesModal.propTypes = {
  page: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default PageActivitiesModal;
