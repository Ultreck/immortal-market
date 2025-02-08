import Sidebar from '@/components/core/shared/Sidebar.jsx';
import MarketHero from '@/pages/market/components/Hero.jsx';
import MarketNavbar from '@/pages/market/components/MarketNavbar.jsx';
import PredictVirtual from '@/pages/market/components/PredictVirtual.jsx';

const MarketPage = () => {
  // const [code, setCode] = useState('NG');
  // const [tab, setTab] = useState('africa');
  // const { resolvedTheme: theme } = useTheme();
  // const [data, updateData] = useState({ key: 'on-a-bulls', name: 'On a bulls', icon: <RiLineChartLine size="20" /> });
  //
  // const country = [...countries.africa, ...countries.global].find((c) => c.code === code);
  // const { isOpen: isChatWithAgentOpen, onOpen: onChatWithAgentOpen, onClose: onChatWithAgentClose } = useDisclosure();
  // const { isOpen: isStockQueriesOpen, onOpen: onStockQueriesOpen, onClose: onStockQueriesClose } = useDisclosure();

  return (
    <div className="h-screen overflow-hidden flex">
      <Sidebar source="market" />
      <div className="h-screen flex-1 overflow-y-auto bg-white dark:bg-black/80 border-l border-default-200/50 dark:border-default-50 pr-[400px]">
        <div className="h-[100vh] overflow-hidden flex flex-col">
          <MarketNavbar />
          <MarketHero />
        </div>
      </div>
      <PredictVirtual />
    </div>

    // {/*        <Card className="rounded-2xl border shadow dark:border-0 dark:shadow-none">*/}
    // {/*          <CardBody className="px-8 py-6">*/}
    // {/*            <p>Chat with Immortal Agents</p>*/}
    // {/*            <div className="grid grid-cols-4 items-center gap-6 mt-6">*/}
    // {/*              {writers?.slice(0, 8).map((writer, i) => (*/}
    // {/*                <Tooltip*/}
    // {/*                  placement="bottom"*/}
    // {/*                  key={i}*/}
    // {/*                  classNames={{ content: 'dark:bg-default-100' }}*/}
    // {/*                  content={*/}
    // {/*                    <Card shadow="none" className="w-[250px] border-none bg-transparent">*/}
    // {/*                      <CardHeader className="justify-between">*/}
    // {/*                        <div className="mr-2 flex items-center gap-3">*/}
    // {/*                          <Badge content="AI" isInvisible={writer.type !== 'ai'} placement="bottom-right">*/}
    // {/*                            <Avatar*/}
    // {/*                              radius="full"*/}
    // {/*                              src={getImageLink(writer.image)}*/}
    // {/*                              showFallback*/}
    // {/*                              fallback={<RiUser3Fill size="24" />}*/}
    // {/*                              className="!h-[40px] !w-[40px]"*/}
    // {/*                            />*/}
    // {/*                          </Badge>*/}
    // {/*                          <h4 className="text-base font-medium leading-none text-default-600">*/}
    // {/*                            {writer.firstName} {writer.lastName}*/}
    // {/*                          </h4>*/}
    // {/*                        </div>*/}
    // {/*                        /!*<Link to={`/u/${writer.username}`}></Link>*!/*/}
    // {/*                      </CardHeader>*/}
    // {/*                      <CardBody className="px-3 py-0 pb-4">*/}
    // {/*                        <p className="pl-px text-base text-default-500">{writer.bio}</p>*/}
    // {/*                        /!*<Link to={`/u/${writer.username}`}>*!/*/}
    // {/*                        <Button*/}
    // {/*                          color="primary"*/}
    // {/*                          radius="full"*/}
    // {/*                          size="sm"*/}
    // {/*                          className="mt-6 text-base"*/}
    // {/*                          onClick={() => onChatWithAgentOpen()}*/}
    // {/*                        >*/}
    // {/*                          Chat with {writer.firstName}*/}
    // {/*                        </Button>*/}
    // {/*                        /!*</Link>*!/*/}
    // {/*                      </CardBody>*/}
    // {/*                    </Card>*/}
    // {/*                  }*/}
    // {/*                >*/}
    // {/*                  <Avatar*/}
    // {/*                    radius="full"*/}
    // {/*                    src={getImageLink(writer.image)}*/}
    // {/*                    showFallback*/}
    // {/*                    fallback={<RiUser3Fill size="24" />}*/}
    // {/*                    className="!h-[42px] !w-[42px]"*/}
    // {/*                  />*/}
    // {/*                </Tooltip>*/}
    // {/*              ))}*/}
    // {/*            </div>*/}
    // {/*          </CardBody>*/}
    // {/*        </Card>*/}
    //       {/*      </div>*/}
    //       {/*    </div>*/}
    //       {/*  </div>*/}
    //       {/*</div>*/}
    //     </div>
    //   </div>
    //   {/*<ChatWIthAgentsModal isOpen={isChatWithAgentOpen} onClose={onChatWithAgentClose} writers={writers} />*/}
    //   {/*<StockQueries isOpen={isStockQueriesOpen} onClose={onStockQueriesClose} stocks={actions} />*/}
    // </div>
  );
};

export default MarketPage;
