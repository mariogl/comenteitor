import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useState } from "react";
import CommentsContext from "../../contexts/CommentsContext";
import { IComment, ICommentsContext } from "../../types/interfaces";
import Comment from "../Comment/Comment";

const CommentsList = (): JSX.Element => {
  const { comments: commentsAPI } = useContext(
    CommentsContext
  ) as ICommentsContext;
  const [comments, setComments] = useState<IComment[]>([]);

  useEffect(() => {
    setComments(
      commentsAPI.map((comment) => {
        const url = new URL(comment.url);
        return {
          ...comment,
          displayUrl: url.pathname.split("/")[2],
        };
      })
    );
  }, [commentsAPI]);

  return (
    <>
      <p className="font-medium text-xl mb-4">
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
