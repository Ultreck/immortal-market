import { Button } from '@nextui-org/react';
import React from 'react'
import useCommentStore from '@/store/comment.js'

const CommentBar = () => {
    const openModal = useCommentStore((state) => state.updateModal);
    const modalState = useCommentStore((state) => state.data.modal);
    const selectComment = useCommentStore((state) => state.data.selectComment);
    const updateSelectComment = useCommentStore((state) => state.updateSelectComment);
    const handleClick=()=>{
      if(selectComment){
        updateSelectComment(null);
      }
      openModal(!modalState)
    }
    
    
  return (
    <div>
    <Button
      variant="solid"
      color="success"
      className="text-base px-4"
      radius="full"
      size="sm"
      onClick={handleClick}
    >
      Comment
    </Button>
    </div>
  )
}

export default CommentBar