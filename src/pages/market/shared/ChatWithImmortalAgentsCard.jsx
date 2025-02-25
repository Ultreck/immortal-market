import { Avatar, Badge, Button, Card, CardBody, CardHeader, Tooltip, useDisclosure } from '@heroui/react';
import { getImageLink, writers } from '@/lib/utils.js';
import { RiUser3Fill } from 'react-icons/ri';
import ChatWIthAgentsModal from '@/pages/market/modals/ChatWIthAgents.jsx';

const ChatWithImmortalAgentsCard = () => {
  const { isOpen: isChatWithAgentOpen, onOpen: onChatWithAgentOpen, onClose: onChatWithAgentClose } = useDisclosure();

  return (
    <div>
      <Card className="rounded-2xl border shadow dark:border-0 dark:shadow-none">
        <CardBody className="px-10 py-8">
          <p>Chat with Immortal Agents</p>
          <div className="grid grid-cols-4 items-center gap-6 mt-6">
            {writers?.slice(0, 8).map((writer, i) => (
              <Tooltip
                placement="bottom"
                key={i}
                classNames={{ content: 'dark:bg-default-100' }}
                content={
                  <Card shadow="none" className="w-[250px] border-none bg-transparent">
                    <CardHeader className="justify-between">
                      <div className="mr-2 flex items-center gap-3">
                        <Badge content="AI" isInvisible={writer.type !== 'ai'} placement="bottom-right">
                          <Avatar
                            radius="full"
                            src={getImageLink(writer.image)}
                            showFallback
                            fallback={<RiUser3Fill size="24" />}
                            className="!h-[40px] !w-[40px]"
                          />
                        </Badge>
                        <h4 className="text-base font-medium leading-none text-default-600">
                          {writer.firstName} {writer.lastName}
                        </h4>
                      </div>
                    </CardHeader>
                    <CardBody className="px-3 py-0 pb-4">
                      <p className="pl-px text-base text-default-500">{writer.bio}</p>
                      <Button
                        color="primary"
                        radius="full"
                        size="sm"
                        className="mt-6 text-base"
                        onPress={() => onChatWithAgentOpen()}
                      >
                        Chat with {writer.firstName}
                      </Button>
                    </CardBody>
                  </Card>
                }
              >
                <Avatar
                  radius="full"
                  src={getImageLink(writer.image)}
                  showFallback
                  fallback={<RiUser3Fill size="24" />}
                  className="!h-[42px] !w-[42px]"
                />
              </Tooltip>
            ))}
          </div>
        </CardBody>
      </Card>
      <ChatWIthAgentsModal isOpen={isChatWithAgentOpen} onClose={onChatWithAgentClose} writers={writers} />
    </div>
  );
};

export default ChatWithImmortalAgentsCard;
