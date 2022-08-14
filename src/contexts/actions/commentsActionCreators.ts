import { IComment } from "../../types/interfaces";
import {
  CreateCommentAction,
  DeleteCommentAction,
  LoadCommentsAction,
} from "./commentsActionsInterfaces";
import commentsActionTypes from "./commentsActionTypes";

export const loadCommentsActionCreator = (
  comments: IComment[]
): LoadCommentsAction => ({
  type: commentsActionTypes.loadComments,
  payload: comments,
});

export const deleteCommentActionCreator = (
  id: string
): DeleteCommentAction => ({
  type: commentsActionTypes.deleteComment,
  payload: id,
});

export const createCommentActionCreator = (
  comment: IComment
): CreateCommentAction => ({
  type: commentsActionTypes.createComment,
  payload: comment,
});
