import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IComment } from "../../types/interfaces";

interface CommentProp {
  comment: IComment;
}

const Comment = ({ comment: { displayUrl } }: CommentProp): JSX.Element => {
  return (
    <li className="comment-data h-8 flex items-center justify-between">
      <a href={displayUrl}>{displayUrl}</a>
      <FontAwesomeIcon icon={faTimesCircle} className="text-xl" />
    </li>
  );
};

export default Comment;
