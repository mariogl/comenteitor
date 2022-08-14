import ReactTimeAgo from "react-time-ago";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useApi from "../../hooks/useApi";
import { IComment } from "../../types/interfaces";

interface CommentProp {
  comment: IComment;
}

const Comment = ({
  comment: { id, commentUrl, date },
}: CommentProp): JSX.Element => {
  const { removeComment } = useApi();

  const removeThisComment = () => {
    removeComment(id);
  };

  return (
    <li className="comment-data h-10 mb-8 flex items-center justify-between gap-2">
      <a href={commentUrl} target="_blank" rel="noreferrer" className="flex-1">
        {commentUrl}
      </a>
      <ReactTimeAgo date={date} />
      <FontAwesomeIcon
        icon={faTimesCircle}
        className="text-xl cursor-pointer"
        onClick={removeThisComment}
      />
    </li>
  );
};

export default Comment;
