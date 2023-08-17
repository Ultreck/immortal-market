import Card from "@/components/global/Card";
import PropTypes from "prop-types";

const StatementOwnership = ({ data }) => {
  const { highlight } = data?.analytics_data ?? {}

  return (
    <Card className="mb-4 px-10 py-10 h-full text-center flex flex-col items-center justify-center">
      <div className="text-3xl">
        { highlight.name_check.score }%
      </div>
      <h3 className="mt-6 text-lg font-medium">Statement ownership</h3>
      <div className="mt-1">
        { highlight.name_check.message }
      </div>
    </Card>
  );
};

StatementOwnership.propTypes = {
  data: PropTypes.object.isRequired
};

export default StatementOwnership;
