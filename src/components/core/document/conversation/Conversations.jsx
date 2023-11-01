import { useState } from 'react';
import { IconCheck, IconMessageCircle, IconMessagePlus } from "@tabler/icons-react";
import { useQueryClient } from "@tanstack/react-query";
import { useCreateConversation, useGetConversations } from "@/api/conversations.js";
import { useToast } from "@/hooks/use-toast.jsx";
import Button from "@/components/global/Button.jsx";
import classNames from "classnames";
import Modal from "@/components/global/Modal.jsx";
import PropTypes from "prop-types";

const Conversations = ({ onClick, selected }) => {
  const toast = useToast();
  const qc = useQueryClient();
  const { data: { conversations = [] } = {}, isLoading: isConversationsLoading } = useGetConversations();
  const { mutateAsync: create, isPending: isCreateLoading } = useCreateConversation();
  const [isUpgradeOpen, setIsUpgradeOpen] = useState(false);

  const handleCreate = async () => {
    if (conversations.length === 3) return toast.error('You can only have 3 active conversations at a time');
    try {
      const res = await create(null);
      onClick(res.data.conversation._id);
      await qc.invalidateQueries({
        queryKey: ['conversations']
      });
    } catch (e) {
      toast.error(e?.response?.data?.message ?? e?.message ?? 'Something went wrong, please try again');
    }
  };

  return (
    <>
      <div className="flex-1 overflow-y-auto space-y-4">
        <div className="px-8 md:px-10">
          <Button
            onClick={ handleCreate } loading={ isCreateLoading } disabled={ isConversationsLoading }
            leftIcon={ <IconMessagePlus/> } variant="outlined" color="black" className="w-full"
          >
            New conversation
          </Button>
        </div>
        <hr/>
        <div className="px-8 md:px-10 space-y-4">
          {
            isConversationsLoading ? (
              <>
                <div className="bg-gray-100 rounded-2xl px-4 py-6"></div>
                <div className="bg-gray-100 rounded-2xl px-4 py-6"></div>
                <div className="bg-gray-100 rounded-2xl px-4 py-6"></div>
              </>
            ) : (
              <>
                {
                  conversations.map(conversation => (
                    <div
                      key={ conversation._id } onClick={ () => onClick(conversation._id) }
                      className={ classNames(
                        'flex items-center px-6 py-3 w-full space-x-3 rounded-full cursor-pointer',
                        selected === conversation._id ? 'bg-slate-100 font-semibold' : 'hover:bg-gray-100'
                      ) }
                    >
                      <IconMessageCircle size="20"/>
                      <p className="text-ellipsis whitespace-nowrap overflow-hidden">{ conversation.title }</p>
                    </div>
                  ))
                }
              </>
            )
          }
        </div>
      </div>

      <Modal isOpen={ isUpgradeOpen } onClose={ () => setIsUpgradeOpen(false) } title="Your plan">
        <div className="grid grid-cols-2 gap-8">
          <div className="border rounded-2xl py-6">
            <div className="flex items-center mb-6 px-8">
              <h6 className="text-xl font-medium">Free</h6>
              <div className="px-2 py-0.5 rounded-full text-xs bg-green-500 text-white w-max ml-3">
                Current plan
              </div>
            </div>
            <ul className="divide-y">
              <li className="px-6 py-2 flex items-center">
                <IconCheck className="mr-3 text-green-500"/> Up to 3 conversations
              </li>
              <li className="px-6 py-2 flex items-center">
                <IconCheck className="mr-3 text-green-500"/> Up to 20 messages per conversation
              </li>
            </ul>
          </div>
          <div className="border rounded-2xl py-6">
            <div className="flex items-center mb-6 px-8">
              <h6 className="text-xl font-medium">Plus</h6>
              <div className="px-2 py-0.5 rounded-full text-xs bg-gray-500 text-white w-max ml-3">
                Coming soon
              </div>
            </div>
            <ul className="divide-y">
              <li className="px-6 py-2 flex items-center">
                <IconCheck className="mr-3 text-green-500"/> Up to 20 conversations
              </li>
              <li className="px-6 py-2 flex items-center">
                <IconCheck className="mr-3 text-green-500"/> Up to 100 messages per conversation
              </li>
            </ul>
          </div>
        </div>
      </Modal>
    </>
  );
};

Conversations.propTypes = {
  selected: PropTypes.string,
  onClick: PropTypes.func.isRequired
};

export default Conversations;
