import { Avatar, AvatarGroup, Tooltip } from '@heroui/react';
import { TbPlus } from 'react-icons/tb';
import CreateDropdown from '../project/CreateDropdown';

const users = [
  {
    name: 'Adamas',
    image: 'https://huma.demo.frontendmatter.com/assets/images/256_michael-dam-258165-unsplash.jpg',
  },
  {
    name: 'Timothy',
    image: 'https://huma.demo.frontendmatter.com/assets/images/256_luke-porter-261779-unsplash.jpg',
  },
];

const RigthBar = () => {
  return (
    <div className="flex justify-between gap-5 items-center ">
      <div className="relative flex gap-1 items-center">
        <AvatarGroup>
          {users?.map((tr) => (
            <Tooltip key={tr.name} showArrow={true} placement="bottom" content={tr?.name}>
              <Avatar size="md" src={tr?.image} name={tr?.name} className=" cursor-pointer" />
            </Tooltip>
          ))}
        </AvatarGroup>
        <Avatar
          classNames={{
            base: 'bg-white border-2 border-gray-400/70',
          }}
          size="sm"
          className="cursor-pointer"
          icon={<TbPlus strokeWidth={3} size={20} color="gray" />}
        />
      </div>
      <CreateDropdown />
    </div>
  );
};

export default RigthBar;
