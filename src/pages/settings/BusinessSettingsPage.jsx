import useBusiness from '@/hooks/use-business.js';
import { Button } from '@heroui/react';
import { HiOutlineExternalLink } from 'react-icons/hi';

const BusinessSettingsPage = () => {
  const { business } = useBusiness();

  return (
    <div>
      <h3 className="mb-10 font-semibold text-lg">Business settings</h3>
      <div className="space-y-5">
        <div className="grid gap-1 md:grid-cols-[1.5fr_3fr]">
          <div className="opacity-70">Business name</div>
          <div className="font-medium">{business.name}</div>
        </div>
        <div className="grid gap-1 md:grid-cols-[1.5fr_3fr]">
          <div className="opacity-70">Business address</div>
          <div className="font-medium">{business.address}</div>
        </div>
        <div className="grid gap-1 md:grid-cols-[1.5fr_3fr]">
          <div className="opacity-70">RC number</div>
          <div className="font-medium">{business.rcNumber}</div>
        </div>
        <div className="grid gap-1 md:grid-cols-[1.5fr_3fr]">
          <div className="opacity-70">Email address</div>
          <div className="font-medium">{business.email}</div>
        </div>
        <div className="grid gap-1 md:grid-cols-[1.5fr_3fr]">
          <div className="opacity-70">Industry</div>
          <div className="font-medium">{business.industry}</div>
        </div>
        <div className="grid gap-1 md:grid-cols-[1.5fr_3fr]">
          <div className="opacity-70">Country</div>
          <div className="font-medium">{business.country}</div>
        </div>
        <div className="grid gap-1 md:grid-cols-[1.5fr_3fr]">
          <div className="opacity-70">Website</div>
          <a
            href={business.website.startsWith('http') ? business.website : `https://${business.website}`}
            target="_blank"
            rel="noreferrer"
            className="font-medium flex items-center hover:text-primary-600 transition-colors duration-200"
          >
            {business.website} <HiOutlineExternalLink size="16" className="ml-2" />
          </a>
        </div>
      </div>
      <div className="flex mt-10">
        <Button variant="bordered" className="text-base px-4" radius="full" isDisabled>
          Edit
        </Button>
      </div>
    </div>
  );
};

export default BusinessSettingsPage;
