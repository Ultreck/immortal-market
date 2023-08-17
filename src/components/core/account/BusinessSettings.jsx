import Card from "@/components/global/Card";
import { useGetUserBusiness } from "@/api/business";

const BusinessSettings = () => {
  const { data: business } = useGetUserBusiness();

  return (
    <Card className="px-8 py-10 md:p-10 overflow-hidden">
      <h3 className="font-semibold mb-8">Business settings</h3>
      <div className="space-y-6 md:space-y-4">
        <div className="grid md:grid-cols-[1.5fr_3fr] gap-1">
          <div>Business name</div>
          <div className="font-medium">{ business.name }</div>
        </div>
        <div className="grid md:grid-cols-[1.5fr_3fr] gap-1">
          <div>Business address</div>
          <div className="font-medium">{ business.address }</div>
        </div>
        <div className="grid md:grid-cols-[1.5fr_3fr] gap-1">
          <div>RC number</div>
          <div className="font-medium">{ business.rcNumber }</div>
        </div>
        <div className="grid md:grid-cols-[1.5fr_3fr] gap-1">
          <div>Email address</div>
          <div className="font-medium">{ business.email }</div>
        </div>
        <div className="grid md:grid-cols-[1.5fr_3fr] gap-1">
          <div>Industry</div>
          <div className="font-medium">{ business.industry }</div>
        </div>
        <div className="grid md:grid-cols-[1.5fr_3fr] gap-1">
          <div>Registration type</div>
          <div className="font-medium">{ business.registrationType }</div>
        </div>
        <div className="grid md:grid-cols-[1.5fr_3fr] gap-1">
          <div>Registration year</div>
          <div className="font-medium">{ business.registrationYear }</div>
        </div>
        <div className="grid md:grid-cols-[1.5fr_3fr] gap-1">
          <div>Country</div>
          <div className="font-medium">{ business.country }</div>
        </div>
        <div className="grid md:grid-cols-[1.5fr_3fr] gap-1">
          <div>State</div>
          <div className="font-medium">{ business.state }</div>
        </div>
        <div className="grid md:grid-cols-[1.5fr_3fr] gap-1">
          <div>City</div>
          <div className="font-medium">{ business.city }</div>
        </div>
        <div className="grid md:grid-cols-[1.5fr_3fr] gap-1">
          <div>Website</div>
          <div className="font-medium">{ business.website }</div>
        </div>
      </div>
    </Card>
  );
};

export default BusinessSettings;
