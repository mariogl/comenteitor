import { IComment } from "../../types/interfaces";

export interface Action {
  type: string;
  payload: any;
}

export interface LoadCommentsAction extends Action {
  payload: IComment[];
}
export interface DeleteCommentAction extends Action {
  payload: string;
}

export interface CreateCommentAction extends Action {
  payload: IComment;
}
