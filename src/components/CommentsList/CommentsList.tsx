import { useEffect } from "react";
import useApi from "../../hooks/useApi";
import Comment from "../Comment/Comment";

const CommentsList = (): JSX.Element => {
  const { comments, loadComments } = useApi();

  useEffect(() => {
    loadComments();
  }, [loadComments]);

  return (
    <>
      <p className="font-medium text-xl mb-6">
        {comments.length} pending comments
      </p>
      <ul className="comment-list">
        {comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </ul>
    </>
  );
};

export default CommentsList;
