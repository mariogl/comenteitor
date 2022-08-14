import { useCallback, useContext } from "react";
import {
  createCommentActionCreator,
  deleteCommentActionCreator,
  loadCommentsActionCreator,
} from "../contexts/actions/commentsActionCreators";
import CommentsContext from "../contexts/CommentsContext";
import { IComment, ICommentsContext, IProtoComment } from "../types/interfaces";

const useApi = () => {
  const { comments, dispatch } = useContext(
    CommentsContext
  ) as ICommentsContext;

  const loadComments = useCallback(async () => {
    const response = await fetch(process.env.REACT_APP_API_URL as string);
    const { comments: commentsAPI }: { comments: IComment[] } =
      await response.json();

    dispatch(loadCommentsActionCreator(commentsAPI));
  }, [dispatch]);

  const createComment = async (comment: IProtoComment) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL as string}new-comment`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(comment),
        }
      );
      if (!response.ok) {
        throw new Error();
      }
      const newComment: { comment: IComment } = await response.json();
      dispatch(createCommentActionCreator(newComment.comment));
    } catch {
      console.log("Error sending the neww comment to API");
    }
  };

  const removeComment = async (id: string) => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL as string}${id}`,
      {
        method: "DELETE",
      }
    );
    if (response.ok) {
      dispatch(deleteCommentActionCreator(id));
    }
  };

  return {
    comments,
    loadComments,
    createComment,
    removeComment,
  };
};

export default useApi;
