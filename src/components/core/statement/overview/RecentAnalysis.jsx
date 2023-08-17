import { IconArrowRight, IconFileText } from "@tabler/icons-react";
import { useGetUserBusiness } from "@/api/business.js";
import { useGetStatements } from "@/api/statement.js";
import Card from "@/components/global/Card.jsx";
import { Link } from "react-router-dom";
import Button from "@/components/global/Button.jsx";

const RecentAnalysis = () => {
  const { data: business, isLoading: isBusinessLoading } = useGetUserBusiness();
  const { data: { statements = [] } = {}, isLoading: isStatementsLoading } = useGetStatements(business._id);

  return (
    <>
      {
        (isStatementsLoading || isBusinessLoading) ? (
          <div className="min-h-[300px] bg-slate-200 rounded-2xl">
          </div>
        ) : (
          <Card className="overflow-hidden">
            <div className="px-8 py-6">
              <div className="flex items-center mb-8">
                <h3 className="font-semibold text-base mr-4">Recent analysis</h3>
              </div>
              <div className="space-y-6 text-md w-full">
                {
                  [...statements].slice(0, 4).map((statement, i) => (
                    <div key={ i } className="flex items-center">
                      <div>
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center bg-red-50 text-red-700"
                        >
                          <IconFileText size="20"/>
                        </div>
                      </div>
                      <div className="px-4 overflow-hidden">
                        <p className="font-medium">{ statement.name }</p>
                        <p className="text-[.92rem] overflow-hidden text-ellipsis whitespace-nowrap opacity-80">
                          { statement.bank } - { statement.from }
                        </p>
                      </div>
                      <Link to={ `/statement/analysis/${ statement._id }` } className="ml-auto">
                        <Button variant="outlined" size="sm">View</Button>
                      </Link>
                    </div>
                  ))
                }
                { !statements.length && <p className="opacity-50">No analysis done yet</p> }
              </div>
            </div>
            <hr/>
            <Link
              to={ "/statement/analysis" }
              className="w-full hover:bg-gray-50 flex items-center justify-center px-8 py-2.5 font-medium text-md"
            >
              View all <IconArrowRight size="16" className="ml-4"/>
            </Link>
          </Card>
        )
      }
    </>
  );
};

export default RecentAnalysis;
