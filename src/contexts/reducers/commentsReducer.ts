import { Reducer } from "react";
import { IComment } from "../../types/interfaces";
import {
  Action,
  CreateCommentAction,
  DeleteCommentAction,
  LoadCommentsAction,
} from "../actions/commentsActionsInterfaces";
import commentsActionTypes from "../actions/commentsActionTypes";

const commentsReducer: Reducer<IComment[], Action> = (
  currentComments,
  action
) => {
  let newComments: IComment[];

  switch (action.type) {
    case commentsActionTypes.loadComments:
      newComments = [...(action as LoadCommentsAction).payload];
      break;
    case commentsActionTypes.createComment:
      newComments = [
        ...currentComments,
        (action as CreateCommentAction).payload,
      ];
      break;
    case commentsActionTypes.deleteComment:
      newComments = currentComments.filter(
        (comment) => comment.id !== (action as DeleteCommentAction).payload
      );
      break;
    default:
      newComments = currentComments;
  }

  return newComments;
};

export default commentsReducer;
