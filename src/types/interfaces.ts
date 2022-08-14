import { Dispatch } from "react";
import { Action } from "../contexts/actions/commentsActionsInterfaces";

export interface IProtoComment {
  commentUrl: string;
}
export interface IComment extends IProtoComment {
  id: string;
  date: Date;
}

export interface ICommentsContext {
  comments: IComment[];
  dispatch: Dispatch<Action>;
}
