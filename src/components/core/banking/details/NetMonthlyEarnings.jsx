import { IconCash } from "@tabler/icons-react";
import { formatCurrency } from "@/lib/utils.js";
import Card from "@/components/global/Card";
import PropTypes from "prop-types";

const NetMonthlyEarnings = ({ data }) => {
  const { highlight } = data?.analytics_data ?? {}

  return (
    <Card className="mb-4 px-10 py-12 h-full text-center flex flex-col items-center justify-center">
      <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-6">
        <IconCash size="40"/>
      </div>
      <div className="text-3xl">
        { formatCurrency(highlight.net_monthly_earnings.replaceAll(',', '')) ?? 0 }
      </div>
      <h3 className="mt-2">Net monthly earnings</h3>
    </Card>
  );
};

NetMonthlyEarnings.propTypes = {
  data: PropTypes.object.isRequired
};

export default NetMonthlyEarnings;
