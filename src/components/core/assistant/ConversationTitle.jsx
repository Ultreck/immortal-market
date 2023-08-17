import { useEffect, useState } from 'react';
import { IconCheck, IconPencilMinus, IconX } from "@tabler/icons-react";
import { useQueryClient } from "@tanstack/react-query";
import IconButton from "@/components/global/IconButton";
import { useUpdateConversation } from "@/api/conversations";
import { useToast } from "@/hooks/use-toast";
import Button from "@/components/global/Button";
import PropTypes from "prop-types";

const ConversationTitle = ({ conversation }) => {
  const toast = useToast();
  const qc = useQueryClient();
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(conversation.title || '');
  const { mutateAsync: update, isLoading: isUpdateLoading } = useUpdateConversation();

  useEffect(() => setEditing(false), [conversation.title]);

  const handleUpdate = async () => {
    if (!title) return;
    try {
      await update({ id: conversation._id, data: { title } });
      setEditing(false);
      await Promise.all([
        qc.invalidateQueries(['conversation', conversation._id]),
        qc.invalidateQueries(['conversations'])
      ]);
    } catch (e) {
      toast.error(e?.response?.data?.message ?? e?.message ?? 'Something went wrong, please try again');
    }
  };

  return (
    <>
      {
        editing ? (
          <div className="flex items-center space-x-2">
            <input
              type="text" value={ title } onChange={ e => setTitle(e.target.value) }
              className="border px-4 py-1.5 rounded-2xl w-[200px]" maxLength="32"
            />
            <IconButton
              onClick={ () => setEditing(false) } icon={ <IconX size="20"/> } variant="outlined" size="sm"
              color="red" rounded
            />
            <Button
              onClick={ handleUpdate } loading={ isUpdateLoading }
              leftIcon={ <IconCheck size="20"/> } variant="outlined" size="sm" color="green"
            >
              Save
            </Button>
          </div>
        ) : (
          <div className="flex items-center space-x-2">
            <h2>{ conversation.title }</h2>
            <IconButton
              onClick={ () => setEditing(true) } rounded
              icon={ <IconPencilMinus size="20"/> } variant="text" size="sm" color="black"
            />
          </div>
        )
      }
    </>
  );
};

ConversationTitle.propTypes = {
  conversation: PropTypes.object.isRequired
};

export default ConversationTitle;
