export interface IComment {
  id: number;
  url: string;
  displayUrl: string;
  date: Date;
}

export interface ICommentsContext {
  comments: IComment[];
}
